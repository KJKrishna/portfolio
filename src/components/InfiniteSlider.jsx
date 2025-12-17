import React, { useState } from 'react';
import '../styles/InfiniteSlider.css';

export default function InfiniteSlider({ children, gap = 16, speed = 40, speedOnHover = 20 }) {
  const [hovered, setHovered] = useState(false);

  const duration = hovered ? speedOnHover : speed;

  return (
    <div className="infinite-slider-root">
      <div
        className="infinite-slider-track"
        style={{
          columnGap: `${gap}px`,
          animationDuration: `${duration}s`
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
