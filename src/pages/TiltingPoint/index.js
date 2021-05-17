import { Container, Row } from "../../components/Grid";
import "./style.css";
import SpongeBobKrustyCookOff from "../../images/por_exp/tiltingpoint/SpongeBobKrustyCookOff.png";
import TerraGenesis from "../../images/por_exp/tiltingpoint/terragenesis.png";
import Zombieland from "../../images/por_exp/tiltingpoint/zombieland.png";

function TiltingPoint() {

    return (<Container id="tiltingpoint-container">

        <Row>
            <header><img src="https://cdn-tiltingpoint-website.tiltingpoint.io/static/logo.svg" alt="Tilting Point Media LLC" /></header>
            <hr />
            <p>I have been working at Tilting Point Media since March 2019; there, I have been in the role of Client Engineer supporting all of the games that include the Tilting Point SDK.
            I have been directly involved in the development and production of the Tilting Point SDK. Taking it from a monolithic legacy unity package, to a easily distributable package based SDK, where developers only need to integrate the features they need.
            Such features can include the following:
            </p>
            <ul>
                <li><i class="tiny material-icons">chevron_right</i>Analytics (Amplitude, Adjust, AppsFlyer, Leanplum, etc.)</li>
                <li><i class="tiny material-icons">chevron_right</i>Customer Support (Helpshift)</li>
                <li><i class="tiny material-icons">chevron_right</i>Live Ops (Leanplum, Swrve)</li>
                <li><i class="tiny material-icons">chevron_right</i>Adtervising (AdMob, IronSource, Vungle)</li>
                <li><i class="tiny material-icons">chevron_right</i>CI/CD (GitHub Actions, Jenkins)</li>
                <li><i class="tiny material-icons">chevron_right</i>Purchasing (Unity IAP, Google Billing Library)</li>
            </ul>

            <p>
             Due to the nature of the job, I have had the opportunity to learn no only Unity Game Development practices with C#, but I have had deep development cycles with more languages, such as: Java, C++, Objective-C, YAML, etc.
             Also, during this time I have also learned about full stack web development, so I have had experience with JavaScript, React, MongoDB, SQL, etc.   
            </p>

            <br/>
            <p>Whilst working at Tilting Point Media, I have contributed to the production, development and support of multiple games. As such, I have been able to experience all the multiple steps a game can go through, from alpha and prototyping, to closed betas and selected publishing, to full on global releases.
            Some of the best games I have been involved can be seen below.
            </p>
            <hr />
            <div className="game-icon"><img className="icon" src={SpongeBobKrustyCookOff} alt="SpongeBob Krusty Cook Off" /></div>

            <h3>Game Trailer</h3>
            <hr />
            <div className="video-container">
                <iframe src="https://www.youtube.com/embed/j-1W0IIkYYw"
                    title="SpongeBob: Krusty Cook-Off – Official Trailer"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <hr />

            <div className="game-icon"><img className="icon" src={TerraGenesis} alt="SpongeBob Krusty Cook Off" /></div>

            <h3>Game Trailer</h3>
            <hr />
            <div className="video-container">
                <iframe src="https://www.youtube.com/embed/dPyyDXc3hFs"
                    title="TerraGenesis 5.0 Trailer"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <hr />

            <div className="game-icon"><img className="icon" src={Zombieland} alt="Zombieland" /></div>

            <h3>Game Trailer</h3>
            <hr />
            <div className="video-container">
                <iframe src="https://www.youtube.com/embed/X8D6mTx_UaI"
                    title="Zombieland AFK Survival"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <hr />
        </Row>
    </Container>);
}

export default TiltingPoint;