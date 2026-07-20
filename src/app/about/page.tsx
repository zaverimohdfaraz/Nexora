import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { Story } from "@/components/sections/about/Story";
import { MissionValues } from "@/components/sections/about/MissionValues";
import { Timeline } from "@/components/sections/about/Timeline";
import { Team } from "@/components/sections/about/Team";
import { Achievements } from "@/components/sections/about/Achievements";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Nexora Solutions — our story, mission, values, and the team building premium digital products for ambitious companies.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <MissionValues />
      <Timeline />
      <Team />
      <Achievements />
      <CTA />
    </>
  );
}
