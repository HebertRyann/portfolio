import { useEffect, useRef, useState } from 'react';
import { FiPlayCircle, FiPauseCircle } from 'react-icons/fi';
import {
  Container,
  ContainerForm,
  WrapperContentForm,
} from './styles';

const FormAnimated: React.FC = () => {
  const [error, setError] = useState(false);

  const handleGetError = () => {
    setTimeout(() => {
      setError(false);
    }, 1500);
    setError(true);
  };

  return (
    <Container>
     <ContainerForm >
       <h1>Faça seu Login</h1>
       <WrapperContentForm isError={error}>
         <input placeholder="E-mail"/>
         <input placeholder="Senha"/>
       </WrapperContentForm>
       <button onClick={handleGetError}>Entre</button>
     </ContainerForm>
    </Container>
  )
};
export default FormAnimated;