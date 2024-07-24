import classes from "../background.module.css";
import TeamCard from "./TeamCard";

interface Member {
  img: string;
  name: string;
  role: string;
  socials: any;
}

const Team = () => {
  return (
    <section
      className={
        "flex flex-col gap-6 py-16 w-full relative items-center justify-center " +
        classes.bgDots
      }
    >
      <p className="subtitle z-20">Nasz Zespół</p>
      <h6 className="text-6xl font-semibold max-w-4xl text-center z-20">
        Poznajcie nasz zespół
      </h6>
      <div className="flex flex-wrap gap-12 items-center justify-center z-20  mt-8">
        {members.map((member: Member, index: number) => (
          <TeamCard content={member} key={index} />
        ))}
      </div>
      <div
        className={
          classes.bgInsideShadow + " w-full h-full absolute top-0 left-0"
        }
      ></div>
    </section>
  );
};

export default Team;

const members = [
  {
    img: "/img/worker/worker.jpg",
    name: "Michał Nowak",
    role: "Kierownik Budowy",
    socials: ["", "", "", ""],
  },
  {
    img: "/img/worker/worker4.jpg",
    name: "Famhida Ruko",
    role: "Architekt",
    socials: ["", "", "", ""],
  },
  {
    img: "/img/worker/worker3.jpg",
    name: "Benjamin Nowak",
    role: "Założyciel",
    socials: ["", "", "", ""],
  },
  {
    img: "/img/worker/worker2.jpg",
    name: "Michał Kowalski",
    role: "Inżynier",
    socials: ["", "", "", ""],
  },
];
