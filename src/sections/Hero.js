import MainSlider from '../components/MainSlider';
import CategoryNav from '../components/CategoryNav';

import promoImg1 from '../assets/images/promo-img1.png';
import promoImg2 from '../assets/images/promo-img2.png';

const Hero = () => {
    return (
        <section className="mb-[30px] pt-36 lg:pt-0">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
                    <div>
                        <CategoryNav />
                    </div>
                    <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
                        <MainSlider />
                    </div>
                    <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
                        <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
                            <div className="flex flex-col max-w-[144px] h-full justify-center">
                                <p className="text-[20px] uppercase font-medium leading-tight mb-4">
                                    Save 35% all mirrorless cameras
                                </p>
                                <a href="#" className="uppercase text-accent">
                                    Shop now
                                </a>
                            </div>
                            <img
                                src={promoImg1}
                                alt="Promo image"
                                className="absolute z-20 -top-2 -right-4"
                            />
                        </div>
                        <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
                            <div className="flex flex-col max-w-[144px] h-full justify-center">
                                <p className="text-[20px] uppercase font-medium leading-tight mb-4">
                                    Save 5% all dslr cameras
                                </p>
                                <a href="#" className="uppercase text-accent">
                                    Shop now
                                </a>
                            </div>
                            <img
                                src={promoImg2}
                                alt="Promo image"
                                className="absolute z-20 -top-4 -right-6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
