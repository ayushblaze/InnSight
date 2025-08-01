import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
  color: var(--color-grey-900);

  /* Dark mode support */
  body.dark-mode & {
    color: var(--color-grey-700);
    background-color: var(--color-grey-100);
    border: 1px solid var(--color-grey-400);
  }
`;

export default Input;