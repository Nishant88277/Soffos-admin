import { createGlobalStyle } from "styled-components";

const NavStyle = createGlobalStyle`
    .navbar{
        padding: 30px 15px 25px;
        .logo{
            max-width: 200px;
        }
        .NavMiddle{
            p{
                letter-spacing: 2px;
                font-weight: 500;
                font-size: 20px;    
            }
            span{
                color: #abb7c1;
                font-size: 12px;
                font-style: italic;
                font-weight: 400;
            }
        }
        .NavbarRight{
            img{
                object-fit: cover;
                object-position: center;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 2px solid #fff;
                cursor: pointer;
            }
        }
    }
`;

export default NavStyle;
