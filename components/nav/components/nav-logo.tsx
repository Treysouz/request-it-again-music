import Image from "next/image";
import Link from "next/link";

import { Bebas_Neue } from "next/font/google";

const BEBAS_NEUE = Bebas_Neue({ weight: "400" });

export default function NavLogo() {
  return (
    <Link
      className="flex flex-row lg:flex-col items-center justify-center space-x-2 sm:space-x-4 "
      href="/"
      target="_parent"
    >
      <Image
        alt="Request It Again Music"
        width={205}
        height={142}
        className="w-14 sm:w-24 lg:w-36"
        src="https://us-west-2.graphassets.com/cmkyv8p8a0e2307n05rv1dsa6/cmkzt904s2kq107lotxluajk1"
        priority
      ></Image>
      <h1
        className={`${BEBAS_NEUE.className} text-2xl sm:text-4xl lg:text-5xl text-black pt-2 leading-5 sm:leading-8 lg:leading-9 whitespace-nowrap`}
      >
        REQUEST IT <br></br>AGAIN MUSIC
      </h1>
    </Link>
  );
}
