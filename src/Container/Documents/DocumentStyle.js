import { createGlobalStyle } from "styled-components";

const DocumentStyle = createGlobalStyle`
    .AddteamSection{
        .wrap{
            background: rgb(130 141 169 / 24%);
            border-radius: 10px;
            padding: 15px;
            .listWrap{
              overflow: auto;
              height: calc(100vh - 390px);
              min-height: 410px;
                .listRow{
                    padding: 10px 0;
                    user-select: none;
                    display: flex;
                    align-items: center;
                    .switch {
                        position: relative;
                        display: inline-block;
                        width: 45px;
                        height: 20px;
                        margin-bottom: 0;
                      }
                      
                      .switch input { 
                        opacity: 0;
                        width: 0;
                        height: 0;
                      }
                      
                      .slider {
                        position: absolute;
                        cursor: pointer;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: #ccc;
                        -webkit-transition: .4s;
                        transition: .4s;
                        b{
                            color: white;
                            padding-left: 10px;
                            font-size: 14px;
                            vertical-align: super;
                        }
                      }
                      
                      .slider:before {
                        position: absolute;
                        content: "";
                        height: 20px;
                        width: 20px;
                        left: 0px;
                        bottom: 0px;
                        background-color: white;
                        -webkit-transition: .4s;
                        transition: .4s;
                      }
                      
                      input:checked + .slider {
                        background-color: #438100;
        
                      }
                      
                      input:focus + .slider {
                        box-shadow: 0 0 1px #438100;
                      }
                      
                      input:checked + .slider:before {
                        -webkit-transform: translateX(26px);
                        -ms-transform: translateX(26px);
                        transform: translateX(26px);
                      }
                      
                      /* Rounded sliders */
                      .slider.round {
                        border-radius: 34px;
                      }
                      
                      .slider.round:before {
                        border-radius: 50%;
                      }
                    }
                    .document-icon-wrapper{
                        width: 20px;
                        height: 27px;
                        margin: 0px 20px;
                        img{
                            width: 100%;
                        }
                    }
                    .document-name{
                        color: rgb(255, 255, 255);
                        font-size: 13px;
                        padding: 0px 20px 0px 0px;
                    }
                    .inactive{
                        color: rgba(255, 255, 255, 0.3);
                    }
                    .remove-document{
                        width: 16px;
                        height: 26px;
                        margin-left: auto;
                        img{
                            width: 100%;
                        }
                    }
                }
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
      .AddteamSection{
        .wrap{
          padding: 10px;
          .container {
            font-size: 12px;
            padding-left: 20px;
          }
          .listWrap{
            .document-name{
              font-size: 10px;
              padding: 0px 5px 0px 0px;
            }
            .document-icon-wrapper{
              width: 15px;
              margin: 0px 10px;
            }
            .listRow{
              .switch{
                width: 40px;
                height: 16px;
              }
              .slider b{
                font-size: 11px;
              }
              .slider:before{
                height: 16px;
                width: 16px;
              }
              input:checked + .slider:before{
                transform: translateX(22px);
              }
            } 
            }
          }
        } 
      } 
    }
`;

export default DocumentStyle;
