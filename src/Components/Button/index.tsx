import { AnchorHTMLAttributes } from 'react';
import { HTMLAttributes } from 'react';
import {
  Container
} from './styles';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  content: string
}

export const Button: React.FC<ButtonProps> = ({ content, ...rest }) => {
  return (
    <Container {...rest}>{content}</Container>
  );
};