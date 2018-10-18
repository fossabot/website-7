import React, { Component } from 'react'
import { FilterSVG, Image, ImageContainer } from './GlitchImage.style'

export interface IGlitchImageProps {
  alt: string
  className?: string
  src: string
}

class GlitchImage extends Component<IGlitchImageProps> {
  public render() {
    return (
      <ImageContainer
        role="img"
        aria-label={this.props.alt}
        className={this.props.className}
      >
        <Image src={this.props.src} />
        <Image src={this.props.src} />
        <Image src={this.props.src} />
        <FilterSVG>
          <filter id="duotone">
            <feColorMatrix
              type="matrix"
              values="0.3671875 0 0 0 0.015625 0.77734375 0 0 0 0.1640625 0.58984375 0 0 0 0.23046875 0 0 0 1 0"
            />
          </filter>
        </FilterSVG>
      </ImageContainer>
    )
  }
}

export default GlitchImage
