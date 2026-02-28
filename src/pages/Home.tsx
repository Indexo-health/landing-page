import { Helmet } from 'react-helmet-async';
import SilentCompanion from '../components/SilentCompanion';
import Hero from '../components/Hero';
import SleepOptimization from '../components/SleepOptimization';
import CardiovascularCare from '../components/CardiovascularCare';
import SleepAnalysis from '../components/SleepAnalysis';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Indexo Health — Medical-Grade Sleep & Cardiovascular Monitoring at Home</title>
        <meta name="description" content="Indexo Health delivers medical-grade contactless sleep monitoring and cardiovascular tracking from the comfort of your home. Get real-time insights on AHI, SpO2, heart rate, and more — no hospital visits required." />
        <meta name="keywords" content="sleep monitoring, sleep apnea, AHI tracking, SpO2 monitoring, cardiovascular health, contactless sleep sensor, home sleep test, medical grade wearable" />
        <link rel="canonical" href="https://indexo.health/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indexo.health/" />
        <meta property="og:title" content="Indexo Health — Medical-Grade Sleep & Cardiovascular Monitoring at Home" />
        <meta property="og:description" content="Contactless, medical-grade sleep and cardiovascular monitoring from home. Real-time AHI, SpO2, and heart rate insights. No hospital visits required." />
        <meta property="og:image" content="https://indexo.health/images/og-home.jpg" />
        <meta property="og:site_name" content="Indexo Health" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indexo Health — Medical-Grade Sleep & Cardiovascular Monitoring at Home" />
        <meta name="twitter:description" content="Contactless, medical-grade sleep and cardiovascular monitoring from home. Real-time AHI, SpO2, and heart rate insights." />
        <meta name="twitter:image" content="https://indexo.health/images/og-home.jpg" />
      </Helmet>
      <SilentCompanion />
      <Hero />
      <SleepOptimization />
      <CardiovascularCare />
      <SleepAnalysis />
    </>
  );
}
