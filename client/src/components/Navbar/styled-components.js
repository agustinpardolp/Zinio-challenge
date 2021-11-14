import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: var(--ming);
  justify-content: center;
  height: 10vh;
  width: 100%;
  box-shadow: 0 4px 2px -2px gray;
`;
const StyledNavbarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  img {
    height: 100%;
  }
  h2,
  svg {
    color: var(--seashell);
    font-size: 24px;
  }
  svg {
    margin-left: 5px;
  }
`;
const StyledSearchContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;

const SearchIconContainer = styled.div`
  margin-right: 10px;
`;

const StyledTitle = styled.div`
  align-items: center;
  display: flex;
  span {
    color: var(--seashell);
  }
  svg {
    font-size: 24px;
  }
`;

const TranslateContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  width: 100%;
  ul {
    list-style: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
export {
  StyledNavbar,
  StyledNavbarContainer,
  StyledSearchContainer,
  SearchIconContainer,
  StyledTitle,
  TranslateContainer,
};
