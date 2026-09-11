"use client";

import Image from "next/image";
import { useState } from "react";

export function HeroBackdrop() {
  const [failed, setFailed] = useState(false);

  return (
    <>
      {failed ? (
        <Image
          src="/hero/loop-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          muted
          autoPlay
          loop
          playsInline
          poster="/hero/loop-poster.jpg"
          onError={() => setFailed(true)}
          aria-hidden
        >
          <source src="/hero/loop.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/35" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-blood/40 to-transparent" />
    </>
  );
}
