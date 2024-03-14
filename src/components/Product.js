import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
    console.log(product);
    return (
        <Link to={`/product/${product.id}`}>
            <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative">
                {product.attributes.isNew && (
                    <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
                        new
                    </div>
                )}
                <div className="w-full h-[200px] flex items-center justify-center relative">
                    <img
                        className="w-[160px] h-[160px] group-hover:scale-90 transition-all"
                        src={
                            process.env.REACT_APP_API_HOST +
                            product.attributes.image.data.attributes.url
                        }
                        alt={product.attributes.image.data.attributes.name}
                    />
                </div>
                <div className="px-6 pb-8 flex flex-col">
                    <div className="text-sm text-accent capitalize mb-2">
                        {product.attributes.categories.data[0].attributes.title}
                    </div>
                    <div className="text-[15px] mb-4 lg:mb-8">
                        {product.attributes.title.substring(0, 35)}...
                    </div>
                    <div className="text-lg text-accent">${product.attributes.price}</div>
                </div>
            </div>
        </Link>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;
