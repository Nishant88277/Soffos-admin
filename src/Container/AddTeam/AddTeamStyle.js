import { createGlobalStyle } from "styled-components";

const AddTeamStyle = createGlobalStyle`
    .AddteamSection{
        .wrap{
            background: rgb(130 141 169 / 24%);
            border-radius: 10px;
            padding: 15px;
            .teamList{
              .w-50px{
                width: 50px;
              }
                p{
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-right: 10px;
                }
                span{
                    font-size: 9px;
                    font-style: italic;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-right: 10px;
                    display: block
                }
                img{
                    width: 100%;
                    height: 45px;
                    border-radius: 50%;
                }
                .deleteWrap{
                  background: rgba(255, 0, 0, 0.8);
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  border-radius: 50%;
                  display: none;
                  img{
                    width: 20px;
                    height: 20px;
                  }
                }
                :hover .deleteWrap{
                  display: flex;
                }
            }
            .listWrap{
              overflow: auto;
              height: calc(100vh - 390px);
              min-height: 370px;
            }
            .head{
                font-weight: 500;
                p{
                    color: #abb7c1;
                    text-transform: Uppercase;
                    font-size: 14px;
                    line-height: 12px;
                }
                span{
                    font-style: italic;
                    color: #abb7c1;
                    font-size: 12px
                }
            }
            .container {
                display: block;
                position: relative;
                margin-bottom: 30px;
                cursor: pointer;
                font-size: 14px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                color: #abb7c1;
                padding-left: 40px;
                transition: all 0.25s linear 0s;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                    transition: all 0.25s linear 0s;  
                  }
                  .checkmark {
                    position: absolute;
                    top: 8px;
                    left: 0;
                    height: 15px;
                    width: 15px;
                    background-color: #3a404f;
                    border-radius: 15px;
                  }
                  :hover input ~ .checkmark {
                    background-color: #646b7f;
                    transition: all 0.25s linear 0s;    
                  }
                  input:checked ~ .checkmark {
                    background-color: #5b9415;
                  }
                  input:checked ~ .checkmark:after {
                    display: block;
                  }
              }
            .add-team{
                text-align: right;
                color: #abb7c1;
                font-size: 14px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                -moz-user-select: none;
                -webkit-user-select: none;
            }
            input[type="text"]{
                width: 100%;
                background: rgb(130 141 169 / 24%);
                border: none;
                border-radius: 40px;
                outline: none;
                color: #abb7c1;
                font-style: italic;
                font-size: 12px;
                padding: 5px 10px;
                margin-top: 20px;
            }
        }
    }

    @media (min-width: 700px) and (max-width: 1200px) {
      .AddteamSection .wrap .container {
        font-size: 12px;
        padding-left: 20px;
        .checkmark {
          height: 11px;
          width: 11px;
        }
        .teamList img {
          width: 30px;
          height: 28px;
          border-radius: 50%;
      }
      }
  }
`;

export default AddTeamStyle;
