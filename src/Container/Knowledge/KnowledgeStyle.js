import { createGlobalStyle } from "styled-components";

const KnowledgeStyle = createGlobalStyle`
    .teamSection{
        .wrap{
            background: rgb(130 141 169 / 24%);
            border-radius: 10px;
            padding: 15px;
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
                text-transform: capitalize;
                p{
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
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
                    top: 3px;
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
        .teamSection .wrap .container {
          font-size: 12px;
          padding-left: 20px;
          .checkmark {
            height: 11px;
            width: 11px;
          }
        }
    }
`;

export default KnowledgeStyle;
