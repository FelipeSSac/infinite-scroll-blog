import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  padding: 3rem 0;

  .new-article__article{
    width: 90%;
    max-width: 55rem;
    height: 72rem;
    margin: 0 auto;
    padding: 5rem 0;

    display: flex;
    flex-direction: column;

    background-color: #fff;
    -webkit-box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  }

  .new-article__form{
    width: 90%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .new-article__image{
    width: 100%;
    max-width: 17rem;
    height: auto;

    border-radius: 50%;
  }

  .new-article__title{
    margin: 2rem 0 0.5rem;

    font-weight: 700;
    font-size: 1.8rem;
    color: var(--yellow);
  }

  .new-article__label{
    width: 30rem;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;

    font-size: 1.5rem;
    line-height: 1.2rem;
  }

  .new-article__input{
    width: 100%;
    height: 3rem;
    margin-top: 0.7rem;
    padding: 0 0.75rem;

    font-size: 1.5rem;

    &:placeholder{
      color: var(--dark);
    }
  }

  .new-article__textarea{
    width: 100%;
    height: 8rem;
    margin-top: 1rem;
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

  .new-article__button{
    width: 100%;
    max-width: 12rem;
    height: 3.1rem;
    margin: 3rem 0 0;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fff;
    font-size: 1.05rem;
    font-weight: 500;
    background-color: var(--dark);
    border-radius: 4px;
    border: 0;
    outline: none;
    transition: filter 0.2s ease;

    &:hover{
      filter: brightness(0.8);
    }
  }

  .new-article__button-icon{
    width: 0.9rem;
    height: 0.9rem;

    fill: #fff;
  }

  @media (max-width: 760px){
    height: calc(100vh - 6.25rem);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 545px){
    .new-article__label{
      width: 100%;
    }
  }
`;
