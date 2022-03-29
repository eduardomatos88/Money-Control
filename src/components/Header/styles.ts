import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--primary);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      font-size: 1rem;
      color: var(--shape);
      background-color: var(--secondary);
      border: 0;
      margin-left: 15px;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
