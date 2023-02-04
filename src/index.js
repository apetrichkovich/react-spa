import React from "react";
import Main from "./Main";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";

const root = ReactDOMClient.createRoot(
    document.getElementById('root')
);

root.render(<Main/>);
