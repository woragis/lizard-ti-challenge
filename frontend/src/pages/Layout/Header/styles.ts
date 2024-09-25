import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
`;

export const LinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LinkContainer = styled.li`
  list-style-type: none;
  a {
    text-decoration: none;
  }
`;
