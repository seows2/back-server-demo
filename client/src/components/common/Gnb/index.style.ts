import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12%;
`;

const commonButtonStyle = css`
  padding: 7px 16px;
  font-size: 15px;
  border-radius: 6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
`;

export const SignInButton = styled.button`
  ${commonButtonStyle};
  border: 1px solid ${({ theme }) => theme.colorPrimary};
`;

export const SignUpButton = styled.button`
  ${commonButtonStyle};
  border: 1px solid ${({ theme }) => theme.colorSub};
  color: $(({theme}) => theme.colorWhite);
`;
