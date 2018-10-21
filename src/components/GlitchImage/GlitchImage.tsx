import React from 'react'
import { Image, ImageContainer } from './GlitchImage.style'

export interface IGlitchImageProps {
  alt: string
  className?: string
  src: string
}

/**
 * Is there a blendmode fallback?
 *
 * https://collectiveidea.com/blog/archives/2016/06/02/fun-with-svg-css-background-blend-mode-fallback
 */
const GlitchImage: React.SFC<IGlitchImageProps> = ({ alt, className, src }) => (
  <ImageContainer role="img" aria-label={alt} className={className}>
    <Image src={src} />
    <Image src={src} />
    <Image src={src} />
    <Image src={src} />
    <Image src={src} />
    <Image src={src} />
  </ImageContainer>
)

export default GlitchImage
