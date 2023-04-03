import Logo from "./img/logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black text-xl text-red-500">
      <nav className="container mx-auto flex flex-col flex-wrap p-5 md:flex-row max-w-[95%]">
        <span className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={125} height={125} />
          </Link>
        </span>
      </nav>
    </header>
  );
}
