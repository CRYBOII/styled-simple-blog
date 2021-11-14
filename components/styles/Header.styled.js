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
      @media screen and (max-width: 640px) {
        width: 100%;
        height: auto;
        max-width: none;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
      }
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
          @media screen and (max-width: 640px) {
            background-color: #fefefe;
            z-index: 3;
            position: absolute;
            border-radius: 0 0 15px 15px;
            padding: 40px 25px 25px 60px;
            margin-top: -100%;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
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
          @media screen and (max-width: 640px) {
            margin-top: -100%;
            z-index: 4;
            height: 18px;
            left: 20px;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }
        }
      }
    }

    & > .set {
      margin-left: auto;
    }
  }
`
