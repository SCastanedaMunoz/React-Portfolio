import { Container, Row, Col } from "../../components/Grid";
// import "./style.css";
import MatchMakerTool from "../../images/game_dev/matchmaker/matchmaker_tool.gif";
import MatchMakerLevelSelection from "../../images/game_dev/matchmaker/matchmaker_levelselection.gif";

function MatchMaker() {

    return (<Container classes="special-container">

        <Row>
            <header><h2>Match Maker!</h2></header>
            <hr />

            <header><h2>Video</h2></header>
            <hr />
            <div className="video-container">
                <iframe src="https://www.youtube.com/embed/XIQRE62IohY"
                    title="Match Maker"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>

            <hr />
            <header><h2>Summary</h2></header>
            <hr />

            <p>Match Maker is a 2D Top-Down Mobile Puzzle game in which player's objective is to match all animals of the same type while avoiding different animals to match together. Differently, from other matching games, Match Maker presents the players a dynamic experience. Each animal moves on a specific pattern, and if it collides with another animal of the same color it will make a match. However, if the animals have different colors they will bounce in the opposite direction.            </p>
            <br />
            <p>The idea was created by the team leader while doing a school project. After graduation, we decided we wanted to improve the game further, so we found two artists and one musician. We started to work on Match Maker at the beginning of April and by the end of the month, all mechanical parts of the game were already completed. After having players help us test the game, we focusing on balancing the game. During the next few months, we had a lot of meetings to discuss how we wanted the art to be, and what would be the theme for the game.</p>
            <br />
            <p>We are really happy to work as a team. We are all international students who just graduated from Full Sail University, but we all love making games and we are willing to dedicate all our time and energy to the career we love. It is a great experience to work with people who have high efficiency!</p>

            <hr />
            <header><h2>Details</h2></header>
            <hr />

            <p>I took the role of the main programmer for Match Maker; thanks to this I was involved in the creation of most of the mechanics. Although some things were already developed when I started working on the project, most of them had to be reconstructed since our goal was to publish the game on mobile.</p>
            <br />
            <p>Since the beginning of April, I started to learn how to create games for mobile platforms. Due to this, I had to learn a lot of aspects of optimization and how to properly use the resources provided by phones. In the first two months, most functionality was already completed. This included character movement, scenes transition, saving data, stars and rewards, level selection, etc.</p>
            <br />
            <p>Additional to these aspects, I was also in charge of creating tools and to ease the development cycle. as a result, I created a tool that allowed us to drag and plays waypoints for the characters, these waypoints would setup automatically after starting the game. As can be seen in the following GIF.</p>
            <br />
            <div className="game-icon"><img className="responsive-img" src={MatchMakerTool} alt="Matchmaker Tooling" /></div>
            <br />
            <p>Although I was the only person creating code for the game, it became necessary to maintain my scripts organized and easy to understand so the other members of the team could easily understand how and where to use them. One example of this was the level selection menu since it needs to be a flexible element in case we add more levels. As a result, I created a system which allows the developers to easily add more levels to the menu and they will update automatically on the run.</p>
            <br />

            <div className="game-icon"><img className="responsive-img" src={MatchMakerLevelSelection} alt="Matchmaker Level Selection" /></div>
            <br />
            <div className="video-container">
                <iframe src="https://www.youtube.com/embed/lfX6Kor1A74"
                    title="Match Maker Level Selection"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <br />
            <p>Another area I took on development was the creation of a tutorial for the players. This helped me to learn about sequential events and how to properly introduce mechanics to the players. Due to this addition, it became easier for the developer team to communicate with the players when certain events occur.</p>
            <br />

            <div className="video-container">
                <iframe src="https://www.youtube.com/embed/aBI5PasckGU"
                    title="Match Maker Level Selection"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <br />
            <p>These are some of the areas that I had to develop for the game, although there is many more these are very important areas that show how the game was done and what solutions I implemented to create the desired behaviors.</p>
            <br />

            <hr />
            <header><h2>Links</h2></header>
            <hr />

            <Col size="m6">
                <div className="game-icon">
                    <button className="waves-effect waves-light btn" name="action"><a href="https://apps.apple.com/us/app/match-maker-the-video-game/id1432339994" target="_blank" rel="noreferrer">AppStore</a></button>
                </div>
            </Col>
            <Col size="m6">
                <div className="game-icon">
                    <button className="waves-effect waves-light btn" name="action"><a href="https://play.google.com/store/apps/details?id=com.MatchMakerDevelopmentTeam.MatchMakerTheVideoGame" target="_blank"  rel="noreferrer">Google Play</a></button>
                </div>
            </Col>

        </Row>
    </Container>);
}

export default MatchMaker;