import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Skills = () => {
  useEffect(() => {
    AOS.init({ once: true });
    window.addEventListener("load", AOS.refresh);

    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);

  return (
    <div>
      <div id="skills" className="pt-8">
        <h1
          data-aos="zoom-out-up"
          data-aos-once
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-center my-2 mb-10 text-primary text-[60px]"
        >
          My Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 md:gap-4 container mx-auto px-10">
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-duration="500"
            className="flex flex-col items-center text-center"
          >
            <img src="/creative-thinking-icon.svg" className="h-[100px] mb-4"/>
            <span className="font-bold">Problem Solving</span>
            <p className="w-[210px]">
            I Understand what it takes to solve problems effectively.          
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="250"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/teamwork-together-icon.svg" className="h-[100px] mb-4"/>
            <span className="font-bold">Teamwork skills</span>
            <p className="w-[210px]">
            I work well with others to achieve a common goal, whether it's completing a project, solving a problem, or delivering a service.            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="350"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/time.svg" className="h-[100px] mb-4"/>
            <span className="font-bold">Time management skills</span>
            <p className="w-[210px]">
          I plan and exercise conscious control of time spent on specific activities.            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="450"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/operations-icon.svg" className="h-[100px] mb-4"/>
            <span className="font-bold">Adaptability</span>
            <p className="w-[210px]">
            I'm open to change         </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="550"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/affiliate-marketing-icon.svg" className="h-[100px] mb-4"/>
            <span className="font-bold">Communication skills</span>
            <p className="w-[210px]">
            I have the ability to accurately convey a message to another person or group of people.      
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="650"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/innovative-brain-icon.svg" className="h-[100px] mb-4"/>
            <span className="font-bold">Critical thinking skills</span>
            <p className="w-[210px]">
            I have the ability to think clearly and rationally about what to do or what to believe.   
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="750"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/services-icon.svg" className="h-[100px] mb-4"/>
            <span className="font-bold">Interpersonal skills</span>
            <p className="w-[210px]">
            I have the ability to communicate or interact well with other people.
            </p>          
            </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="850"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/speak-speech-man-icon.svg" className="h-[100px] mb-4" />
            <span className="font-bold">Presentation skills</span>
            <p className="w-[210px]">
            I have the ability to effectively convey information, ideas, or opinions to an audience through oral, visual, or written means.            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="950"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/briefcase-line-icon.svg" className="h-[100px] mb-4" />
            <span className="font-bold">Work ethic</span>
            <p className="w-[210px]">
              I have a good approach towards work
            </p>
          </div>
          <div
            data-aos="flip-right"
            data-aos-once
            data-aos-delay="1050"
            data-aos-duration="1000"
            className="flex flex-col items-center text-center"
          >
            <img src="/learning-machine-ai-icon.svg" className="h-[100px] mb-4" />
            <span className="font-bold">Emotional intelligence</span>
            <p className="w-[210px]">
            I have ability to manage both your own emotions and understand the emotions of people around me.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
