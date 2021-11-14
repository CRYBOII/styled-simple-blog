import styled from "styled-components"

export const HomeContainer = styled.div`
  padding-left: 225px;
  padding-right: 25px;
  display: flex;
  width: 100%;
  padding: 70px 30px 0 250px;
  justify-content: space-between;
  flex-wrap: wrap;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 170px;
    height: 170px;
    border-radius: 0 0 0 200px;
    background: rgba(0, 0, 0, 0.02);
    z-index: -1;
  }
  @media screen and (max-width: 800px) {
    padding-left: 25px;
    padding-right: 25px;
  }
  @media screen and (max-width: 1100px) {
    padding-right: 0;
  }
  & > .mainbar {
    min-height: 100vh;
    width: calc(100% - 330px);
    transition: all 0.1s ease;

    @media screen and (min-width: 1440px) {
      width: calc(100% - 380px);
    }

    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 0 0 50px;
    }
    & > .main-widget {
      box-sizing: border-box;
      & > .blog-posts {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
  & > .asidebar {
    background-color: transparent;
    width: 330px;
    padding: 0 0 50px 30px;
    flex-shrink: 0;
    @media screen and (max-width: 800px) {
      width: 100%;
      padding: 0 0 50px;
    }

    & > .widget-left {
      & > .widget {
        & ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      }
      & > .profiles ul {
        display: flex;
        flex-wrap: wrap;
      }

      & > .popular {
        & .post {
          display: flex;
          &::before {
            flex-shrink: 0;
            content: "0" counter(popular-count);
            counter-increment: popular-count;
            width: 45px;
            font-weight: 700;
            font-size: 22px;

            color: rgba(0, 0, 0, 0.15);
          }

          & .item-content {
            flex-grow: 1;
            width: calc(100% - 45px);

            & > h5 {
              margin: 2px 0;
              font-size: 95%;
            }
            & > .info {
              margin-top: 5px;

              & p {
                font-size: 10px;
                line-height: 1.58em;
                margin: 0;
              }
            }
          }
        }
      }

      & > .labels {
        & ul {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          margin: 0;
          padding: 0;

          & > li:nth-child(2n + 1) {
            margin-right: 25px;
          }
          & > li {
            cursor: pointer;
            display: flex;
            width: calc(50% - 12.5px);
            margin-bottom: 13px;
            align-items: center;
            color: inherit;
            font-size: 14px;

            & > span {
              margin-right: auto;
              padding-right: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            & svg {
              margin-left: 2px;
            }
          }
        }
      }
    }
  }
`
