import { css } from "@emotion/react";

export const container = (width, height) => css`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
border: 1px solid #dbdbdb;
width: ${width}px;
height: ${height}px;
`; // emotion 문법

export const container2 = css`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
border: 1px solid #dbdbdb;
width: 50%;
height: 50%;
`; // emotion 문법

export const container3 = css`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
border: 1px solid #dbdbdb;
width: 50%;
height: 50%;
`; // emotion 문법

export const container4 = css`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
border: 1px solid #dbdbdb;
width: 50%;
height: 50%;
cursor: pointer;
`; // emotion 문법