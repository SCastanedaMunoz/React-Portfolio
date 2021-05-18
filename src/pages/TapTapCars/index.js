import { Container, Row, Col } from "../../components/Grid";
// import "./style.css";
import MatchMakerTool from "../../images/game_dev/matchmaker/matchmaker_tool.gif";
import MatchMakerLevelSelection from "../../images/game_dev/matchmaker/matchmaker_levelselection.gif";

function MatchMaker() {

    return (<Container classes="special-container">

        <Row>
            <header><h2>TapTapCars: Traffic Cars!</h2></header>
            <hr />

            <header><h2>Video</h2></header>
            <hr />
            <div className="video-container">
                <iframe src="https://www.youtube.com/embed/dPyMorOLmF8"
                    title="TapTapCars: Traffic Jam!"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

            <hr />
            <header><h2>Summary</h2></header>
            <hr />

            <p>TapTapCars: TrafficJam! is a 2D Top-Down Mobile Puzzle game in which player's objective is to manage traffic without causing a collision!. Differently, from traffic management games, TapTapCars allows users to individually manage each car in the environment, allowing them to pause, speed up, and boost. Players are presented with a multitude of obstacles besides just cars, the weather is also a factor! This means players can encounter snow, which makes their car stop with a delay. Eventually, they will encounter pedestrians which they need to avoid and protect in order to pass the level!</p>


            <hr />
            <header><h2>Details</h2></header>
            <hr />

            <p>For TapTapCars I took the role of the main programmer; thanks to this I was involved in the creation of all mechanics. Additionally, besides the creation of all game development mechanics, I integrated all of the different SDKs and platform tools required for this game. I used tools such as Firebase, IronSource, AdMob, etc.</p>
            <br />
            <p>More Tech details will be coming up soon, and will be posted here.</p>
          
            <hr />
            <header><h2>Links</h2></header>
            <hr />

            <Col size="m6">
                <div className="game-icon">
                    <button className="waves-effect waves-light btn" name="action"><a href="https://apps.apple.com/app/id1469652461" target="_blank" rel="noreferrer">AppStore</a></button>
                </div>
            </Col>
            <Col size="m6">
                <div className="game-icon">
                    <button className="waves-effect waves-light btn" name="action"><a href="https://play.google.com/store/apps/details?id=com.mmdt.taptapcars&hl=en" target="_blank"  rel="noreferrer">Google Play</a></button>
                </div>
            </Col>

        </Row>
    </Container>);
}

export default MatchMaker;