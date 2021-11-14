import styled from "styled-components"

export const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fefefe;
  width: 225px;
  height: 100%;
  padding: calc(60px + 15px) 0 0 0;
  transition: all 0.1s ease;
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 6px 18px 0 rgb(30 30 30 / 4%);

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
    background: transparent;
    box-shadow: none;
    margin-left: -100%;
  }

  & > .nav-menu {
    padding-bottom: 90px;
    list-style: none;
    margin: 0;
    padding: 0;
    color: #161617;
    font-size: 90%;

    & > li > a {
      cursor: pointer;
      position: relative;
      padding: 10px 20px 10px 25px;
      display: flex;
      color: #161617;
      & > svg {
        fill: none;
        flex-shrink: 0;
      }

      & > span {
        display: block;
        margin-left: 21px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
      }
    }

    & > li.break::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 0;
      display: block;
      width: 2px;
      height: 42px;
      border-radius: 0 3px 3px 0;
    }
    & > li.break::after {
      content: "";
      display: block;
      width: 100%;
      border-bottom: 1px solid #ebeced;
      margin-top: 20px;
    }
    & .socials {
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 20px 20px 30px 5px;

      @media screen and (max-width: 800px) {
        max-width: 480px;
        width: 85%;
        margin-left: -100%;
        border-radius: 0 0 10px 0;
      }
      & ul {
        display: flex;
        list-style: none;

        & li {
          height: auto;
          opacity: 1;
          visibility: visible;
          padding: 0 7px 0 0;
        }
      }
      & svg {
        width: 22px;
        height: 22px;
        vertical-align: middle;
      }
    }
  }

  & > .nav-mobile {
    transition: all 0.1s ease;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    left: 0;
    bottom: -50px;
    width: 100%;
    height: 50px;
    padding: 0 25px;
    background-color: transparent;
    z-index: -1;
    list-style: none;
    margin: 0;
    display: flex;

    @media screen and (max-width: 640px) {
      background-color: #fefefe;
      box-shadow: 0 -10px 20px 0 rgb(30 30 30 / 10%);
      bottom: 0;
    }

    & > li.svg {
      position: absolute;
      width: 100%;
      top: -28px;
      display: block;
      & > svg {
        @media screen and (max-width: 640px) {
          width: 100%;
          height: 36px;

          fill: #fefefe;
        }
      }
    }
  }
`
