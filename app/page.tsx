import PageShell from "@/components/PageShell";
import Image from "next/image";

export default function Home() {
  return (
    <PageShell>
      <div className="flex items-center justify-center md:min-h-screen w-full">
        <video src="/home.mp4" autoPlay loop muted preload="metadata" width={640} height={360} className="mx-auto" />
      </div>
    </PageShell>
  );
}
