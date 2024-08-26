import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        id="about"
        className="flex overflow-hidden flex-col h-fit my-32 xl:my-64 xl:flex-row items-center justify-center gap-x-40 container mx-auto px-32"
      >
        <img
          data-aos-once
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="absolute left-[-30%] w-[90%] h-[80%]"
          src="/circleOne.svg"
        />
        <img
          data-aos-once
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-duration="1000"
          className="max-sm:hidden absolute right-[-40%] w-[90%] h-[80%]"
          src="/circleTwo.svg"
        />
        <div>
          <p
            data-aos-once
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="font-extrabold  xl:text-[55px] sm:text-[45px] text-[35px] text-[#961A7A] text-center"
          >
            <span>ABDUALRAHMAN</span> <br />
            <span
              data-aos-once
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
              className="font-extrabold xl:text-[55px] sm:text-[45px] text-[35px] text-[#961A7A] tracking-[24px] sm:tracking-[31px] xl:tracking-[38px] ml-6 sm:ml-9"
            >
              RIHAWEI
            </span>
          </p>
        </div>
        <p
          data-aos-once
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="500"
          className="text-center text-[15px] sm:text-lg min-w-[240px]"
        >
          <span className="font-extrabold">I am Abd al-rahman Rihawei</span>
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          aperiam in aspernatur corporis hic culpa accusantium vitae, blanditiis
          consectetur exercitationem eligendi eos dolore rerum impedit! Saepe
          laudantium vero distinctio deserunt accusamus ullam illo consectetur
          voluptas, sed nulla quas autem aspernatur velit architecto enim,
          debitis nam error totam ab voluptatem consequatur nobis! Earum
          possimus pariatur magni molestiae quibusdam quidem, consectetur Lorem,
          ipsum dolor sit amet
        </p>
      </div>
    </>
  );
};

export default About;
