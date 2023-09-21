import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
     <LeftSection>
       <SectionTitle main center>
         Hi, My name is Sabastine <br/>
       </SectionTitle>
       <SectionText>
      A software developer with a passion for learning and creating. I build awesome fullstack web and mobile apps.
       </SectionText>
       <Button onClick={() => window.location = '#projects'}>Learn More</Button>
     </LeftSection>
    
  </Section>
);

export default Hero;