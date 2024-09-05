import styled from "styled-components";

export const Wrapper = styled.section`
  background: var(--main-bg-color);
  height: 100vh;
  .form-center {
    display: grid;
    align-content: center;
    height: calc(100vh - 5rem);
  }
  .login {
    padding: 5rem 0;
    display: grid;
    place-items: center;
  }
  h6 {
    margin-bottom: 2rem;
    text-align: center;
  }
  .login-form {
    background: var(--text-color);
    padding: 3rem;
    max-width: 500px;
    width: 90%;
    display: grid;
    justify-items: center;
    border-radius: 0.5rem;
    margin: 0 auto;
  }
  .form-row {
    width: 100%;
    margin-bottom: 2rem;
  }
  .form-input {
    background: var(--gray-200);
    padding: 0 2rem;
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
  }
  .form-input:focus {
    outline: none;
  }
  .form-input::placeholder {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;
  }
  .login-btn {
    margin-top: 1.5rem;
    width: 100%;
    border-color: var(--main-bg-color);
    color: var(--main-bg-color);
  }
  .login-btn:hover {
    color: var(--text-color);
  }
`;
