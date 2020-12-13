import { useContext } from "react";
import WebProjectContext from "../../utils/WebProjectContext";

export function NavPage({ currentPage, link, target, text }) {
    return <li>
        <a className={link === currentPage ? "active" : ""} href={link} target={target}>{text}</a>
    </li>;
}

export function NavIcon({ location, link, text, icon_dark, icon_light, icon}) {
    var selectedIcon =
    text === "GitHub"
        ? location === "side"
            ? icon_dark
            : icon_light
        : icon;

    return <li >
        <a href={link} rel="noreferrer" target="_blank"><img src={selectedIcon} alt={`${text} Social`} className={`social-icon-${location}`}></img></a>
    </li>;
}

export function NavDropdown({location, link, text, drop_content }) {
    let dropDownStruct = (<ul id={`${link}-${location}`} className="dropdown-content">
        {drop_content.map(dropItem => {
            return <DropDownItem 
            key={dropItem.title}
            title={dropItem.title}
            summary={dropItem.summary}
            path_screenshot={dropItem.path_screenshot}
            link_deploy={dropItem.link_deploy}
            link_github={dropItem.link_github}
            ></DropDownItem>
        })}
    </ul>);
    return (<li>
        <a className="dropdown-trigger" href="#!" data-target={`${link}-${location}`}><i className="material-icons right">arrow_drop_down</i>{text}</a>
        {dropDownStruct}
    </li>);
}

function DropDownItem({ title, link_deploy, link_github, summary, path_screenshot}){
    const webProject = useContext(WebProjectContext);
    return <li><a href="#!" onClick={()=> webProject.onDropDownClick(title, link_deploy, link_github, path_screenshot, summary)} className="dropdown-link">{title}</a></li>;
}