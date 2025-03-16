import LinkTo from "./LinkTo";

export default function QuickLinks() {
  return (
    <div>
      <p>Quick Links</p>
      <p className="text-sm">
        <LinkTo href="https://www.youtube.com/watch?v=9bZkp7q19f0">
          Youtube
        </LinkTo>
        , <LinkTo href="https://remove.bg">Remove.bg</LinkTo>
        , <br />
        <LinkTo href="https://google.com">Google</LinkTo>,{" "}
        <LinkTo href="https://github.com">Github</LinkTo>
        ,
        <br />
        <LinkTo href="https://remix.ethereum.org/">Remix</LinkTo>,{" "}
        <LinkTo href="https://chat.openai.com">ChatGPT</LinkTo>
      </p>
    </div>
  );
}
