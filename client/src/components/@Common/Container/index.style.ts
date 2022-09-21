import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.mainWidth};
  border: 1px solid #ddd;
  padding: 1.875rem 1.25rem;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  font-size: 1.75rem;
  text-align: center;
`;
