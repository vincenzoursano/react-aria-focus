# React Aria Focus with Iframes

This project is a proof of concept to demonstrate and solve an issue with `react-aria-components`'s Modal when interacting with elements outside of an iframe.

## Motivation

When using `react-aria-components`'s Modal, it traps the focus within the modal, which is the expected behavior for accessibility. However, when the modal is displayed inside an iframe, it also prevents interaction with elements outside the iframe. This is because the focus is trapped within the iframe's document.

This project explores different ways to solve this issue, allowing elements outside the iframe to be focused even when the modal is open.

## Description

The project consists of a main page that displays three iframes, each demonstrating a different scenario:

*   **Default:** This page uses the default `Modal` from `react-aria-components`. When the modal is open, it's not possible to focus on the input field on the main page.
*   **Custom Modal:** This page uses a custom `Modal` component that has been modified to allow focus on elements outside the iframe.
*   **Workaround:** This page uses a workaround that involves disabling the focus containment of the modal by stopping the propagation of `keydown`, `focusin`, and `focusout` events.

## How to run

1.  Install the dependencies:
    ```bash
    bun install
    ```
2.  Start the development server:
    ```bash
    bun run dev
    ```
3.  Open the browser and navigate to `http://localhost:5173/`.