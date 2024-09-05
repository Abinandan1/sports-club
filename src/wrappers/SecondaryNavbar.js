import styled from "styled-components";

export const Wrapper = styled.section`
  background: var(--main-bg-color);
  transition: var(--transition);
  height: 5rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;

  .navbar {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    height: 100%;
  }
  .logo {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: var(--letter-spacing-2);
    text-shadow: 3px 1px 3px rgba(0, 0, 0, 0.2);
    border: 2px solid var(--text-color);
    border-radius: 0.25rem;
    height: 2.5rem;
    display: none;
    place-items: center;
    padding: 0 0.5rem;
    color: var(--text-color);
  }
  .logo span {
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  .show-logo {
    display: flex;
  }
  .theme-btn {
    color: var(--text-color);
    background: transparent;
    border: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    transition: var(--transition);
    border-radius: 50%;
    padding: 0.25rem;
    cursor: pointer;
  }
  .theme-btn:hover {
    background: var(--gray-200);
    color: var(--main-bg-color);
  }
  .nav-buttons-container {
    display: flex;
    padding: 0;
    gap: 1rem;
    align-items: center;
  }
  .btn {
    width: 6rem;
    letter-spacing: 0;
    height: 2rem;
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0 auto;
    background: var(--main-bg-color);
    color: var(--text-color);
  }
  .btn-hipster {
    color: var(--main-bg-color);
    background: var(--text-color);
    border-color: var(--main-bg-color);
  }
  .btn:hover {
    background: var(--main-bg-color);
    color: var(--text-color);
  }
  .btn-hipster:hover {
    color: var(--main-bg-color);
    background: var(--text-color);
  }
`;
