import { createGlobalStyle } from "styled-components";

const KnowledgeModalStyle = createGlobalStyle`

    .modalWrap{
        .modalOverlay{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 20;
            background-color: rgba(0,0,0,.7);
            filter: blur(8px);
            -webkit-filter: blur(8px);
        }
        .modalPopup{
            position: fixed;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            z-index: 30;
            background: rgb(33 48 88 / 73%);
            width: 400px;
            border-radius: 5px;
            border: 1px solid #060e21;
            display: block
        }
        .modalPopup-header{
            color: rgba(255, 255, 255, 0.65);
            font-weight: 600;
            font-size: 15px;
            position: relative;
            padding: 10px 15px 15px;
            .close-btn{
                position: absolute;
                top: 10px;
                right: 15px;
                width: 28px;
                height: 28px;
                line-height: 28px;
                background-color: rgb(19, 28, 49);
                color: rgb(255, 255, 255);
                font-weight: 600;
                font-size: 12px;
                cursor: pointer;
                text-align: center;
                border-radius: 50%;
                border-width: initial;
                border-style: none;
                border-color: initial;
                border-image: initial;
            }
        }
        .Modalpopup-content{
            padding: 30px 15px 20px;
            position: relative;
            padding-top: 10px;
            input[type="text"] {
                width: 100%;
                color: rgb(0 0 0);
                font-size: 15px;
                font-weight: 500;
                background-color: rgb(255 255 255);
                padding: 18px 15px;
                padding-right: 50px;
                border-width: initial;
                border-style: none;
                border-color: initial;
                border-image: initial;
                outline: none;
                border-radius: 5px;
            }
            .input-wrap{
                .outline{
                    outline: 2px dashed #92b0b3;
                    outline-offset: -4px;
                    cursor: pointer;
                    .dropzone{
                        padding: 50px;
                        outline: none;
                    }
                }
                .progress-bar span {
                    display: inline-block;
                    height: 5px;
                    width: 0%;
                    border-radius: 3px;
                    box-shadow: 0 1px 0 rgba(255, 255, 255, .5) inset;
                    background: rgb(1, 182, 178);
                }
                .progress-bar {
                    width: 99%;
                    margin: 0px 2px;
                    background: transparent;
                }
                .progress-bar span {
                    -webkit-transition: width .4s ease-in-out;
                    -moz-transition: width .4s ease-in-out;
                    -ms-transition: width .4s ease-in-out;
                    -o-transition: width .4s ease-in-out;
                    transition: width .4s ease-in-out;
                }
            }
            button{
                width: 100%;
                cursor: pointer;
                color: rgba(255, 255, 255, 0.85);
                font-size: 15px;
                font-weight: 400;
                border-width: initial;
                border-style: none;
                border-color: initial;
                border-image: initial;
                padding: 18px 15px;
                outline: none;
                border-radius: 5px;
            }
            .addButton{
                background: #17a2b8;
                transition: all 0.25s linear 0s;
                :hover{
                    background: #008094;
                    transition: all 0.25s linear 0s;
                }
            }
            .closeButton{
                background-color: rgb(19, 28, 49);
                transition: all 0.25s linear 0s;
                :hover{
                    background: rgb(34 49 84);
                    transition: all 0.25s linear 0s;
                }
            }
            .actionBtn{    
                position: absolute;
                top: 10px;
                font-size: 30px;
                right: 30px;
                cursor: pointer;
                background: unset;
                border: none;
                outline: none
            }
            .input-wrap{
                max-height: 240px;
                overflow: auto;
            }
            ul{
                list-style: none;
                color: #fff;
                margin-top: 5px;
                font-size: 12px;
                margin-bottom: 0;
            }
        }
    }
    
`;

export default KnowledgeModalStyle;
