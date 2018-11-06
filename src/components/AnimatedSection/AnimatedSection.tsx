import React, { Component } from 'react'
import { PoseGroup } from 'react-pose'
import Loader from '../Loader/Loader'
import SubHeadline from '../SubHeadline/SubHeadline'
import { Child, Parent } from './AnimatedSection.style'

export interface IAnimatedSectionProps {
  backgroundColor?: string
  delayLoading: number
  duration: number
  headline?: string
  isLoading: boolean
}

export interface IAnimatedSectionState {
  pose: 'start' | 'loading' | 'done'
}

export default class AnimatedSection extends Component<
  IAnimatedSectionProps,
  IAnimatedSectionState
> {
  public static defaultProps = {
    duration: 300,
  }

  public state: IAnimatedSectionState = {
    pose: 'start',
  }

  private timer: NodeJS.Timeout | undefined

  public componentDidMount() {
    setTimeout(() => this.setState({ pose: 'loading' }), 0)
    this.timer = setTimeout(
      () => this.setState({ pose: 'done' }),
      this.props.delayLoading
    )
  }

  public componentWillUnmount() {
    clearTimeout(this.timer!)
  }

  public render() {
    const { pose } = this.state
    const { children, duration, headline, isLoading } = this.props

    return (
      <Parent pose={pose} duration={duration}>
        <PoseGroup animateOnMount={true} preEnterPose="start">
          {[
            ...(isLoading || pose === 'loading'
              ? [
                  <Child i={0} key="loader" duration={duration}>
                    <Loader defer={0} />
                  </Child>,
                ]
              : []),
            ...(!isLoading && pose === 'done'
              ? [
                  ...(headline
                    ? [
                        <Child i={0} key="headline" duration={duration}>
                          <SubHeadline>{headline}</SubHeadline>
                        </Child>,
                      ]
                    : []),
                  <Child i={1} key="content" duration={duration}>
                    {children}
                  </Child>,
                ]
              : []),
          ]}
        </PoseGroup>
      </Parent>
    )
  }
}
