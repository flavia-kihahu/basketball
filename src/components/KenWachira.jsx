import coach from "../assets/ken_wachira.png";
import "./kenWachira.css";

export default function KenWachira() {
    return (
        <div className="profile">
            <div className="left-panel">
                <div className="hero">
                    <img src={coach} alt="Ken Wachira" />
                    <div className="overlay">
                        <h1>Ken Wachira</h1>
                    </div>
                </div>
                <div className="bio">
                    <h2>BASKETBALL COACH</h2>
                    <h3>About Ken</h3>
                    <p>Meet Ken Wachira, a basketball strategist known for his quick decision-making and game-reading abilities. 
                        His coaching style emphasizes enhancing court vision and predicting opponents' moves.
                        Gain exclusive insights into basketball tactics and honing your 3-point game with Ken Wachira, the maestro behind the arc.</p>
                    <blockquote>"Read the game, own the court."</blockquote>
                </div>
            </div>
            <div className="right-panel">
                <section>
                    <div className="section-title">
                        <h4>DECISIVE MOVES SPECIALIST</h4>
                        <div className="line"></div>
                    </div>
                    <h5>Strength</h5>
                    <p>Strategic Vision & Quick Decision-Making & 3-Point Shooting</p>
                    <h5>Expertise</h5>
                    <p>Reading the game, making decisive moves, excellent 3-point shooting.</p>
                </section>

                <section>
                    <div className="section-title">
                        <h4>VISIONARY INSIGHTS</h4>
                        <div className="line"></div>
                    </div>
                    <h5>Coaching Focus</h5>
                    <p>Improving court vision, anticipating oppponent moves</p>
                    <h5>Main Focus</h5>
                    <ul className="points">
                        <li>Tactical insights</li>
                        <li>Rapid decision-making drills</li>
                    </ul>
                </section>

                <section>
                    <div className="section-title">
                        <h4>TRAINING POSITIONS</h4>
                        <div className="line"></div>
                    </div>
                    <h5>Main Focus</h5>
                    <ul className="points">
                        <li>Point Guards</li>
                        <li>Small Forwards</li>
                        <li>Team strategists</li>
                    </ul>
                    <h5>Also</h5>
                    <ul className="points">
                        <li>Trains all basketball Positions</li>
                    </ul>
                </section>

                <section>
                    <div className="section-title">
                        <h4>ACCOLADES</h4>
                        <div className="line"></div>
                    </div>
                    <p>
                        <span className="awards">MVP 2022</span>, renowned for exceptional 3-point shooting skills.</p>
                </section>
            </div>
        </div>
    );
}