"use client";

import React, { useEffect, useState } from "react";

export default function VideoBackground() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="fixed inset-0 z-[-2] w-full h-full overflow-hidden">
      {/* Fallback Background if video (or script) fails */}
      <div className="absolute inset-0 bg-[#050000]" />

      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          onError={() => setVideoError(true)}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay Gradient to darken video for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      
      {/* Red Tint */}
      <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
    </div>
  );
}
