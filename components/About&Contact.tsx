import LinkTo from "./LinkTo";

export default function AboutAndContact() {
  return (
    <>
      <div className="hover:cursor-help">
        <p>About</p>
        <p className="text-sm">
          Hi, I am a blockchain dev <br />
          currently studying CS <br />I love building and music
        </p>
      </div>
      <div className="hover:cursor-help">
        <p>Contact</p>
        <p className="text-sm">
          thokchom.jnyandeep
          <br />
          @gmail.com <br />
          <LinkTo
            href="
                    https://www.linkedin.com/in/thokchom-jnyandeep-singh-7b1b3b1b4/
                    "
          >
            LinkedIn
          </LinkTo>
          , <LinkTo href="https://x.com/0xjd_l1">Twitter</LinkTo>
          , <br />
          <LinkTo href="https://github.com/jny0444">Github</LinkTo>
        </p>
      </div>
    </>
  );
}
