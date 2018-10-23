import styled from 'react-emotion'
import posed from 'react-pose'

export const List = styled.div`
  margin: 0 -1.5rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 550px) {
    margin: 0;
  }
`

export const ListItem = styled(
  posed.div({
    enter: {
      delay: (props: any) => props.itemIndex * 50,
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { ease: [0.4, 0.0, 0.2, 1], duration: 150 },
        scale: { ease: [0.0, 0.0, 0.2, 1], duration: 150 },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  })
)`
  vertical-align: top;
  margin-bottom: 1.2rem;
  width: 100%;

  @media (min-width: 550px) and (max-width: 799px) {
    width: 49%;
    margin-left: 1%;
    margin-right: 1%;

    &:nth-of-type(2n + 1) {
      margin-left: 0;
      margin-right: 1%;
    }
    &:nth-of-type(2n) {
      margin-left: 1%;
      margin-right: 0;
    }
  }

  @media (min-width: 800px) {
    width: 32%;
    margin-left: 1%;
    margin-right: 1%;

    &:nth-of-type(3n + 1) {
      margin-left: 0;
      margin-right: 1%;
    }
    &:nth-of-type(3n) {
      margin-left: 1%;
      margin-right: 0;
    }
  }
`
