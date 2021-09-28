import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 6.25rem;

  position: fixed;

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
    color: #fff;
    text-decoration: none;
    word-spacing: 0.5rem;
    font-weight: 700;
    font-size: 2.25rem;
  }

  .header__nav{
    width: 100%;
    max-width: 21rem;

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
`;
