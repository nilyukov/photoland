import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/styles/slider.css';

import Product from './Product';

const ProductSlider = ({ data }) => {
    return (
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            loop={false}
            navigation={true}
            breakpoints={{
                320: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1440: {
                    slidesPerView: 5
                }
            }}
            pagination={{
                clickable: true
            }}
            className="productSlider mx-auto pb-5 max-w-[360px] md:max-w-lg lg:max-w-xl xl:max-w-[1410px]">
            <>
                {data?.map((product) => {
                    return (
                        <SwiperSlide key={product.id}>
                            <Product product={product} />
                        </SwiperSlide>
                    );
                })}
            </>
        </Swiper>
    );
};

ProductSlider.propTypes = {
    data: PropTypes.array
};

export default ProductSlider;
