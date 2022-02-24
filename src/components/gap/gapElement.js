import styled from 'styled-components'
import sunset from './../../pictures/sunset.jpg'
/*----SUNSET  STYLES-------*/ 
export const GapContainer = styled.div`
display:flexbox;  
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${sunset});
  height: 50vh;
  background-size: cover;
  background-position: center;
  justify-content: center;
   align-items: center;
`

export const GapCard = styled.div`
display:flex; 
`

export const GapP = styled.h1`
color: #e0daa6;
font-size: 3rem;
`
