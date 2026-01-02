import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';
import { Curriculum } from '@/components/landing/curriculum';
import { Testimonials } from '@/components/landing/testimonials';
import { JoinForm } from '@/components/landing/join-form';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Curriculum />
      <Testimonials />
      <JoinForm />
    </>
  );
}
