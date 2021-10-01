import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 6.25rem;

  position: fixed;
  z-index:10;

  background-color: var(--dark);
  -webkit-box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);

  .header-wrapper{
    width: 97%;
    max-width: 80rem;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__logo{
    min-width: fit-content;

    color: #fff;
    text-decoration: none;
    word-spacing: 0.5rem;
    font-weight: 700;
    font-size: 2.25rem;
  }

  .header__nav{
    width: 100%;
    max-width: 37rem;
    margin-left: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__nav-link{
    color: #fff;
    background-color: transparent;
    text-decoration: none;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.375rem;
    border: 0;
    outline: none;
  }

  .header__nav-link--new{
    width: 10rem;

    color: #fff;
    border-radius: 30px;
    background-color: var(--yellow);
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 3.1rem;
    text-align: center;
  }
`;
