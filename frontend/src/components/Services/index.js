import React from 'react';
import Icon1 from '../../images/CBD4.png';
import Icon2 from '../../images/CBD7.png';
import Icon3 from '../../images/CBD8.png';

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Produits</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Boisson CBD Banane</ServicesH2>
                    <ServicesP>il a un attrait particulier en agriculture bio, car elle est couvrante donc nettoyante.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Boisson CBD Pomme</ServicesH2>
                    <ServicesP>il a un attrait particulier en agriculture bio, car elle est couvrante donc nettoyante.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Boisson CBD Orange</ServicesH2>
                    <ServicesP>il a un attrait particulier en agriculture bio, car elle est couvrante donc nettoyante.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>  
        </ServicesContainer>
    )
}

export default Services
