import '../styles/root.css'
import AboutHeader from "./AboutHeader"
import TechnicalSkills from "./TechnicalSkills"
import Projects from "./Projects"
import WorkHistory from "./WorkHistory"
import Contact from "./Contact"
import { Button, Menu, MenuItem, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'

const Root = () => {
    const media = useMediaQuery('(min-width:600px)')

    const handleLinkClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    const DesktopNav = () => {
        return (
            <>
                <div id='signature-container'>
                    <div className="nav-item" onClick={() => handleLinkClick('about-header')}><p id="signature">Mike Pozna</p></div>
                </div>
                <div id='nav-item-container'>
                    <div className="nav-item" onClick={() => handleLinkClick('tech-stack')}>Tech Stack</div>
                    {/* <div className="nav-item" onClick={() => handleLinkClick('projects')}>Projects</div> */}
                    <div className="nav-item" onClick={() => handleLinkClick('work-history')}>Professional History</div>
                    <div className="nav-item" onClick={() => handleLinkClick('contact')}>Contact</div>
                </div>
            </>
        )
    }

    const MobileNav = () => {
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);

        const handleClose = () => {
            setAnchorEl(null);
        };

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const handleMobileLinkClick = (id: string) => {
            setAnchorEl(null)
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }

        return (
            <>
                <div className="nav-item" onClick={() => handleLinkClick('about-header')}>
                    <p id="signature">Mike Pozna</p>
                </div>
                <MenuIcon
                    id="hamburger-icon"
                    onClick={handleClick}
                />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => handleMobileLinkClick('tech-stack')}>Tech Stack</MenuItem>
                    <MenuItem onClick={() => handleMobileLinkClick('work-history')}>Professional History</MenuItem>
                    <MenuItem onClick={() => handleMobileLinkClick('contact')}>Contact</MenuItem>
                </Menu>
            </>
        )
    }

    return (
        <>
            <div id="navcontainer">
                {media ? <DesktopNav /> : <MobileNav />}
            </div>
            <div id="components">
                <div id="about-header"></div>
                <AboutHeader />
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