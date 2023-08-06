import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute w-full z-30 flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/">
            <h1 className="text-3xl tracking-widest">
              <span className="font-extrabold">Jagath</span>{" "}
              <span className="font-extralight">Nalaka</span>
              <span className="text-accent text-5xl">.</span>
            </h1>
            {/* <Image
              alt="logo"
              src="/logo.svg"
              width={220}
              height={48}
              priority
            /> */}
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
