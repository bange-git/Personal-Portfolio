import React from 'react';
import Link from 'next/link';
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
           <LinkItem href='contact@bange-sabastine.com'>contact@bange-sabastine.com</LinkItem>
         </LinkColumn>
        
         <LinkColumn>
         <LinkTitle>Our Policies</LinkTitle>
          <Link href='/terms-and-conditions'>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
           Terms & Conditions
          </a>
        </Link>
        <Link href='/privacy-policy'>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
           Privacy Policy
          </a>
        </Link>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Always willing and ready to learn one new concept at a time</Slogan>
        <SocialIcons href='https://github.com'>
         <AiFillGithub size='3rem' />
       </SocialIcons>
       <SocialIcons href='https://linkedin.com'>
         <AiFillLinkedin size='3rem' />
       </SocialIcons>
       <SocialIcons href='contact@bange-sabastine.com'>
         <AiOutlineMail size='3rem' />
       </SocialIcons>


        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
