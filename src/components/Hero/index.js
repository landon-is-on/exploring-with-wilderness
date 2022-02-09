import React from 'react'
import{HeroContainer, HeroP,HeroButton} from './HeroElement';
import {HeroCard} from './HeroElement';


const Hero = () => {
return ( 

    <HeroContainer>
    <HeroCard> 
        
        <HeroP>Ready to <HeroButton>explore</HeroButton> Like never before.</HeroP>
                
    </HeroCard>
    </HeroContainer>

)
}

export default Hero;