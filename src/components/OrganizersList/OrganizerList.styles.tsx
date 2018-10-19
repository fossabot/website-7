import styled from 'react-emotion'
import posed from 'react-pose'

export const List = styled.ol`
  list-style-type: none;
  margin: 0 0 5rem 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

interface IListItemProps {
  i: number
}

export const ListItem = styled(
  posed.li({
    enter: {
      delay: (props: IListItemProps) => props.i * 25,
      opacity: 1,
      scale: 1,
      transition: {
        // material standard easing
        opacity: { ease: [0.4, 0.0, 0.2, 1], duration: 150 },
        // material decelerate easing
        scale: { ease: [0.0, 0.0, 0.2, 1], duration: 150 },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  })
)<IListItemProps>`
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
