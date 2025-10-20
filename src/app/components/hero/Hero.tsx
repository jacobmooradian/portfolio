import HeroOverlay from './HeroOverlay';
import HeroAnim from './HeroAnim';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-24">
        <HeroAnim />     {/* <- inline SVG + GSAP */}
        <HeroOverlay />
      </div>
    </section>
  );
}