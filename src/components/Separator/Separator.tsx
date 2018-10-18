import React, { Component } from 'react'

interface ISeparatorProps {
  heightVw: number
  topColor: string
  bottomColor: string
  reverse?: boolean
}

/**
 * borders might not the the most performant
 *
 * https://css-tricks.com/creating-non-rectangular-headers/
 * https://codepen.io/ahmadnassri/post/non-rectangular-headers-part-1
 */
export default class Separator extends Component<ISeparatorProps> {
  public render() {
    const { reverse, bottomColor, topColor, heightVw } = this.props

    return (
      <div
        css={`
          height: ${heightVw}vw;
          border-style: solid;
          border-width: ${heightVw}vw 100vw 0 0;
          border-color: ${topColor} ${bottomColor} transparent transparent;
          transform: rotateY(${reverse ? 180 : 0}deg);
        `}
      />
    )
  }
}
