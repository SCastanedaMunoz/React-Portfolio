import M from "materialize-css";
import "./style.css";
import navContents from "./contents";
import { NAV_TYPE_PAGE, NAV_TYPE_ICON, NAV_TYPE_BOOTCAMP_DROPDOWN, NAV_TYPE_PAGE_DROPDOWN } from "../../utils/constants";
import { NavPage, NavIcon, BootcampNavDropdown, PageNavDropdown } from "../NavItems";

function fillNavElement(location) {
    let path = window.location.pathname;
    let currentPage = path.split("/").pop();

    return navContents.map(item => {
        switch (item.type) {
            case NAV_TYPE_PAGE:
                return <NavPage
                    key={item.text}
                    currentPage={currentPage}
                    link={item.link}
                    target={item.target}
                    text={item.text}>
                </NavPage>;
            case NAV_TYPE_ICON:
                return <NavIcon
                    key={item.text}
                    location={location}
                    link={item.link}
                    text={item.text}
                    icon_dark={item.icon_dark}
                    icon_light={item.icon_light}
                    icon={item.icon}
                ></NavIcon>;
            case NAV_TYPE_PAGE_DROPDOWN:
                return <PageNavDropdown
                    location={location}
                    link={item.link}
                    text={item.text}
                    drop_content={item.drop_content}
                    >
                </PageNavDropdown>
            case NAV_TYPE_BOOTCAMP_DROPDOWN:
                return <BootcampNavDropdown
                    key={item.text}
                    text={item.text}
                    location={location}
                    link={item.link}
                    title={item.title}
                    drop_content={item.drop_content}
                >
                </BootcampNavDropdown>
            default:
                return (<></>);
        }
    });
}

function Nav() {

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {hover:false});
    });

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/React-Portfolio" className="brand-logo">SCastanedaMunoz</a>
                <a href="#!" data-target="mobile-sidenav" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down">{fillNavElement("nav")}</ul>
            </div>
            <ul className="sidenav" id="mobile-sidenav">{fillNavElement("side")}</ul>
        </nav>);
}

export default Nav;