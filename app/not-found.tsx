import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-row">
          <p className="font-papyrus text-white text-3xl md:text-6xl">page</p>
          <Image
            src="/buddha.png"
            alt="buddha"
            height={60}
            width={60}
            className="inline w-10 md:w-14 h-10 md:h-14 rounded-md"
          />
          <p className="font-papyrus text-white text-3xl md:text-6xl">not</p>
          <Image
            src="/om.jpg"
            alt="om"
            height={60}
            width={60}
            className="inline w-10 md:w-12 h-10 md:h-12 rounded-md mx-4"
          />
          <p className="font-papyrus text-white text-3xl md:text-6xl">found</p>
        </div>
        <a
          href="/"
          className="mt-6 inline-block rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-black hover:bg-white"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
// #E00C66
