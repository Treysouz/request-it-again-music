import {
  AboutSection,
  ContactSection,
  EventsSection,
  HeroSection,
  ReleasesSection,
  RosterSection,
} from "./_sections";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <ReleasesSection></ReleasesSection>
      <AboutSection></AboutSection>
      <RosterSection></RosterSection>
      <EventsSection></EventsSection>
      <ContactSection></ContactSection>
    </>
  );
}
