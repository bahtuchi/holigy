import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import ServicesPrivate from '@/components/sections/ServicesPrivate';
import ServicesBusiness from '@/components/sections/ServicesBusiness';
import About from '@/components/sections/About';
import WhyHoligy from '@/components/sections/WhyHoligy';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ServicesPrivate />
        <ServicesBusiness />
        <About />
        <WhyHoligy />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
