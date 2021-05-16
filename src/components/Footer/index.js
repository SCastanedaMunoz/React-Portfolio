import "./style.css"
import { Container } from "../Grid";

function Footer() {
    return (
        <footer className="page-footer">
            <Container>
                <h5 className="footer-name">Santiago Castaneda Munoz</h5>
                <h6 className="footer-margin"><a className="footer-text" href="mailto:santiagocm98@hotmail">santiagocm98@hotmail.com</a></h6>
                <h6 className="footer-margin"><a className="footer-text" href="tel:4079212365">+1 (407)-921-2365</a></h6>
            </Container>
            <div className="footer-copyright">
                <Container>
                    <p className="footer-text">Copyright © 2020</p>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;