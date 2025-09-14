import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center py-10 md:h-auto max-h-screen">
        <Image
          src={"/image/img2.png"}
          alt="random dog image"
          width={1000}
          height={500}
          className="justify-center items-center"
          priority
        />
      </div>
    </>
  );
}
