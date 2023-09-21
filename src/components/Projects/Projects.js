import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionTitle main>Job Related Projects</SectionTitle>
    <GridContainer>
     
        <BlogCard >
          <Img src='/images/5.png' />
          <TitleContent>
            <HeaderThree >Stoicbible Mobile App</HeaderThree>
            <hr />
          </TitleContent>
          <CardInfo>Worked as the lead frontend engineer for this app. An app where you can explore a diverse range of books while enhancing your reading experience. Immerse yourself in captivating stories and knowledge, seamlessly integrating the ability to highlight, jot down quotes, and create dedicated journals, quotes for each book as you read. Capture your thoughts and reflections, creating a unique tapestry of your reading adventures. Helps you stay organized and revisit your favorite moments effortlessly, all while ensuring your privacy and data security.</CardInfo>
         <div>
           <TitleContent>Stack</TitleContent>
           <TagList>
              {['Node (Express)', 'React Native', 'Typescript',  'React Testing Library'].map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
           </TagList>
         </div>
         <UtilityList>
            <ExternalLinks href='https://apps.apple.com/us/app/stoic-bible/id1542454799#?platform=iphone'>AppStore</ExternalLinks>
            <ExternalLinks href='https://play.google.com/store/apps/details?id=com.ionicframework.stoicbible'>PlayStore</ExternalLinks>
         </UtilityList>
        </BlogCard>

        <BlogCard >
          <Img src='/images/6.png' />
          <TitleContent>
            <HeaderThree >Motivation Quotes Mobile App</HeaderThree>
            <hr />
          </TitleContent>
          <CardInfo>A Lead developer for this powerful motivation quotes, affirmation app with better user experiences. Users can add their own quotes, journals, favorites. It also gives user the posibility to listen to audio quotes.</CardInfo>
         <div>
           <TitleContent>Stack</TitleContent>
           <TagList>
              {['Express', 'React Native', 'Typescript', 'React Testing Library'].map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
           </TagList>
         </div>
         <UtilityList>
            <ExternalLinks href='#'>AppStore</ExternalLinks>
            <ExternalLinks href='#'>PlayStore</ExternalLinks>
         </UtilityList>
        </BlogCard>

        <BlogCard >
          <Img src='/images/7.png' />
          <TitleContent>
            <HeaderThree >Stoicbible Website</HeaderThree>
            <hr />
          </TitleContent>
          <CardInfo>The Web version of the Stoicbible Mobile App where you can explore a diverse range of books while enhancing your reading experience. Immerse yourself in captivating stories and knowledge, seamlessly integrating the ability to highlight, jot down quotes, and create dedicated journals, quotes for each book as you read. Capture your thoughts and reflections, creating a unique tapestry of your reading adventures. Helps you stay organized and revisit your favorite moments effortlessly, all while ensuring your privacy and data security.</CardInfo>
         <div>
           <TitleContent>Stack</TitleContent>
           <TagList>
              {['Express', 'NextJs', 'Typescript',  'Testing Library'].map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
           </TagList>
         </div>
         <UtilityList>
            <ExternalLinks href='https://stoicbible.com/'>stoicbible.com</ExternalLinks>

         </UtilityList>
        </BlogCard>
      
    </GridContainer>
    <SectionTitle main>Personal Learning Projects</SectionTitle>
    <GridContainer>
      { projects.map(({id, image, title, description, tags, source, visit}) =>(
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree >{title}</HeaderThree>
            <hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
         <div>
           <TitleContent>Stack</TitleContent>
           <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
           </TagList>
         </div>
         <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
         </UtilityList>
        </BlogCard>
      ))
      }
    </GridContainer>
  </Section>
);

export default Projects;