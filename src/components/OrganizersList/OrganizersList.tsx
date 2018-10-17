import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import styled, { keyframes } from 'react-emotion'
import Loader from '../Loader/Loader'
import SubHeadline from '../SubHeadline/SubHeadline'

interface IOrganizer {
  name: string
  description: string
  twitter: {
    name: string
    profileImageUrl: string
  }
}

const animation1 = keyframes`
  0% {clip: rect(9px, 640px, 286px, 0);}
  4% {clip: rect(247px, 640px, 126px, 0);}
  8% {clip: rect(192px, 640px, 273px, 0);}
  12% {clip: rect(309px, 640px, 231px, 0);}
  16% {clip: rect(166px, 640px, 25px, 0);}
  20% {clip: rect(314px, 640px, 179px, 0);}
  24% {clip: rect(214px, 640px, 263px, 0);}
  28% {clip: rect(2px, 640px, 261px, 0);}
  32% {clip: rect(198px, 640px, 1px, 0);}
  36% {clip: rect(203px, 640px, 95px, 0);}
  40% {clip: rect(241px, 640px, 67px, 0);}
  44% {clip: rect(82px, 640px, 2px, 0);}
  48% {clip: rect(266px, 640px, 210px, 0);}
  52% {clip: rect(214px, 640px, 276px, 0);}
  56% {clip: rect(304px, 640px, 36px, 0);}
  60% {clip: rect(227px, 640px, 4px, 0);}
  64% {clip: rect(305px, 640px, 302px, 0);}
  68% {clip: rect(218px, 640px, 157px, 0);}
  72% {clip: rect(154px, 640px, 17px, 0);}
  76% {clip: rect(231px, 640px, 310px, 0);}
  80% {clip: rect(99px, 640px, 252px, 0);}
  84% {clip: rect(295px, 640px, 5px, 0);}
  88% {clip: rect(31px, 640px, 272px, 0);}
  92% {clip: rect(300px, 640px, 74px, 0);}
  96% {clip: rect(128px, 640px, 136px, 0);}
  100% {clip: rect(311px, 640px, 214px, 0);}`

const animation2 = keyframes`
  0% {clip: rect(134px, 640px, 153px, 0);}
  4% {clip: rect(18px, 640px, 32px, 0);}
  8% {clip: rect(305px, 640px, 206px, 0);}
  12% {clip: rect(133px, 640px, 249px, 0);}
  16% {clip: rect(174px, 640px, 212px, 0);}
  20% {clip: rect(202px, 640px, 85px, 0);}
  24% {clip: rect(38px, 640px, 223px, 0);}
  28% {clip: rect(46px, 640px, 293px, 0);}
  32% {clip: rect(6px, 640px, 51px, 0);}
  36% {clip: rect(179px, 640px, 77px, 0);}
  40% {clip: rect(93px, 640px, 227px, 0);}
  44% {clip: rect(257px, 640px, 150px, 0);}
  48% {clip: rect(299px, 640px, 120px, 0);}
  52% {clip: rect(31px, 640px, 130px, 0);}
  56% {clip: rect(205px, 640px, 184px, 0);}
  60% {clip: rect(154px, 640px, 254px, 0);}
  64% {clip: rect(275px, 640px, 48px, 0);}
  68% {clip: rect(269px, 640px, 168px, 0);}
  72% {clip: rect(103px, 640px, 62px, 0);}
  76% {clip: rect(272px, 640px, 224px, 0);}
  80% {clip: rect(314px, 640px, 302px, 0);}
  84% {clip: rect(212px, 640px, 166px, 0);}
  88% {clip: rect(151px, 640px, 59px, 0);}
  92% {clip: rect(244px, 640px, 256px, 0);}
  96% {clip: rect(60px, 640px, 107px, 0);}
  100% {clip: rect(32px, 640px, 148px, 0);}`

const Name = styled.h3`
  font-size: 2.6rem;
  font-weight: 400;
  color: #fff;
  margin: 0;
  margin-bottom: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const List = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  padding: 0 1rem;
  width: 33.333333%;
  display: inline-block;
  vertical-align: top;
`

const ListItemContent = styled.div`
  background: #f3f9fb;
  margin-bottom: 4rem;
`

const Image = styled.div<{ src: string }>`
  width: 100%;
  min-height: 30rem;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  filter: url(#duotone_0);
`

const ImageContainer = styled.div`
  width: 100%;
  height: 30rem;
  overflow: hidden;
  position: relative;
  z-index: 1;

  &:hover ${Image}:nth-child(2) {
    left: 2px;
    animation: ${animation1} 2s infinite linear alternate-reverse;
  }
  &:hover ${Image}:nth-child(3) {
    left: -2px;
    animation: ${animation2} 3s infinite linear alternate-reverse;
  }
`

const Description = styled.p`
  margin: 0;
  font-size: 1.4rem;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -4rem;
  z-index: 2;
  position: relative;
  padding: 0 1rem 1.4rem 1rem;
`

const OrganizerListContainer = styled.section`
  display: flex;
  flex-direction: column;
`

const TwitterLink: React.SFC<{ handle: string }> = ({ handle }) => (
  <a
    href={`http://twitter.com/${handle}`}
    css={`
      color: #0662f1;
      font-weight: 500;
      text-decoration: none;
      margin-bottom: 0.25rem;
    `}
  >
    @{handle}
  </a>
)

class OrganizerList extends Component {
  public render() {
    return (
      <OrganizerListContainer>
        <SubHeadline>Organizers</SubHeadline>
        <svg style={{ height: 0 }}>
          <filter id="duotone_0">
            <feColorMatrix
              type="matrix"
              values="0.3671875 0 0 0 0.015625 0.77734375 0 0 0 0.1640625 0.58984375 0 0 0 0.23046875 0 0 0 1 0"
            />
          </filter>
        </svg>
        <Query<{ organizers: IOrganizer[] }>
          pollInterval={3600000}
          query={gql`
            query {
              organizers {
                name
                description
                twitter {
                  name
                  profileImageUrl
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading || !data) {
              return <Loader text="Fetching organizers..." />
            }
            if (error) {
              return `error: ${error.message}`
            }
            return (
              <List>
                {data.organizers.map(
                  (
                    {
                      name,
                      description,
                      twitter: { name: handle, profileImageUrl },
                    },
                    i
                  ) => (
                    <ListItem key={i}>
                      <ListItemContent>
                        <ImageContainer
                          role="img"
                          aria-label={`twitter profile image of @${handle}`}
                        >
                          <Image src={profileImageUrl} />
                          <Image src={profileImageUrl} />
                          <Image src={profileImageUrl} />
                        </ImageContainer>
                        <TextContainer>
                          <Name>{name}</Name>
                          <TwitterLink handle={handle} />
                          <Description>{description}</Description>
                        </TextContainer>
                      </ListItemContent>
                    </ListItem>
                  )
                )}
              </List>
            )
          }}
        </Query>
      </OrganizerListContainer>
    )
  }
}

export default OrganizerList
