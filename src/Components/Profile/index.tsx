import {
  Container,
  ContainerButtons,
  ContainerNextPage,
  ContainerText,
  WrapperContentProfile,
  ContentProfile,
} from './styles';
import {  FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <Container>
      <WrapperContentProfile>
        <ContentProfile>
          <ContainerText>
            <h1>Hebert Ryan</h1>
            <span>Desenvolvedor Fullstack</span>
            <p>
              Com foco em trazer a melhor experiencia ao usuario
            </p>
          </ContainerText>
          <ContainerButtons>
            <button>Curriculo</button>
            <button>Projetos</button>
          </ContainerButtons>
        </ContentProfile>

          <Image 
            src="/assets/Code typing-rafiki.svg"
            width={900} 
            height={900}
            layout="intrinsic"
          />
        
      </WrapperContentProfile>
      <ContainerNextPage>
        <FaChevronDown size={56} color={`var(--color-secundary)`}/>
      </ContainerNextPage>
    </Container>
  );
};

export { Profile };