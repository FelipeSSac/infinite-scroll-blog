import { Container } from './styles';

interface ILoadingIconProps {
  yellow?: boolean;
}

export default function LoadingIcon({ yellow = false }: ILoadingIconProps) {
  return (
    <Container className={`${yellow ? 'loading-icon-yellow' : ''}`}>
      <div className="loading-icon__first-child" />
      <div className="loading-icon__second-child" />
    </Container>
  );
}

LoadingIcon.defaultProps = {
  yellow: false,
};
