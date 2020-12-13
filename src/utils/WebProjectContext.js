import React from "react";

const WebProjectContext = React.createContext({
    current: "about",
    title: "",
    link_deploy: "",
    link_github: "",
    screenshot: "",
    summary: "",
    onDropDownClick: () => undefined,
    onAboutClick: ()=> undefined
});

export default WebProjectContext;