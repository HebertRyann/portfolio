import { FaPhone, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { useInView } from 'react-intersection-observer';
import {
  Container,
  ContentContact,
} from './styles';

const Footer: React.FC = () => {
  const { ref, inView } = useInView();
  return (
    <Container
      ref={ref}
      animate={inView ? 'visible' : 'hidden'}
      initial='hidden'
      variants={{
        'visible': {
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 1,
            delay: 0.3,
            bounce: 0.3,
          }
        },
        'hidden': {
          scale: 0,
        },
      }}
    >
      <h1>Contato</h1>
      <ContentContact>
        <div >
          <FaPhone size={24}/>
          <span>(71) 9 9979-8142</span>
        </div>
        <div >
          <GrMail size={24}/>
          <span>hebertryann40@gmail.com</span>
        </div>
        <a href="https://www.linkedin.com/in/hebertryansantos/" target="_blank">
          <FaLinkedinIn size={24}/>
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/HebertRyann?tab=repositories" target="_blank">
          <FaGithub size={24}/>
          <span>Github</span>
        </a>
      </ContentContact>
    </Container>
  )
}

export { Footer };