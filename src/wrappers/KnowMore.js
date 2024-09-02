import styled from "styled-components";

export const Wrapper = styled.section`
  background: var(--main-bg-color);
  nav {
    background: var(--main-bg-color);
    transition: var(--transition);
    height: 5rem;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
  }
  article {
    margin-bottom: 3rem;
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
  .section-center {
    margin-bottom: 1rem;
  }
  /* CONTENT */
  .content {
  }
  .title {
    border: 2px solid var(--gray-500);
    border-left: 10px solid var(--gray-500);
    padding: 1rem;
    padding-left: 0.5rem;
    border-radius: 0.35rem;
    margin-bottom: 1.75rem;
    text-align: center;
    box-shadow: var(--shadow-1);
  }
  .back-btn {
    justify-content: left;
    display: flex;
    gap: 1rem;
    color: var(--text-color);
    transition: var(--transition);
    width: 120px;
  }
  .back-btn:hover {
    color: var(--gray-500);
  }
  .section {
    margin-bottom: 5rem;
  }
  /* GOALS */
  .goals-list {
    display: grid;
    gap: 1rem;
  }
  /* .goal {
    text-transform: capitalize;
    border-left: 7px solid var(--text-color);
    padding-left: 0.5rem;
    border-radius: 3%;
  } */
  .goal {
    color: var(--text-color);
    text-transform: capitalize;
    border: 2px solid var(--text-color);
    padding: 1rem;
    border-radius: var(--border-radius);
  }
  /* EVENTS */
  .events {
    display: grid;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto;
  }
  .event {
    width: 80%;
    margin: 0 auto;
    border-radius: 0.5rem;
    box-shadow: var(--shadow-1);
    background: var(--gray-200);
    transition: var(--transition);
  }
  .event:hover {
    transform: scale(1.02);
  }
  .event-img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    display: block;
    height: 13rem;
    object-fit: cover;
    width: 100%;
  }
  .event-info {
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    padding: 1rem;
  }
  .info-heading {
    font-weight: 700;
    letter-spacing: 1px;
  }
  .info {
  }
  /* GALLERY */
  .gallery-images {
    display: grid;
    gap: 1rem;
    justify-content: center;
    justify-items: center;
  }
  .gallery-img-container {
    width: 90%;
    transition: var(--transition);
    cursor: pointer;
    position: relative;
    background: linear-gradient(rgba(25, 98, 3, 0.4), rgba(25, 12, 3, 0.8));
    border-radius: 0.5rem;
  }
  .gallery-img-container:hover {
    outline: 2px solid var(--white);
    outline-offset: -20px;
  }
  .gallery-img-container img {
    border-radius: 0.5rem;
    display: block;
    width: 100%;
    object-fit: cover;
    transition: var(--transition);
  }
  .gallery-img-container:hover img {
    opacity: 0.4;
  }
  /* MODAL */
  .gallery-modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: grid;
    place-items: center;
  }
  .modal-collection {
    display: none;
  }
  .modal-slider {
    position: relative;
  }
  .close-btn {
    position: absolute;
    z-index: 2;
    top: 1rem;
    right: 1.75rem;
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
  .modal-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--white);
    font-size: 1.25rem;
    cursor: pointer;
    transition: var(--transition);
    background: var(--black);
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-btn:nth-child(2) {
    left: 0;
  }
  .modal-btn:nth-child(3) {
    right: 0;
  }
  .modal-btn:hover {
    color: var(--gray-500);
    background: var(--white);
  }
  .modal-main-images-container {
    position: relative;
    display: flex;
    place-items: center;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }
  .modal-main-img-container {
    position: absolute;
    top: 50%;
    left: 0;
    height: 80%;
    width: 100%;
    opacity: 0;
    transition: all 0.5s ease;
    margin: 0 auto;
    border-radius: 0.5rem;
  }
  .modal-main-img-container img {
    height: 100%;
    border-radius: 0.5rem;
    display: block;
    object-fit: cover;
    width: 100%;
  }
  .modal-main-img-container.active {
    opacity: 1;
    transform: translate(0, -50%);
  }
  .modal-main-img-container.last {
    transform: translate(-100%, -50%);
  }
  .modal-main-img-container.next {
    transform: translate(100%, -50%);
  }
  @media (width>=768px) {
    .title {
      margin-bottom: 5rem;
    }
    .events {
      max-width: 900px;
      grid-template-columns: 1fr 1fr;
    }
    .event {
      max-width: 400px;
    }
    .show-logo {
      display: none;
    }
    .show-logo-1 {
      display: flex;
    }
  }
  @media (width>=1024px) {
    .gallery-images {
      grid-template-areas:
        "a a b c"
        "d e b f";
      justify-items: normal;
    }
    .gallery-img-container {
      width: 100%;
      max-height: 300px;
    }
    .gallery-img-container img {
      height: 100%;
    }
    .gallery-img-container:nth-child(1) {
      grid-area: a;
    }
    .gallery-img-container:nth-child(2) {
      grid-area: c;
    }
    .gallery-img-container:nth-child(3) {
      grid-area: d;
    }
    .gallery-img-container:nth-child(4) {
      grid-area: b;
      max-height: none;
    }
    .gallery-img-container:nth-child(4) img {
      height: 100%;
    }
    .gallery-img-container:nth-child(5) {
      grid-area: e;
    }
    .gallery-img-container:nth-child(6) {
      grid-area: f;
    }
  }
`;
