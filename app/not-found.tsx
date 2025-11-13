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

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        
        <Image
          src="/text.png"
          alt="Not Found"
          width={300}
          height={300}
        />

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
