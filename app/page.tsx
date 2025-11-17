import PageShell from "@/components/PageShell";

export default function Home() {
  return (
    <PageShell>
      <div className="flex flex-col-reverse xl:flex-row items-center justify-center xl:min-h-screen w-full">
        <div className="flex flex-col items-center">
          <p className=" text-2xl md:text-3xl border-6 p-2 font-bold text-center">
            Scrolling Kills
          </p>
          <p className="text-xl font-light w-52 text-center mt-4 mb-4">
            他们是马，你是独角兽 <br /> 你漂亮，他们丑陋; <br />
            你是天鹅，他们青蛙
          </p>
        </div>
        <video
          src="/home.mp4"
          autoPlay
          loop
          muted
          preload="metadata"
          width={740}
          height={260}
          playsInline
          className="-z-10 md:pl-10 md:-mr-20"
          // className="-z-10 "
        />
      </div>
    </PageShell>
  );
}
