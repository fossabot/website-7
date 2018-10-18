import React, { Component } from 'react'
import { FilterSVG, Image, ImageContainer, Text } from './GlitchImage.style'

export interface IGlitchImageProps {
  alt: string
  className?: string
  text?: string
  src: string
}

/**
 * Is there a blendmode fallback?
 *
 * https://collectiveidea.com/blog/archives/2016/06/02/fun-with-svg-css-background-blend-mode-fallback
 */
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
        <Image src={this.props.src} />
        <Image src={this.props.src} />
        <Image src={this.props.src} />
        {this.props.text && <Text>{this.props.text}</Text>}
        <FilterSVG>
          <filter id="duotone">
            <feColorMatrix
              type="matrix"
              values="0.7 0 0 0 0.02 0.8 0 0 0 0.2 0.6 0 0 0 0.3 0 0 0 1 0"
            />
          </filter>
        </FilterSVG>
      </ImageContainer>
    )
  }
}

export default GlitchImage
