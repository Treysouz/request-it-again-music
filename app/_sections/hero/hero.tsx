import { SectionWrapper } from "@/components";
import { Bebas_Neue } from "next/font/google";

const BEBAS_NEUE = Bebas_Neue({ weight: "400" });

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="h-dvh">
      <div
        className={`${BEBAS_NEUE.className} bg-[url(https://us-west-2.graphassets.com/cmkyv8p8a0e2307n05rv1dsa6/cml1518os1gxx07lpvqd9ebxr)] h-full w-full bg-cover `}
      >
        <div className="w-full h-full bg-black/50 flex flex-col justify-center p-16 space-y-32">
          <h2 className="text-8xl">Lorem Ipsum</h2>

          <h3 className="text-6xl">
            Nam felis dolor, dignissim non fermentum a, rutrum non ex
          </h3>
        </div>
      </div>
    </SectionWrapper>
  );
}
