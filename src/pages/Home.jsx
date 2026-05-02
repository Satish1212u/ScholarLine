import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </>
  );
}
