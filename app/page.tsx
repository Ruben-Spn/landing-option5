import Image from "next/image";
import Social from "./components/Social";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="bg-beige h-full rounded-[20px] p-6 font-roboto">
      <header className="w-full flex justify-between items-center">
        <Image
          src={"/assets/logo/logo.svg"}
          height={30}
          width={120}
          alt="Option5 logo"
        />
        <div className="flex justify-center items-center">
          <Social
            link="https://www.instagram.com/option5.studio/"
            Icon={FaFacebook}
            platform="facebook"
          />
          <Social
            link="https://www.instagram.com/option5.studio/"
            Icon={FaTwitter}
            platform="twitter"
          />
          <Social
            link="https://www.instagram.com/option5.studio/"
            Icon={FaInstagram}
            platform="instagram"
          />
        </div>
      </header>
      <main></main>
    </div>
  );
}
