import Image from "next/image";
import Social from "./Social";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center">
      <Image
        src={"/assets/logo/logo.svg"}
        height={40}
        width={150}
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
  );
}
