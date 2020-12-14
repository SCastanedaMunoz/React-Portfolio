import "materialize-css/dist/css/materialize.min.css";
import "./style.css";
import { Container, Row, Col } from "../../components/Grid";
import profile from "../../images/Profile.png";

function AboutPage() {

    return (
        <Container>
            <Row>
                <Col id="about" size="m5">
                    <div className="image-container">
                        <img src={profile} alt="Profile" className="responsive-img" />
                    </div>

                    <p>Welcome to my new Website! This time coded and arranged all by myself!</p>

                    <p>Also, here is a video of my last published project, TapTapCars: Traffic Jam! it is available on Android and iOS platforms.</p>

                    <div className="video-container">
                        <iframe title="TapTapCars: Traffic Jam!" src="https://www.youtube.com/embed/dPyMorOLmF8" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                </Col>

                <Col id="info" size="m5" classes="offset-m1">
                    <header>
                        <h1>About Me</h1>
                    </header>
                    <hr/>
                        <p>Hi there! Welcome to my Website, I am a Software Engineer working for Tilting Point Media LLC, based in
                        Austin, Texas. I am familiar in many programming languages, such as Java, C#, Objective-C, C++, Python, JavaScript, HTML, CSS, and Unity Game Engine.</p>
                        <p>I spend most of my time, 60 - 70 hours a week programming and learning new things. Most of the time I
                        focus on game development, other times I like to learn about computer science and programming itself. Cool fact! I am enrolled in UT Austin on a Full Stack Web Development Bootcamp!</p>
                        <p>From an early age, I started to all type of systems, games, and technology, no matter the language or presentation. This helped me to expand and find my likes and dislikes as a developer.</p>
                        <p>My first attempt to create game content was backin the day using map editors in video games, such as Age
                        of Empires, or Age of Mythology. These experiences defined my aspirations for the following years. Later
                        on, I discovered Unity and UE4 but due to the lack of equipment and knowledge could not get started on them until I pursued my Bachelor's degree.</p>
                        <p>Although programming, Video Games and learning are a key aspects of my life, I believe everything in life
                        is influential. From an early age, I learned to play multiple musical instruments, like Piano and Guitar. Thus, music is very important in my life.</p>
                </Col>
            </Row>
        </Container>

    );
}

export default AboutPage;