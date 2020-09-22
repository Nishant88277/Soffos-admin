import { createGlobalStyle } from "styled-components";

const SiloStyle = createGlobalStyle`
    .point{
        color: #fff;
        width: 20%;
        height: 7%;
        margin: 10px;
        .silo-icon{
            width: 34px;
            height: 34px;
            justify-content: center;
            cursor: pointer;
            border-radius: 50%;
            border-width: 2px;
            border-style: solid;
            border-image: initial;
            .inner{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin: 5px;
            }
        }
        .silo-text{
            color: rgb(255, 255, 255);
            text-transform: uppercase;
            padding-left: 10px;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
        }
    }
    .pos{
        .silo-icon{
            color: #467a94;
        }
        .inner{
            background: #467a94;
        }
    }
    .pos1{
        position: absolute;
        .silo-icon{
            color: #467a94;
        }
        .inner{
            background: #467a94;
        }
    }
    .pos2{
        position: absolute;
        .silo-icon{
            color: #9d2dc4;
        }
        .inner{
            background:#9d2dc4;
        }
    }
    .pos3{
        position: absolute;
        .silo-icon{
            color: #467a94;
        }
        .inner{
            background: #467a94;
        }
    }
    .pos4{
        left: 60%;
        top: 70%;
        position: absolute;
        .silo-icon{
            color: #9d2dc4;
        }
        .inner{
            background: #9d2dc4;
        }
    }

    .active{
        .silo-icon{
            width: 50px;
            height: 50px;
            .inner{
                width: 34px;
                height: 34px;
                margin: 6px;
            }
        }
        .silo-text{
            font-size: 15px;
        }
    }

    @media (min-width: 700px) and (max-width: 1200px) {
        .point{
            .silo-text{
                font-size: 11px;
            }
            .silo-icon {
                width: 30px;
                height: 30px;
                .inner {
                    width: 16px;
                    height: 16px;
                }
            }
        }
        .active{
            .silo-icon{
                width: 40px;
                height: 40px;
                .inner{
                    width: 24px;
                    height: 24px;
                    margin: 6px;
                }
            }
        }
    }
`;

export default SiloStyle;
