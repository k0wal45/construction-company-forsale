import AboutImage from "./AboutImage";
import Description from "./Description";

const About = () => {
  return (
    <section className="py-24 p-4 flex items-center justify-center gap-12 my-24">
      <AboutImage />
      <Description />
    </section>
  );
};

export default About;
