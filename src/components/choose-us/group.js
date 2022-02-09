import React from 'react' 
import {Container,Tital} from './groupElement'

import '../choose-us/flex.css';
import CARD_1 from './each card/card-One'
import CARD_2 from './each card/card-Two'
import CARD_3 from './each card/card-three'

const FContainer = () => {
return ( 
<>  
<Tital>Book Now</Tital>
<Container> 
<CARD_1/>
<CARD_2/>
<CARD_3/>
</Container>

</>
)


}

export default FContainer;