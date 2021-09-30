import styled from 'styled-components';

export const Container = styled.article`
  margin-top: 5rem;

  &.main-article--0,
  &.main-article--1,
  &.main-article--3,
  &.main-article--4{
    width: 50%;
    height: 20rem;

    display: inline-block;

    .main-article__content{
      width: 100%;
      padding: 2rem 5rem;
    }
  }

  &.main-article--2,
  &.main-article--5{
    width: 100%;
    height: 40rem;

    display: flex;
    align-items: center;

    .main-article-container{
      width: 70%;
    }

    .main-article__content{
      padding: 11.25rem 5rem;
    }
  }

  &.main-article--2{
    justify-content: flex-end;
  }

  &.main-article--5{
    justify-content: flex-start;
  }

  .main-article-container{
    width: 100%;
    height: 100%;

    display: flex;
  }

  .main-article__image{
    width: 45%;

    object-fit: cover;
  }

  .main-article__content{
    max-width: 55%;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    background-color: #fff;
  }

  .main-article__author{
    width: 100%;
    max-height: 2.125rem;

    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }

  .main-article__title{
    width: 100%;
    max-height: 5.7rem;

    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.9rem;
    color: var(--yellow);
  }

  .main-article__summary{
    width: 100%;
    max-height: 6rem;

    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
  }

  .main-article__show-button{
    position: absolute;
    right: 1rem;
    bottom: 1rem;

    border: 0;
    background-color: transparent;

    &:hover{
      filter: brightness(0.1);
    }
  }

  @media (max-width: 820px) {
    &.main-article--0,
    &.main-article--1,
    &.main-article--3,
    &.main-article--4{
      .main-article__content{
        padding: 1.8rem 3rem;
      }
    }

    &.main-article--2,
    &.main-article--5{
      height: 30rem;
      margin: 12rem 0 6rem;

      .main-article-container{
        width: 80%;
      }

      .main-article__content{
        padding: 7rem 3rem;
      }
    }

    .main-article__show-button{
      height: 1.7rem;
      width: 1.7rem;
    }

    .main-article__arrow-icon{
      width: 1.5rem;
      height: auto;
    }
  }

  @media (max-width: 460px){
    &.main-article--2,
    &.main-article--5{
      height: 25rem;
      .main-article__content{
        padding: 5rem 2.5rem;
      }
    }
  }
`;
