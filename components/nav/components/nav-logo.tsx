import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const BEBAS_NEUE = Bebas_Neue({ weight: "400" });

export default function NavLogo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        alt="Request It Again Music"
        width={205}
        height={142}
        className="w-34"
        src="https://us-west-2.graphassets.com/cmkyv8p8a0e2307n05rv1dsa6/cmkzt904s2kq107lotxluajk1"
        priority
      ></Image>
      <h1
        className={`${BEBAS_NEUE.className} text-4xl text-black pt-2 leading-8`}
      >
        REQUEST IT <br></br>AGAIN MUSIC
      </h1>
    </div>
  );
}
