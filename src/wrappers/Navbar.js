import styled from "styled-components";

export const Wrapper = styled.nav`
  background: var(--main-bg-color);
  /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5); */
  transition: var(--transition);
  height: 5rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  .theme-btn {
    color: var(--text-color);
    background: transparent;
    border: none;
    font-size: 1rem;
    display: none;
    /* align-items: center; */
    transition: var(--transition);
    border-radius: 50%;
    padding: 0.25rem;
    cursor: pointer;
  }
  .theme-btn:hover {
    background: var(--gray-200);
    color: var(--main-bg-color);
  }
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
  .toggle-btn {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    display: flex;
    cursor: pointer;
    transition: var(--transition);
    color: var(--text-color);
  }
  .toggle-btn:hover {
    transform: scale(1.3);
  }
  .nav-links {
    display: none;
  }
  .theme {
    display: none;
  }
  .nav-buttons-container {
    display: none;
  }
  @media (width>=768px) {
    .theme {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      align-self: flex-end;
      padding: 1rem;
    }
    .theme-icon {
      color: var(--main-bg-color);
    }
    .dark-theme-container {
      background: var(--gray-500);
      width: 3.5rem;
      height: 1.5rem;
      border-radius: 1rem;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
    }
    .theme-btn-1 {
      position: absolute;
      background: var(--white);
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      transition: var(--transition);
      left: ${(props) => (props.theme === "light" ? "2.25rem" : "5px")};
    }
    .nav-links {
      display: flex;
      gap: 1rem;
      list-style-type: none;
    }
    .nav-link {
      text-decoration: none;
      color: var(--text-color);
      text-transform: capitalize;
      transition: var(--transition);
      margin-bottom: 5px;
    }
    .active {
      border-bottom: 2px solid var(--text-color);
    }
    .nav-link:hover {
      color: var(--gray-500);
    }
    .show-logo {
      display: none;
    }
    .show-logo-1 {
      display: flex;
    }
    .toggle-btn {
      display: none;
    }
    .nav-buttons-container {
      position: absolute;
      top: 5rem;
      right: 3%;
      z-index: 3;
      border-radius: 1rem;
      display: none;
      background: var(--text-color);
      padding: 1rem;
      gap: 1rem;
    }
    .show-nav-buttons-container {
      display: grid;
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
    .options-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      border: none;
      border-radius: 50%;
      background: var(--text-color);
      /* width: 3rem;
      height: 3rem; */
      display: grid;
      place-items: center;
      color: var(--main-bg-color);
      cursor: pointer;
      transition: var(--transition);
      font-size: 1rem;
    }
    .options-btn:hover {
      color: var(--text-color);
      background: var(--main-bg-color);
    }
  }
  @media (width >= 1024px) {
    .theme {
      display: none;
    }
    .theme-btn {
      display: flex;
    }
    .options-btn {
      display: none;
    }
    .nav-buttons-container {
      display: flex;
      position: static;
      background: transparent;
      padding: 0;
    }
  }
`;
