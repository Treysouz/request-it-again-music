import { SectionWrapper, SectionHeader, Icon, Carousel } from "@/components";
import Link from "next/link";
import { ReleaseCard } from "./__components";

export default function LatestReleases() {
  return (
    <SectionWrapper id="latest-releases" className="p-16 flex space-y-16  ">
      <div className="border-b-2 border-secondary w-full flex flex-row justify-between items-center pb-4">
        <SectionHeader>Latest Releases</SectionHeader>

        <Link href="/releases">
          <button className="btn btn-link text-link font-bold underline-offset-4 flex flex-row items-center">
            VIEW ALL
            <Icon svg="arrow-right-short" className="size-6 -m-2"></Icon>
          </button>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-full  max-w-full">
        <Carousel>
          <ReleaseCard></ReleaseCard>
          <ReleaseCard></ReleaseCard>
          <ReleaseCard></ReleaseCard>
          <ReleaseCard></ReleaseCard>
          <ReleaseCard></ReleaseCard>
          <ReleaseCard></ReleaseCard>
          <ReleaseCard></ReleaseCard>
          <ReleaseCard></ReleaseCard>
          <ReleaseCard></ReleaseCard>
          <ReleaseCard></ReleaseCard>
          <ReleaseCard></ReleaseCard>
        </Carousel>
      </div>
    </SectionWrapper>
  );
}
