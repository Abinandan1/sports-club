import styled from "styled-components";

export const Wrapper = styled.aside`
  background: var(--main-bg-color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-left: -100%;
  height: 100vh;
  transition: var(--transition);
  z-index: 3;
  .sidebar {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    align-items: start;
    /* justify-items: center; */
    height: 100%;
    /* padding: 1rem; */
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0 0 0 3rem; */
    padding: 1rem 3rem;
    padding-right: 0.5rem;
  }
  .logo {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: var(--letter-spacing-2);
    text-shadow: 3px 1px 3px rgba(0, 0, 0, 0.2);
    border: 2px solid var(--text-color);
    border-radius: 0.25rem;
    height: 2.5rem;
    display: flex;
    place-items: center;
    padding: 0 0.5rem;
    color: var(--text-color);
  }
  .logo span {
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  .close-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    font-size: 1.75rem;
    color: var(--dark-red);
    transition: var(--transition);
    cursor: pointer;
  }
  .close-btn:hover {
    color: var(--light-red);
  }
  .side-links {
    display: grid;
    list-style-type: none;
    width: 100%;
  }
  .side-links li {
    /* padding: 0.75rem 0; */
    width: 100%;
  }
  .side-link {
    display: block;
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.5rem;
    text-transform: capitalize;
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    transition: padding-left 0.3s linear;
  }
  .side-link:hover {
    background: var(--text-color);
    color: var(--main-bg-color);
    padding-left: 4rem;
  }

  .theme {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    align-self: flex-end;
    padding: 1rem 1rem 2rem 3rem;
    /* justify-self: center; */
  }
  .theme-icon {
    color: var(--text-color);
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
  .theme-btn {
    position: absolute;
    background: var(--white);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transition: var(--transition);
    left: ${(props) => (props.theme === "light" ? "2.25rem" : "5px")};
  }
  .nav-buttons-container {
    border-radius: 1rem;
    display: flex;
    gap: 1rem;
    padding: 1rem 1rem 1rem 3rem;
    align-self: center;
    /* justify-self: center; */
  }
  .btn {
    width: 6rem;
    letter-spacing: 0;
    height: 2rem;
    font-size: 1rem;
    text-transform: capitalize;
  }
  .btn:hover {
    color: var(--main-bg-color);
    background: var(--text-color);
  }
  .btn-hipster:hover {
    color: var(--text-color);
    background: var(--main-bg-color);
  }
  @media (width>=600px) {
    width: 50%;
    box-shadow: var(--shadow-1);
  }
  @media (width>=768px) {
    display: none;
  }
`;
