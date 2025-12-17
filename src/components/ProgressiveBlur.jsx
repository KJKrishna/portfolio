
import React from 'react';
import '../styles/ProgressiveBlur.css';

export default function ProgressiveBlur({ direction = 'right', blurIntensity = 1, className = '' }) {
  const angles = { top: 0, right: 90, bottom: 180, left: 270 };
  const layers = 8;
  const angle = angles[direction] ?? 90;

  return (
    <div className={['progressive-blur-root', className].join(' ')}>
      {Array.from({ length: layers }).map((_, index) => {
        const segmentSize = 1 / (layers + 1);
        const gradientStops = [0, 1, 2, 3].map((offsetIndex) => {
          const pos = (index + offsetIndex) * segmentSize;
          const alpha = offsetIndex === 1 || offsetIndex === 2 ? 1 : 0;
          return `rgba(255, 255, 255, ${alpha}) ${pos * 100}%`;
        });

        const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(', ')})`;

        return (
          <div
            key={index}
            className="progressive-blur-layer"
            style={{
              WebkitMaskImage: gradient,
              maskImage: gradient,
              backdropFilter: `blur(${index * blurIntensity}px)`
            }}
          />
        );
      })}
    </div>
  );
}
