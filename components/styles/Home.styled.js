import styled from "styled-components"

export const HomeContainer = styled.div`
  padding-left: 225px;
  padding-right: 25px;
  display: flex;
  width: 100%;
  padding: 70px 30px 0 250px;
  justify-content: space-between;
  flex-wrap: wrap;
  & > .mainbar {
    min-height: 100vh;
    width: calc(100% - 330px);

    @media screen and (min-width: 1440px) {
      width: calc(100% - 380px);
    }
    & > .main-widget {
      box-sizing: border-box;
      & > .blog-posts {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
  & > .sidebar {
    background-color: transparent;
    width: 330px;
    padding: 30px 0 50px 30px;
    flex-shrink: 0;
  }
`
