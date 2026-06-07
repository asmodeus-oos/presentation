import { useState } from 'react';
import type { PosterImage } from './posterData';

interface Props {
  image: PosterImage;
  className?: string;
}

export default function ImageBubble({ image, className = '' }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure
      className={`group relative overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_20px_50px_-20px_rgba(15,40,80,0.45)] ring-2 ring-slate-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-25px_rgba(15,40,80,0.65)] ${className}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image.url}
          alt={image.caption}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-700 ease-out will-change-transform group-hover:scale-[1.06] ${
            loaded ? 'blur-0 opacity-100' : 'blur-md opacity-0'
          }`}
        />
        {/* glass overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-white/20 opacity-95 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 bg-cyan-500/0 transition-colors duration-300 group-hover:bg-cyan-500/8" />
      </div>
      <figcaption className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-5 py-4 text-left">
        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500 shadow-[0_0_12px_3px_rgba(6,182,212,0.7)]" />
        <span className="text-[13px] font-semibold tracking-wide text-white drop-shadow-md">
          {image.caption}
        </span>
      </figcaption>
    </figure>
  );
}