import { useReducedMotion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

type TiltScreenshotProps = {
  src: string
  alt: string
}

export function TiltScreenshot({ src, alt }: TiltScreenshotProps) {
  const reduceMotion = useReducedMotion()

  const img = (
    <img
      src={src}
      alt={alt}
      className="h-[min(52vw,320px)] w-auto max-w-[min(46vw,280px)] rounded-2xl object-cover object-top shadow-[0_20px_40px_-12px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/80 sm:h-[300px] sm:max-w-[240px]"
      loading="lazy"
      decoding="async"
    />
  )

  if (reduceMotion) {
    return img
  }

  return (
    <Tilt
      tiltMaxAngleX={11}
      tiltMaxAngleY={11}
      scale={1.02}
      transitionSpeed={450}
      glareEnable
      glareMaxOpacity={0.16}
      glareColor="#ffffff"
      className="rounded-2xl will-change-transform"
    >
      {img}
    </Tilt>
  )
}
