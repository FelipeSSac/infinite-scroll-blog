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
      padding: 2rem 5rem;
    }
  }

  &.main-article--2,
  &.main-article--5{
    width: 70%;
    max-width: 80rem;
    height: 40rem;

    display: block;

    .main-article__content{
      padding: 11.25rem 5rem;
    }
  }

  &.main-article--2{
    margin-left: 30%;
  }

  .main-article-container{
    width: 100%;
    height: 100%;

    display: flex;
  }

  .main-article__image{
    flex: 2;
  }

  .main-article__content{
    flex: 3;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    background-color: #fff;
  }

  .main-article__author{
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }

  .main-article__title{
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.9rem;
    color: var(--yellow);
  }

  .main-article__summary{
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
`;
