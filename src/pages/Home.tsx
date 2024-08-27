import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <div className="absolute">
        </div> */}
      {/* <img
          className="absolute bottom-[57px] w-[90%] h-[80%]"
          src="/homeborder.png"
        /> */}
      <div className="flex flex-col xl:flex-row gap-x-60 justify-center  h-fit w-full items-center container mx-auto px-32">
        <section
          data-aos="fade-up"
          data-aos-once
          className="flex flex-col order-3 xl:order-1 text-center xl:text-left"
        >
          <span
            data-aos-once
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="xl:text-[28px] sm:text-[24px] text-[18px]"
          >
            HELLO, I am a <b className="font-semiBold">Taonga Nambela</b>
          </span>
          <span
            data-aos-once
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-offset="-100"
            className="font-semiBold xl:text-[55px] sm:text-[45px] text-[35px] text-primary"
          >
          {/* Full Stack  */}
          </span>
          <span
            data-aos-once
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
            data-aos-offset="-100"
            className="font-semiBold -mt-2 text-[35px] xl:text-[55px] sm:text-[45px] text-[#961A7A] tracking-[24px] sm:tracking-[31px] xl:tracking-[38px] ml-5 sm:ml-8 xl:ml-0"
          >
              Full Stack Software Developer
          </span>
          <p
            data-aos-once
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-offset="-100"
            className="capitalize max-w-[500px] leading-6"
          >
            lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            officia tempore nisi odit, minus odio consequatur alias
            reprehenderitlorem ipsum, dolor sit amet consectetur adipisicing
            elit. Facere officia tempore nisi odit, minus odio consequatur alias
            reprehenderitlorem ipsum, dolor sit amet consectetur adipisicing
            elit. Facere officia tempore nisi odit, minus odio consequatur alias
            reprehenderitlorem ipsum, dolor sit amet consectetur adipisicing
            elit. Facere officia tempore nisi odit, minus odio consequatur alias
            reprehenderit
          </p>
        </section>
        <section className="relative order-2">
          <div className="absolute z-[-1] xl:left-[-50px] top-[-10px]">
            <img
              data-aos-once
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              src="/bigCircle.png"
              className="xl:w-[500px]  md:w-[300px] w-[250px] "
            />
          </div>
          <div>

          <img
              data-aos-once
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              src="/bigCircle.png"
              className="xl:w-[500px]  md:w-[300px] w-[250px] "
            />
            {/* <img
              data-aos-once
              data-aos="fade-left"
              src="/businessMan.png"
              className="xl:w-[400px] md:w-[300px] w-[250px] "
            /> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
