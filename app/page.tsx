import PageShell from "@/components/PageShell";

export default function Home() {
  return (
    <PageShell>
      <div className="flex flex-col-reverse xl:flex-row items-center justify-center xl:min-h-screen w-full">
        <div className="flex flex-col items-center my-10">
          <p className="text-xl w-52 text-center">
            他们是马，你是独角兽 <br /> 你漂亮，他们丑陋; <br />
            你是天鹅，他们青蛙
          </p>
        </div>
        <video
          autoPlay
          loop
          muted
          preload="auto"
          width={740}
          height={260}
          playsInline
          className="-z-10 md:pl-10 md:-mr-20"
        >
          <source src="/home.webm" type="video/webm" />
          <source src="/home-opt.mp4" type="video/mp4" />
        </video>
      </div>
    </PageShell>
  );
}
