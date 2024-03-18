import PropTypes from 'prop-types';

import Qty from './Qty';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { IoClose } from 'react-icons/io5';

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className="flex items-center justify-between gap-x-8 mb-6">
            <Link to={`/products/${item.id}`} className="w-[70px] h-[70px]">
                <img
                    className="w-16 h-16 object-cover rounded-lg"
                    src={process.env.REACT_APP_API_HOST + item.attributes.image.data.attributes.url}
                    alt={item.attributes.image.data.attributes.name}
                />
            </Link>
            <div className="flex-1">
                <div className="flex gap-x-4 mb-3">
                    <Link to={`/products/${item.id}`} className="text-lg font-medium">
                        {item.attributes.title}
                    </Link>
                    <div
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer text-[24px] hover:text-accent transition-all">
                        <IoClose />
                    </div>
                </div>
                <div className="flex items-center gap-x-12">
                    <div className="flex items-center gap-x-4 mb-2">
                        <Qty item={item} />
                    </div>
                    <div className="text-accent text-xl">
                        $ {item.attributes.price * item.amount}
                    </div>
                </div>
                <div className="text-accent">${item.attributes.price} per piece</div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.object.isRequired
};

export default CartItem;
