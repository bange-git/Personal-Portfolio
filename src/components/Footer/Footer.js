import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
         <LinkColumn>
           <LinkTitle>Call</LinkTitle>
           <LinkItem href='tel:+237-699940702'>+237-699940702</LinkItem>
         </LinkColumn>

         <LinkColumn>
           <LinkTitle>Email</LinkTitle>
           <LinkItem href='mailto:sebastienbange@gmail.com'>sebastienbange@gmail.com</LinkItem>
         </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Always willing and ready to learn one new concert at a time</Slogan>
        <SocialIcons href='https://github.com'>
         <AiFillGithub size='3rem' />
       </SocialIcons>
       <SocialIcons href='https://linkedin.com'>
         <AiFillLinkedin size='3rem' />
       </SocialIcons>
       <SocialIcons href='mailto:sebastienbange@gmail.com'>
         <AiOutlineMail size='3rem' />
       </SocialIcons>


        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
