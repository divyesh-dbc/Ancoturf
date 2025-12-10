import Hero from './components/home/Hero';
import OurLawn from './components/home/OurLawn';
import HowToFind from './components/home/HowToFind';
import GetThePerfectLawn from './components/home/GetThePerfectLawn';
import ReadyForLife from './components/home/ReadyForLife';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <OurLawn />
      <HowToFind />
      <GetThePerfectLawn />
      <ReadyForLife />
    </div>
  );
}