import Link from "next/link";

interface SocialProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  platform: string;
}

export default function Social({ Icon, link, platform }: SocialProps) {
  return (
    <Link
      href={link}
      aria-label={`${platform} Profile`}
      rel="external"
      className="group"
    >
      <div className="w-10 h-10 flex items-center justify-center">
        <Icon
          className="w-[22px] h-[22px]  text-grey hover:fill-black transition-all duration-300 ease-in-out group-focus-within:scale-75"
          aria-label={`${platform} Icon`}
        />
      </div>
    </Link>
  );
}
