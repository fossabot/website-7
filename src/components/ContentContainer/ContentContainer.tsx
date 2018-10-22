import React from 'react'
import { Inner, Outer } from './ContentContainer.style'

export type SlantValue =
  | -8
  | -7
  | -6
  | -5
  | -4
  | -3
  | -2
  | -1
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8

export interface IContentContainerProps {
  background?: string
  slantBottom?: SlantValue
  slantTop?: SlantValue
}

const ContentContainer: React.SFC<IContentContainerProps> = ({
  background,
  children,
  slantBottom,
  slantTop,
}) => (
  <Outer background={background} slantBottom={slantBottom} slantTop={slantTop}>
    <Inner>{children}</Inner>
  </Outer>
)

export default ContentContainer
