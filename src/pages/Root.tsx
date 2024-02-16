import '../styles/root.css'
import AboutHeader from "./AboutHeader"
import TechnicalSkills from "./TechnicalSkills"
import WorkHistory from "./WorkHistory"
import Contact from "./Contact"

const Root = () => {
    const handleLinkClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    const DesktopNav = () => {
        return (
            <>
                <div id='nav-item-container'>
                    <div className="nav-item" onClick={() => handleLinkClick('tech-stack')}>Stack</div>
                    {/* <div className="nav-item" onClick={() => handleLinkClick('projects')}>Projects</div> */}
                    <div className="nav-item" onClick={() => handleLinkClick('work-history')}>History</div>
                    <div className="nav-item" onClick={() => handleLinkClick('contact')}>Contact</div>
                </div>
            </>
        )
    }

    return (
        <>

            <div id='about-header'>
                <AboutHeader />
            </div>
            <div id="navcontainer">
                <DesktopNav />
            </div>
            <div id="components">
                <div id="tech-stack"></div>
                <TechnicalSkills />
                {/* <div id="projects"></div>
                <Projects /> */}
                <div id="work-history"></div>
                <WorkHistory />
                <div id="contact"></div>
                <Contact />
            </div>
        </>
    )
}

export default Root