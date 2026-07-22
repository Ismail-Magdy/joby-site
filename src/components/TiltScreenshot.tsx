import { PhoneFrame } from './PhoneFrame'

type TiltScreenshotProps = {
  src: string
  alt: string
  caption?: string
}

export function TiltScreenshot({ src, alt, caption }: TiltScreenshotProps) {
  return (
    <PhoneFrame size="md" caption={caption} glow>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-top"
        loading="lazy"
        decoding="async"
      />
    </PhoneFrame>
  )
}
