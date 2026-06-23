import Navbar from "@/components/Navbar";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientAnimations from "@/components/ClientAnimations";
import clientPromise from "@/lib/mongodb";
import fs from "fs/promises";
import path from "path";
import { getTheme } from "@/lib/themes";

// Tell Next.js to dynamically render this page since it relies on DB content
export const revalidate = 0;

async function getPortfolioData() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const content = await db.collection("content").findOne({ _id: "portfolio_content" });

    if (content) {
      const { _id, ...cleanContent } = content;
      return cleanContent;
    }
  } catch (err) {
    console.error("Database fetch failed, loading local file as fallback:", err);
  }

  // Load fallback seed file if MongoDB is temporarily unavailable
  const dataFilePath = path.join(process.cwd(), "src", "data", "portfolio.json");
  const fileData = await fs.readFile(dataFilePath, "utf8");
  return JSON.parse(fileData);
}

export default async function Home() {
  const portfolioData = await getPortfolioData();
  const theme = getTheme(portfolioData.themeId || "midnight-violet");
  
  const initials = portfolioData.hero?.avatarInitials || "CDVN";
  const fullName = `${portfolioData.hero?.nameLine1 || ""} ${portfolioData.hero?.nameLine2 || ""}`.replace(/\s+/g, ' ').trim();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg: ${theme.colors.bg};
          --bg2: ${theme.colors.bg2};
          --surface: ${theme.colors.surface};
          --surface2: ${theme.colors.surface2};
          --violet: ${theme.colors.primary};
          --violet-light: ${theme.colors.primaryLight};
          --cyan: ${theme.colors.secondary};
          --blue: ${theme.colors.tertiary};
          --glow-v: ${theme.colors.glow1};
          --glow-c: ${theme.colors.glow2};
          --violet-rgb: ${theme.colors.primaryRgb};
          --cyan-rgb: ${theme.colors.secondaryRgb};
          --text: ${theme.colors.text};
          --muted: ${theme.colors.muted};
          --muted2: ${theme.colors.muted2};
          --border: ${theme.colors.border};
        }
        
        /* Custom scrollbar matching active primary theme color */
        ::-webkit-scrollbar-thumb {
          background: ${theme.colors.primary} !important;
        }
      `}} />
      <ClientAnimations />
      <BackgroundCanvas />
      <CustomCursor />
      <Navbar initials={initials} />
      <main>
        <Hero data={portfolioData.hero} />
        <div className="section-divider" />
        <About data={portfolioData.about} />
        <div className="section-divider" />
        <Skills data={portfolioData.skills} />
        <div className="section-divider" />
        <Experience data={portfolioData.experience} />
        <div className="section-divider" />
        <Projects data={portfolioData.projects} />
        <div className="section-divider" />
        <CaseStudies data={portfolioData.caseStudies} />
        <div className="section-divider" />
        <Services data={portfolioData.services} />
        <div className="section-divider" />
        <Certifications data={portfolioData.certifications} />
        <div className="section-divider" />
        <Resume data={portfolioData.resume} />
        <div className="section-divider" />
        <Contact data={portfolioData.hero} />
      </main>
      <Footer initials={initials} name={fullName} />
    </>
  );
}

