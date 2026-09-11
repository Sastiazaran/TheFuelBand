"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site";

export function HeroBackdrop() {
  const [failed, setFailed] = useState(false);

  return (
    <>
      {failed ? (
        <Image
          src={site.hero.poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={site.hero.poster}
          onError={() => setFailed(true)}
          aria-hidden
        >
          <source src={site.hero.video} type="video/mp4" />
        </video>
      )}
    </>
  );
}
