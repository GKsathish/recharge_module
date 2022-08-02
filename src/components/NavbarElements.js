import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #000080;
height: 60px;

display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #FFFFFF;
font-size:20px;
display: flex;
align-items: center;
text-decoration: none;
padding:  10px;
height: 100%;
cursor: pointer;
&.active {
	color: orange;
}
`;


export const NavMenu = styled.div`
display: flex;
color:#fff;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
