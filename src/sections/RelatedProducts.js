import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

import ProductSlider from '../components/ProductSlider';

const RelatedProducts = ({ categoryId }) => {
    const { data } = useFetch('/products?populate=*&filters[categories][id][$eq]=' + categoryId);
    return (
        <section>
            <div className="container mx-auto">
                <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
                <ProductSlider data={data} />
            </div>
        </section>
    );
};

RelatedProducts.propTypes = {
    categoryId: PropTypes.number.isRequired
};

export default RelatedProducts;
