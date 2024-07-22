import { css } from "@emotion/react"

export const layout = css`
    box-sizing: border-box;
    border-right: 1px sollid #dbdbdb;
    width: 200px;
    height: 100%;
    background-color: #ffffff;
`;

export const list = css`
    height: 100%;
`

export const listItem = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    padding: 10px 40px;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #dbdbdb;
    }

`

export const itemText = css`
    margin-left: 10px;
`