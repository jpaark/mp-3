import { useState } from "react";
import styled from "styled-components";

const StyledCalc = styled.div`
    background-color: whitesmoke;
    border: 5px solid royalblue;
    padding: 5%;
    margin-top: 25px;

    label {
        display: block;
        margin-top: 15px;
    }

    input {
        box-sizing: border-box;
        width: 100%;
        padding: 8px;
        margin: 10px 0;
        font-size: calc(14px + 0.5vw);
    }

    button {
        background-color: royalblue;
        color: white;
        border: 2px solid royalblue;
        padding: 10px;
        margin: 5px;
        font-size: calc(14px + 0.5vw);
    }

    p {
        background-color: silver;
        padding: 10px;
        margin-top: 15px;
        font-size: calc(16px + 0.5vw);
    }

    @media screen and (max-width: 750px) {
        padding: 3%;

        button {
            padding: 8px;
            margin: 3px;
        }
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function Calc() {
    const [output, setOutput] = useState("");

    function calculate(operation: string) {
        const inputs = document.getElementsByTagName("input");
        const first = Number(inputs[0].value);
        const second = Number(inputs[1].value);

        let answer = 0;

        if (operation === "+") {
            answer = first + second;
        } else if (operation === "-") {
            answer = first - second;
        } else if (operation === "*") {
            answer = first * second;
        } else if (operation === "/") {
            if (second === 0) {
                answer = second;
            } else {
                answer = first / second;
            }
        } else if (operation === "**") {
            answer = 1;

            let factor = first;

            if (second < 0) {
                factor = 1 / first;
            }

            for (let i = 0; i < second; i++) {
                answer = answer * factor;
            }
        } else {
            return;
        }

        setOutput(String(answer));
    }

    function clear() {
        const inputs = document.getElementsByTagName("input");
        inputs[0].value = "";
        inputs[1].value = "";
        setOutput("");
    }

    return (
        <StyledCalc>
            <h2>Fun Calculator</h2>

            <label htmlFor="first-number">First Number:</label>
            <input id="first-number" type="number"/>

            <label htmlFor="second-number">Second Number:</label>
            <input id="second-number" type="number"/>

            <Buttons>
                <button onClick={() => calculate("+")}>+</button>
                <button onClick={() => calculate("-")}>-</button>
                <button onClick={() => calculate("*")}>*</button>
                <button onClick={() => calculate("/")}>/</button>
                <button onClick={() => calculate("**")}>**</button>
                <button onClick={clear}>Clear</button>
            </Buttons>

            <p style={{ color: Number(output) < 0 ? "red" : "black"}}>{output}</p>
        </StyledCalc>
    );
}