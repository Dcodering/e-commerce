import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "slick-carousel";

function HeroSection() {
  return <div className="md:px-16 lg:px-36 px-2 w-full">
    <Slider
        modules={[Autoplay, Pagination]}
        direction={"horizontal"}
        spaceBetween={30}
        pagination={{clickable: true}}
        slidesPerView={1}
        speed={1500}
        autoplay={{delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true,}}
        loop={true}
    >
        {
            heroDatas.map((item, id) =>(
                <SwiperSlide key={id}>
                    <div className="w-full md:px-[10%] rounded-lg gap-1 items-center lg:gap-16 flex p-4 lg:h-[450px] md:h-[300px] h-[230px] bg-gray-300">
                        <div className="w-[60%] flex flex-col gap-4">
                            <p className="md:text-sm text-xs text-cyan-700"> {item.offer} </p>
                            <p className="font-bold lg:text-5xl md:text-3xl leading-tight text-lg"> {item.description} </p>
                            <div className="flex items-center gap-2 lg:mt-6 lg:gap-8">
                                <Button size='' className='text-[11px] bg-cyan-700 rounded-full lg:text-[16px] cursor-pointer text-center font-medium'>{item.buttonText} </Button>
                                <p className="text-xs text-center cursor-pointer flex lg:text-[16px] items-center">{item.navigate}<ArrowUpRight width={15} height={15} /></p>
                            </div>
                        </div>

                        <div className="w-[40%]"> <img src={item.image} alt="" className="lg:w-4/5"/> </div>
                    </div>
                </SwiperSlide>
            ))
        }
    </Slider>
  </div>;
}

export default HeroSection;
