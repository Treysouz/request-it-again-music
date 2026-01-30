import { Bebas_Neue } from "next/font/google";

interface SectionHeaderProps {
  /**Text to render in header */
  children: string;
}

const BEBAS_NEUE = Bebas_Neue({ weight: "400" });

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2
      className={`${BEBAS_NEUE.className} text-xl sm:text-2xl xl:text-4xl text-secondary`}
    >
      {children}
    </h2>
  );
}
