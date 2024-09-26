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
  gap: 12px;
`;

export const LinkContainer = styled.li`
  list-style-type: none;
  a {
    text-decoration: none;
  }
  width: 160px;
  padding: 10px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
