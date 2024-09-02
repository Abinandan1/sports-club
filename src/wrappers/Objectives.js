import styled from "styled-components";
import objective from "/assets/images/objective.jpg";
export const Wrapper = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.1)),
    url(${objective}) center/cover no-repeat;
  min-height: 100vh;
  .objectives {
    display: grid;
    justify-content: center;
    justify-items: center;
    padding: 8rem 0;
    margin: 0 auto;
    gap: 2rem;
  }
  .objective {
    padding: 2rem;
    width: 250px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    transition: var(--transition);
    background: var(--text-color);
    color: var(--main-bg-color);
  }
  .objective:hover {
    background: var(--main-bg-color);
    color: var(--text-color);
  }
  .objective p {
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
  }
  @media (width>=768px) {
    .objectives {
      max-width: 700px;
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
    }
  }
`;
