import { createGlobalStyle } from "styled-components";

const BottomNavStyle = createGlobalStyle`

.BottomNav{
  .team{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #3ee3fa;
  }
  .dashbaord{
    background: #7482dd;
  }
  .Knowledge{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #9d33c8;
  }
    ul li:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      margin-right: 3px;
  }
  ul li {
      display: inline-block;
      width: 145px;
      text-align: center;
      text-transform: uppercase;
      cursor: pointer;
      background-color: rgba(57, 57, 57, 0.6);
  }
  ul li > a {
    color: rgb(255,255,255)!important;
    display: block;
    width: 100%;
    padding: 10px 0px;
    font-size: 13px;
  }
  ul li > a:hover {
    color: white;
    text-decoration: none;
  }
  ul li:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: 3px;
  }
}

`;

export default BottomNavStyle;
