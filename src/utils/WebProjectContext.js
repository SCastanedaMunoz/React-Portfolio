import React from "react";

const WebProjectContext = React.createContext({
    current: "about",
    title: "",
    link_deploy: "",
    link_github: "",
    screenshot: "",
    summary: "",
    proExpPage: <></>,
    onBootCampDropDownClick: () => undefined,
    onProExpDropDownClick: () => undefined,
    onAboutClick: ()=> undefined
});

export default WebProjectContext;