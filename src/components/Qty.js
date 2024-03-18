import PropTypes from 'prop-types';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Qty = ({ item }) => {
    const { handleInput } = useContext(CartContext);

    return (
        <div className="flex gap-x-6 items-center text-primary">
            <select
                value={item.amount}
                onChange={(e) => handleInput(e, item.id)}
                className="p-2 rounded-lg w-[100px] h-12 outline-none text-primary">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
    );
};

Qty.propTypes = {
    item: PropTypes.object
};

export default Qty;
