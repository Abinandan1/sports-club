import styled from "styled-components";
import aboutimg from "/assets/images/about.jpg";
export const Wrapper = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.2)
    ),
    url(${aboutimg}) center/cover no-repeat;
  min-height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  .about {
    display: grid;
    place-items: center;
    gap: 3rem;
    max-width: 600px;
  }
  .quote {
    color: var(--black);
  }
  .objective {
    color: var(--black);
  }
  .quote-by {
    text-transform: uppercase;
    background: var(--main-bg-color);
    border-radius: var(--border-radius);
    color: var(--text-color);
    width: 90%;
    margin: 0 auto;
    padding: 0.5rem 0;
    font-weight: 500;
  }
`;
