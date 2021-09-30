import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: fit-content;
  padding: 3rem 0;

  .single-article__loading-container{
    width: 100%;
    height: calc(100vh - 6.25rem);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .single-article__article{
    width: 80%;
    max-width: 60rem;
    height: 70rem;
    min-height: fit-content;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    background-color: #fff;
    -webkit-box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  }

  .single-article__header{
    flex: 3;

    display: flex;
  }

  .single-article__image{
    width: 50%;
    height: auto;

    object-fit: cover;
  }

  .single-article__details{
    width: 50%;
    height: auto;
    padding: 8rem 6rem;

    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: space-around;
    text-align: start;
  }

  .single-article__date{
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 400;
    font-size: 1rem;
  }

  .single-article__author{
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 400;
    font-size: 1.3rem;
  }

  .single-article__title{
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 700;
    font-size: 1.7rem;
    color: var(--yellow);
  }

  .single-article__body{
    flex: 5;
    padding: 0 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    font-size: 1rem;
    line-height: 2rem;
  }

  @media (max-width: 560px){

    .single-article__article{
      width: 95%;
    }

    .single-article__body{
      padding: 0 7rem;
    }
  }

  @media (max-width: 760px){
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
