import styled from 'styled-components'
import img from '../../pictures/standmount.jpg'

export const HeroContainer = styled.div`
  display:flexbox;  
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border: 3px solid red;
  `;
export const HeroCard = styled.div`
display: flex;
 flex-direction: column;
 justify-content: center;
  align-items: center;
  border: red solid 3px
  `
export const HeroP = styled.h1`
color: #ddd;
font-size: 5rem;
margin: 0 auto;
border: red solid 3px;
`
export const HeroButton = styled.button`
margin-top: 5rem;
border: none;
text-transform: capitalize;
font-size: 2.5rem;
padding: 1rem 4.5rem;
border-radius: 12px ;
background-color: #0077b6;
color: white;
font-weight: 600;
cursor: grab;
transition: all 0.2s ease-in-out;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
