import profile from "../assets/images/avatar-jessica.jpeg";
function Info() {
  return (
    <section className="text-center flex items-center flex-col mt-2 sm:mt-5">
      <img src={profile} alt="" className="block w-24 md:w-28 rounded-full" />
      <h1 className="text-text font-medium text-[30px] md:text-3xl  mt-5">
        Jessica Randall
      </h1>
      <p className="text-accent mt-2 text-sm font-semibold">
        London, United Kingdom
      </p>
      <p className="text-text mt-5">
        &quot;Front-end developer and avid reader.&quot;
      </p>
    </section>
  );
}

export default Info;
