import Navbar from "@/components/Navbar";
import Image from "next/image";
import LinkTo from "@/components/LinkTo";
import QuickLinks from "@/components/QuickLinks";
import AboutAndContact from "@/components/About&Contact";
import CowSay from "@/components/CowSay";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="outer-div grid grid-cols-2 md:grid-cols-5 p-5">
        <div className="text-lg hover:cursor-help">
          Thokchom Jnyandeep Singh
        </div>
        <div className="relative">
          <Image
            src="/sonney-rem.png"
            alt="Sonney"
            fill
            className="object-contain rounded-lg"
            draggable={false}
          />
        </div>
        <AboutAndContact />
        <CowSay />
        <div className="relative">
          <Image
            src="/(1).png"
            alt="me fr"
            fill
            className="object-contain rounded-lg"
            draggable={false}
          />
        </div>
        <QuickLinks />
        <div>
          <p>Current Fav Album</p>
          <p className="text-sm">Grace - Jeff Buckley</p>
          <LinkTo href="https://open.spotify.com/album/7yQtjAjhtNi76KRu05XWFS">
            Spotify
          </LinkTo>
        </div>
        <div className="hover:cursor-ne-resize">
          <LinkTo href="https://drive.google.com/file/d/1aL4ta6Lz_aRiqDgYuwTWCCMJlC0bWBfe/view?usp=drivesdk" underline="underline">
            <p>Resume</p>
            <p className="text-sm">Updated every now and then</p>
          </LinkTo>
        </div>
      </div>
    </div>
  );
}
