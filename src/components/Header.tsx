import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: royalblue;
    padding: 2%;

    h1 {
        font-size: calc(24px + 1vw);
    }

    p {
        font-size: calc(14px + 0.5vw);
    }

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Jayden Park</h1>
            <p>Online Resume</p>
        </StyledHeader>
    );
}