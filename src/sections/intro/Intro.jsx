import facePort from "../../assets/facePort.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import handshakeDark from "../../assets/handshake-dark.png"
import linkedinLight from "../../assets/linkedin-light.svg";
import githubLight from "../../assets/github-light.svg";
import handshakeLight from "../../assets/handshake-light.png"
import styles from "./IntroStyles.module.css";
import resume from "../../assets/Evan Resume Software.pdf"
import { useTheme } from "../../common/ThemeContext";

function Intro() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const handshakeIcon = theme === 'light' ? handshakeLight : handshakeDark;
    return (
        <section id="intro" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.intro}
                    src={facePort}
                    alt="Profile picture" />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Evan
                    <br />
                    Duncan
                </h1>
                <h2>Software Engineer</h2>
                <span>
                    <a href="https://www.linkedin.com/in/evan-duncan-041662227/" target="blank">
                        <img src={linkedinIcon} alt="linkedin icon" />
                    </a>
                    <a href="https://github.com/eduncan16" target="blank">
                        <img src={githubIcon} alt="github icon" />
                    </a>
                    <a href="https://app.joinhandshake.com/profiles/20223918" target="blank">
                        <img src={handshakeIcon} alt="handshake icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    I am a  developer with a strong foundation in object-oriented programming
                    with a degree in Software Engineering from Loyola University Chicago.
                    I have experiance in Java, Python, and JavaScript. I am eager to apply
                    these skills in a professional environment to make real impacts on the
                    world.
                </p>
                <a href={resume} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>

        </section>
    )
}

export default Intro;
