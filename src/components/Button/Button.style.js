import styled from 'styled-components'

export const Container = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  background: #5e46bf;
  cursor: pointer;
  margin: 2rem auto 0;
  display: flex;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0px 0px 2px 4px rgba(0, 0, 0, 0.05);
    transition: 0.2s ease;
  }
`
