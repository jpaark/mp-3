import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: royalblue;
    padding: 2%;
    font-size: calc(12px + 0.5vw);
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Jayden Park: <Link to="/credits">Credits</Link> &#169;</p>
        </StyledFooter>
    )
}