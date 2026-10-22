import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./components/mains/Home";
import Education from "./components/mains/Education";
import Experience from "./components/mains/Experience";
import Leadership from "./components/mains/Leadership";
import Projects from "./components/mains/Projects";
import Awards from "./components/mains/Awards";


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Georgia, "Times New Roman", serif;
        font-size: calc(14px + 0.5vw);
    }
`;

const PageWrapper = styled.div`
    background-color: silver;
    width: 80%;
    margin: 0 auto;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    main {
        width: 70%;
        background-color: silver;
        font-size: calc(2px + 1.5vw);
        text-align: left;
        padding: 3%;
    }

    main h2 {
        color: royalblue;
        text-align: center;
        margin-bottom: 20px;
    }

    main h3 {
        color: royalblue;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    main p {
        line-height: 1.5;
        margin-bottom: 15px;
    }

    main ul {
        padding-left: 25px;
        margin-bottom: 15px;
    }

    main li {
        margin-bottom: 10px;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;

        main {
            width: 100%;
        }
    }
    
`;

export default function Root() {
    return (
        <>
            <GlobalStyle />

            <PageWrapper>
                <Header />

                <Container>
                    <Nav />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/leadership" element={<Leadership />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/awards" element={<Awards />} />
                    </Routes>
                </Container>

                <Footer />
            </PageWrapper>
        </>
    );
}