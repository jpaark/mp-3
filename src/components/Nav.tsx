import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: whitesmoke;

    ul {
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
    }

    li {
        padding: 5vh 2px;
        border: 5px solid royalblue;
        text-align: center;
    }

    a {
        color: royalblue;
        text-decoration: none;
        font-size: calc(8px + 1.5vw);
    }

    @media screen and (max-width: 750px) {
        width: 100%;

        ul {
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
        }

        li {
            width: auto;
            padding: 10px 5px;
            border: 3px solid royalblue;
        }

        a {
            font-size: calc(12px + 0.3vw);
        }
    }
`;

export default function Nav(){
    return (
        <>
            <StyledNav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/leadership">Leadership</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/awards">Awards</Link></li>
                </ul>
            </StyledNav>
        </>
    );
}