import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const BEBAS_NEUE = Bebas_Neue({ weight: "400" });

export default function NavLogo() {
  return (
    <div className="flex flex-row lg:flex-col items-center justify-center space-x-2 sm:space-x-4 flex-wrap">
      <Image
        alt="Request It Again Music"
        width={205}
        height={142}
        className="w-20 sm:w-24 lg:w-36"
        src="https://us-west-2.graphassets.com/cmkyv8p8a0e2307n05rv1dsa6/cmkzt904s2kq107lotxluajk1"
        priority
      ></Image>
      <h1
        className={`${BEBAS_NEUE.className} text-4xl sm:text-4xl lg:text-5xl text-black pt-2 leading-7 sm:leading-8 lg:leading-9 whitespace-nowrap`}
      >
        REQUEST IT <br></br>AGAIN MUSIC
      </h1>
    </div>
  );
}
