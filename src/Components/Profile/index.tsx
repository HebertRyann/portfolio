import {
  Container,
  ContainerButtons,
  ContainerNextPage,
  ContainerText,
  WrapperContentProfile,
  ContentProfile,
} from './styles';
// import Image from 'next/image';
import {  FaChevronDown } from 'react-icons/fa';
import myLoader from '../../utils/loader';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';

interface ProfileProps {
  handleScroll(): void;
}

const Profile: React.FC<ProfileProps> = ({ handleScroll }) => {
  const wordsSlide = ['experiencia', 'performance', 'usabilidade']
  const [currentWord, setCurrentWord] = useState(0);




  // const incrementWord = () => {
  //   console.log(currentWord)
  //   if (currentWord === (wordsSlide.length - 1)) {
  //     console.log('reset')
  //     setCurrentWord(0);
  //     return;
  //   } 
  //   console.log('icrement')
  //   setCurrentWord(currentWord + 1);
  // }

  // const starTimer = () => {
  //   setInterval(() => {
  //     incrementWord()
  //   }, 5000)
  // };

  // useEffect(() => {
  //   starTimer()
  // }, []);



  return (
    <Container >
      <WrapperContentProfile>
        <ContentProfile>
          <ContainerText>
            <h1>Hebert Ryan</h1>
            <span>Desenvolvedor Fullstack</span>
            <p>
              Com foco em trazer a melhor {wordsSlide.map((word, index) => (
                index === 0 && (
                  word
                )
              ))} ao usuario
            </p>
          </ContainerText>
          <ContainerButtons>
            <button>Curriculo</button>
            <button>Projetos</button>
          </ContainerButtons>
        </ContentProfile>

        <img 
          src="/portfolio/assets/Code typing-rafiki.svg"  
          width={900}
          height={900}
        />
        
      </WrapperContentProfile>
      <ContainerNextPage onClick={handleScroll}>
        <FaChevronDown size={56} color={`var(--color-secundary)`}/>
      </ContainerNextPage>
    </Container>
  );
};

export { Profile };