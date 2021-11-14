import styled from "styled-components"

export const StyledHeader = styled.nav`
  display: flex;
  height: 60px;
  padding: 0 30px;
  background-color: #fefefe;
  color: #161617;
  z-index: 50;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 7%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  & > .headerLeft {
    align-items: center;
    flex-shrink: 0;
    display: flex;
    @media screen and (max-width: 1100px) {
      width: 175px;
    }
    & > .logo {
      margin-right: 10px;
    }

    & > h3 {
      text-overflow: ellipsis;
    }
  }

  & > .headerRight {
    flex-grow: 1;
    display: flex;
    align-items: center;

    & > .searchBar {
      padding-left: 25px;
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      width: 50%;
      height: 100%;
      max-width: 550px;
      box-sizing: border-box;

      & > form {
        position: relative;
        width: 100%;
        margin: auto 0;

        & > input {
          background-color: rgba(236, 239, 241, 0.8);
          outline: 0;
          border: 0;
          padding: 12px 20px 12px 45px;
          border-radius: 5px;
          width: 100%;
          transition: box-shadow 0.3s;
          box-sizing: border-box;
          -webkit-transition: box-shadow 0.3s;
        }

        & > button {
          position: absolute;
          top: 0;
          left: 15px;
          display: flex;
          height: 100%;
          align-items: center;
          padding: 0;
          border: 0;
          outline: 0;
          background: transparent;
          cursor: pointer;
        }
      }
    }

    & > .set {
      margin-left: auto;
    }
  }
`
