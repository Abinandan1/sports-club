import styled from "styled-components";
import heroimg from "../../public/assets/images/herobg.jpg";
export const Wrapper = styled.section`
  min-height: calc(100vh - 5rem);
  background: var(--main-bg-color);
  .hero {
    display: grid;
    gap: 5rem;
    align-items: center;
    padding: 3rem 0;
    height: 100%;
  }
  .left {
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: left;
  }
  .quote h1 {
  }
  .right {
    height: 100%;
  }
  .hero-images-container {
    display: grid;
    grid-template-areas:
      "a b"
      "c b";
    height: 100%;
    gap: 1rem;
  }
  .hero-img-container {
    width: 250px;
    border-radius: 1rem;
    box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  }
  .hero-img-container:nth-child(1) {
    width: 100%;
    grid-area: a;
  }
  .hero-img-container:nth-child(2) {
    width: 100%;
    grid-area: c;
  }
  .hero-img-container:nth-child(3) {
    grid-area: b;
    height: 100%;
  }
  img {
    display: block;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (width>=768px) {
    .hero {
      padding: 5rem 0;
      /* gap: 0; */
      grid-template-columns: 1fr 1fr;
    }
  }
`;
