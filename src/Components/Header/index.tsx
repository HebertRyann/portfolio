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
import dynamic from 'next/dynamic';
const ThemeToggle = dynamic(() => import('../ThemeToggle'), {
  ssr: false,
});
const Header: React.FC = () => {

  return (
    <Container>
      <ContentHeader>
        <FaGithub
          size={26}
          color="var(--color-secundary)"
        />
        <FaLinkedinIn 
          style={{
            marginRight: '28px',
            marginLeft: '10px'
          }}
          size={26}
          color="var(--color-secundary)"
        />
        <ThemeToggle />
      </ContentHeader>
    </Container>
  )
}

export default Header;