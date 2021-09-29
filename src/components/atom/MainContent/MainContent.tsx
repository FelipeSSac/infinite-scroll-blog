import { ReactElement } from 'react';
import { Container } from './style';

interface IMainContentProps {
  children: ReactElement | string;
}

export default function MainContent({ children }:IMainContentProps) {
  return (
    <Container>{children}</Container>
  );
}
