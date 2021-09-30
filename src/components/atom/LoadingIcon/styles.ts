import styled from 'styled-components';

export const Container = styled.div`
  width: 5.1rem;
  height: 5.1rem;
  margin: 0 auto;

  position: relative;

  .loading-icon__first-child,
  .loading-icon__second-child{
    margin: 0 auto;

    position: absolute;

    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: propagation 1s linear infinite;
  }

  .loading-icon__second-child{
    animation-delay: -0.5s;
  }

  @keyframes propagation {
    from {
      width: 0;
      height: 0;

      top: 2.5rem;
      left: 2.5rem;

      opacity: 1;
    }

    to {
      width: 5rem;
      height: 5rem;

      top: 0;
      left: 0;

      opacity: 0;
    }
  }
`;
