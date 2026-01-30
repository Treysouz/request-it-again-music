import {
  ContactSection,
  RecentEventsSection,
  HeroSection,
  LatestReleasesSection,
  RosterSection,
} from "./_sections";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <LatestReleasesSection></LatestReleasesSection>
      <RosterSection></RosterSection>
      <RecentEventsSection></RecentEventsSection>
      <ContactSection></ContactSection>
    </>
  );
}
