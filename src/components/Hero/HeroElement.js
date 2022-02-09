import styled from 'styled-components'
import img from '../../pictures/mount.jpg'

export const HeroContainer = styled.div`
  display:flexbox;  
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: center;
  `;

export const HeroCard = styled.div`
display:flex; 

`

export const HeroP = styled.h1`
color: #e0daa6;

`
export const HeroButton = styled.button`
 
font-size: 1rem;
padding: 12px 12px;
border-radius: 12px ;
background-color: #0077b6;
color:white;
font-weight: bold;
cursor: grab;
transition: all 0.2s ease-in-out;
&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
