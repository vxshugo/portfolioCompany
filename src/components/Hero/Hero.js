import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
            Welcome to  <br />
            Our portfolio.

        </SectionTitle>
        <SectionText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid atque corporis deserunt dolorum eum explicabo facilis fugiat minima neque non, officiis reiciendis similique soluta tempora tempore, unde veritatis voluptas!
        </SectionText>
        <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;