'use client';

type Props = {
  src: string;
  alt?: string;
  // change aspect if your art prefers a different canvas
  aspect?: string; // e.g. "aspect-[16/9]" | "aspect-[21/9]" | "aspect-[4/3]"
  rounded?: boolean;
};

export default function HeroScene({
  src,
  alt = 'San Francisco — Golden Gate Bridge',
  aspect = 'aspect-[16/9]',
  rounded = true,
}: Props) {
  return (
    <div className={`relative w-full ${aspect} bg-white ${rounded ? 'rounded-xl' : ''} overflow-hidden border-b border-black/5`}>
      {/* SVG as <img> keeps vectors crisp and simple */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-contain select-none"
        draggable={false}
      />
    </div>
  );
}