import AboutImage from "./AboutImage";
import Description from "./Description";

const About = () => {
  return (
    <section className="p-4 flex flex-col lg:flex-row items-center justify-center gap-12 my-24 ">
      <AboutImage />
      <Description />
    </section>
  );
};

export default About;
