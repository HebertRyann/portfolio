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
        <a href="https://github.com/HebertRyann?tab=repositories" target="_blank">
          <FaGithub
            size={26}
            color="var(--color-secundary)"
          />
        </a>
        <a href="https://www.linkedin.com/in/hebertryansantos/" target="_blank">
          <FaLinkedinIn 
            style={{
              marginRight: '28px',
              marginLeft: '10px'
            }}
            size={26}
            color="var(--color-secundary)"
          />
        </a>
        <ThemeToggle />
      </ContentHeader>
    </Container>
  )
}

export default Header;