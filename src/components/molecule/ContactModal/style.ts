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

  &.modal-contact-hide{
    animation: 0.2s hideOpacity 0.1s both;

    .modal-contact__article{
      animation: 0.3s hideArticle;
    }
  }

  .modal-contact__article{
    width: 95%;
    max-width: 40rem;
    height: 95%;
    max-height: 50rem;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    animation: 0.3s showArticle;
  }

  .modal-contact__article-close-button{
    width: 1.4rem;
    height: 1.4rem;

    position: absolute;
    top: 2rem;
    right: 2rem;

    background-color: transparent;
    border: 0;
    outline: none;
  }

  .modal-contact__article-close-icon{
    width: 100%;
    height: 100%;

    fill: var(--dark);
  }

  .modal-contact__article-form{
    width: 70%;
    height: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .modal-contact__article-title{
    color: var(--yellow);
    font-size: 2rem;
    font-weight: 700;
  }

  .modal-contact__article-label{
    width: 100%;

    font-size: 1.4rem;
  }

  .modal-contact__article-input{
    width: 100%;
    height: 3rem;
    margin-top: 0.45rem;
    padding: 0 0.75rem;

    font-size: 1.4rem;

    &:placeholder{
      color: var(--dark);
    }
  }

  .modal-contact__article-textarea{
    width: 100%;
    height: 8rem;
    margin-top: 0.45rem;
    padding: 0.5rem 0.75rem;

    font-size: 1.4rem;
    resize: none;

    &:placeholder{
      color: var(--dark);
    }

    &::-webkit-scrollbar {
      width: 14px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--yellow);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--dark);
      border-radius: 10px;
    }
  }

  .modal-contact__article-submit-button{
    width: 11rem;
    height: 3.1rem;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    background-color: var(--dark);
    border-radius: 4px;
    border: 0;
    outline: none;
    transition: filter 0.2s ease;

    &:hover{
      filter: brightness(0.8);
    }
  }

  .modal-contact__article-submit-icon{
    width: 1.2rem;
    height: 1.2rem;

    fill: #fff;
  }

  @media (max-width: 500px) {

    .modal-contact__article{
      max-width: unset;
      max-height: 58rem;
    }

    .modal-contact__article-title{
      font-size: 2.5rem;
    }

    .modal-contact__article-label{
      font-size: 2.2rem;
    }

    .modal-contact__article-form{
      width: 90%;
    }

    .modal-contact__article-input{
      height: 4rem;

      font-size: 2rem;
    }

    .modal-contact__article-submit-button{
      width: 13rem;
      height: 4rem;

      font-size: 1.6rem;
    }

    .modal-contact__article-submit-icon{
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @keyframes showOpacity {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes hideOpacity {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes showArticle {
    from { transform: translate(-40px,40px); }
    to { transform: translate(0,0); }
  }

  @keyframes hideArticle {
    from { transform: translate(0,0); }
    to { transform: translate(-40px,40px); }
  }
`;
