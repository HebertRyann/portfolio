import {
  Container,
  ContentHeader,
  ContainerSwitchTheme,
} from './styles';
import {
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'
import {
  MdEmail,
} from 'react-icons/md'
import {
  FiMenu,
} from 'react-icons/fi'
// import { Player } from '../Player';
import dynamic from 'next/dynamic';
const ThemeToggle = dynamic(() => import('../ThemeToggle'), {
  ssr: false,
});
const Player = dynamic(() => import('../Player'), {
  ssr: false,
});

const Header: React.FC = () => {

  return (
    <Container>
      <ContentHeader>
          <ContainerSwitchTheme>
            <ThemeToggle />
            <Player audioSource="/assets/audios/Aloe Blacc - I Need A Dollar.mp3"/>
          </ContainerSwitchTheme>
        </ContentHeader>
    </Container>
  )
}

export default Header;