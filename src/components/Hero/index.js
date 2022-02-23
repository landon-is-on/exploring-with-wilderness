import React from 'react'
import{HeroContainer, HeroP,HeroButton} from './HeroElement';
import {HeroCard} from './HeroElement';


const Hero = () => {
return ( 

    <HeroContainer>
    <HeroCard> 
        
        <HeroP>Ready to <HeroButton onClick={()=> window.open("https://www.viator.com/?eap=adirnxenXX-subbrand-72464&aid=vba72464en", "_blank")}>explore</HeroButton> Like never before.</HeroP>
                
    </HeroCard>
    </HeroContainer>

)
}

export default Hero;