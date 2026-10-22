import styled from "styled-components";

const StyledHome = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    img {
        width: 45%;
        max-width: 300px;
    }

    div {
        width: 60%;
        padding-left: 5%;
    }
`;

export default function Home() {
    return (
        <main>
            <h2>Home</h2>

            <StyledHome>
                <img src="/images/headshot.jpg" alt="Jayden Park"/>

                <div>
                    <p>
                        My name is Jayden Park, and I am a fourth year student at Boston University
                        studying Computer Science and Economics. I was born in Santa Clara, California, and I
                        have lived there my entire life. Here you can find out about my experience,
                        as well as other information that may interest you. Feel free to take a look!
                    </p>
                </div>
            </StyledHome>
        </main>
    );
}