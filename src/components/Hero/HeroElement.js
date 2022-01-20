import styled from 'styled-components'
import img from '../../pictures/mount.jpg'

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${img});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;