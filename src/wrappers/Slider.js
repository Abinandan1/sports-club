import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-content: center;
  background: var(--main-bg-color);
  .slider {
    position: relative;
    padding: 5rem 0;
  }
  .slider-container {
    position: relative;
    display: flex;
    place-items: center;
    overflow: hidden;
    height: 500px;
  }
  .slide {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: all 0.5s ease;
  }
  .slide.active {
    opacity: 1;
    transform: translateX(0);
  }
  .slide.last {
    transform: translateX(-100%);
  }
  .slide.next {
    transform: translateX(100%);
  }
  .quote-container {
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
    color: var(--gray-600);
  }
  .quote-right {
    align-self: flex-end;
  }
  .quote {
    width: 175px;
    /* font-size: 1.5rem; */
    text-align: justify;
    font-weight: 500;
  }
  .person-img-container {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  .name {
    margin-bottom: 0;
  }
  .designation {
    color: var(--gray-600);
  }
  .person-img {
    border-radius: 50%;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    border-radius: 50%;
    background: var(--text-color);
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    color: var(--main-bg-color);
    cursor: pointer;
    transition: var(--transition);
    font-size: 1.5rem;
  }
  .slider-btn:hover {
    color: var(--text-color);
    background: var(--gray-600);
  }
  .left-btn {
    left: 0;
  }
  .right-btn {
    right: 0;
  }
  @media (width>=768px) {
    .quote {
      font-size: 1.5rem;
      width: 275px;
    }
  }
`;
