import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  inset: 0;
  z-index: 11;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--softDark);
  animation: 0.2s showOpacity both;

  &.modal-error-hide{
    animation: 0.2s hideOpacity 0.1s both;

    .modal-error__article{
      animation: 0.3s hideArticle;
    }
  }

  .modal-error__article{
    width: 85%;
    max-width: 28rem;
    height: fit-content;
    padding: 6rem 0;

    position: relative;

    background-color: #fff;
    font-size: 1.4rem;
    animation: 0.3s showArticle;
  }

  .modal-error__yellow{
    color: var(--yellow);
  }

  .modal-error__message{
    width: fit-content;
    margin: 0 auto;
  }
`;
