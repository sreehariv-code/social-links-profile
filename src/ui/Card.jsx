import Info from "./Info";
import LinkButton from "./LinkButton";

const links = [
  { name: "github", url: "http://github.com/sreehariv-code" },
  { name: "frontend mentor", url: "http://github.com/sreehariv-code" },
  { name: "linkedin", url: "http://github.com/sreehariv-code" },
  { name: "twitter", url: "http://github.com/sreehariv-code" },
  { name: "instagram", url: "http://github.com/sreehariv-code" },
];

function Card() {
  return (
    <div className="bg-primary w-[90%] md:w-[70%] max-w-[480px] rounded-xl flex flex-col   aspect-[9/16] md:aspect-[9/14] py-5">
      <Info />
      <section className=" flex flex-col grow px-5 md:px-10 pt-5 pb-[2rem] md:pb-0 gap-5">
        {links.map((link, index) => (
          <LinkButton to={link.url} key={index}>
            {link.name}
          </LinkButton>
        ))}
      </section>
    </div>
  );
}

export default Card;
