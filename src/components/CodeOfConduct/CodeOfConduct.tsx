import React, { Component } from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import SubHeadline from '../SubHeadline/SubHeadline'
import { Text } from './CodeOfConduct.style'

export default class CodeOfConduct extends Component {
  public render() {
    return (
      <ContentContainer>
        <SubHeadline>Code of Conduct</SubHeadline>
        <Text>
          Our goal is to have an awesome, inclusive and safe community meetup
          where people meet, hang out together, chat, listen to talks, exchange
          ideas and make new friends. Any harmful or discriminating behaviour
          will not be tolerated. We reserve the right to exclude people from the
          events.
          <br />
          <br />
          For details on what kinds of behaviour are not tolerated and
          consequences for violating these rules, we refer to the{' '}
          <a href="http://berlincodeofconduct.org/">Berlin Code of Conduct</a>.
        </Text>
      </ContentContainer>
    )
  }
}
