import styled from "styled-components"

export const PostCard = styled.article`
  width: calc(33.333% - 13.333px);

  @media screen and (max-width: 1100px) {
    width: calc(50% - 10px);
  }

  display: block;
  background-color: #fefefe;
  margin: 0 0 20px;

  margin-right: 10px;
  padding: 10px 10px 15px;
  border-radius: 8px;
  box-shadow: 0 10px 20px 0 rgb(30 30 30 / 7%);

  & .post-label {
    font-size: 11px;
    line-height: 1.58em;
    margin-bottom: 6px;
    white-space: nowrap;
    & > a {
      color: #272727;
    }
  }
  & .post-title {
    font-weight: 700;
    & > a {
      color: #161617;
    }
  }
  & .post-thumbnail a {
    position: relative;
    display: block;
    width: 100%;
    padding-top: 52.5%;
    background-color: #f7f9f8;
    border-radius: 6px;
    overflow: hidden;

    & > img {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      max-width: none;
      max-height: 100%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      object-fit: cover;
    }
  }

  & .post-info {
    color: #48525c;

    & p {
      font-size: inherit;
      line-height: 0.3em;
      font-size: 11px;
    }
  }
`
