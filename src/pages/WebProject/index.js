import { Container, Row, Col } from "../../components/Grid";
import "./style.css"

function WebProjectPage({ title, link_deploy, link_github, screenshot, summary }) {

    return (
        <Container>
            <Row>
                <Col size="m6" classes="offset-m3" id="web-project">
                    <header><h2>{title}</h2></header>
                    <div className="image-container">
                        <img src={screenshot} alt={title} className="responsive-img screenshot" />
                    </div>

                    <p>{summary}</p>

                    <Row classes="button-row">
                        <Col size="s6" classes="see-more">
                            <a href={link_deploy} rel="noreferrer" target="_blank" className="proj-btn waves-effect waves-dark btn"><i className="material-icons right">web</i>See App!</a>
                        </Col>
                        <Col size="s6" classes="see-more">
                            <a href={link_github} rel="noreferrer" target="_blank" className="proj-btn waves-effect waves-dark btn"><i className="material-icons right">code</i>See Code!</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default WebProjectPage;