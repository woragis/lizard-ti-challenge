import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
`;

export const LinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  gap: 12px;
`;

export const LinkContainer = styled.li`
  list-style-type: none;
  a {
    text-decoration: none;
    height: 100%;
    width: 100%;
  }
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
