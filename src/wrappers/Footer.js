import styled from "styled-components";
import footer from "/assets/images/footer.jpg";
export const Wrapper = styled.footer`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url(${footer}) bottom/cover no-repeat;
  color: var(--white);
  .footer {
    padding: 10rem 0;
    display: grid;
    place-items: center;
    gap: 2rem;
  }
  .social-icons {
    display: flex;
    gap: 2rem;
  }
  .social-icon {
    font-size: 1.5rem;
    color: var(--white);
    transition: var(--transition);
  }
  .social-icon:hover {
    color: var(--black);
  }
  .copyright-info {
    font-size: 1.05rem;
    letter-spacing: 1px;
  }
  @media (width>=768px) {
    .social-icon {
      font-size: 2rem;
    }
    .copyright-info {
      font-size: 1.25rem;
    }
  }
`;
