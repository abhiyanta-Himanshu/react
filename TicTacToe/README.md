# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



The reason why you can't write the return statement as:
```return 
(
    <>
    <h2>Tic Tac Toe </h2>
    </>
)
```
is due to the way JavaScript and JSX handle multi-line expressions.
In JavaScript, when you have a return statement followed by a new line, the JavaScript engine automatically inserts a semicolon (;) after the return statement. This is known as Automatic Semicolon Insertion (ASI).

So, the code you provided is interpreted by the JavaScript engine as:
```
return;
(
    <>
    <h2>Tic Tac Toe </h2>
    </>
)
```

The return statement is now followed by a semicolon, and the rest of the code is treated as a separate expression, which is not what you intended.
To fix this, you need to wrap the JSX expression in curly braces {} immediately after the return statement, like this: