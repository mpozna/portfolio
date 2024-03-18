import Bitmoji from '../images/bitmoji.png'
import '../styles/about.css'
import { Button, Typography, useMediaQuery } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Title = () => {
    const mobile = useMediaQuery('(max-width:800px)')

    const DesktopView = () => {
        return (
            <div id='container'>
                <div id='header-container'>
                    <p id='header'>Hi, I'm Mike!</p>
                    <p id='subheader'>Full Stack Developer</p>
                    <Typography fontSize={'12pt'} align='justify'>
                        Versatile developer passionate about creating intuitive, user-friendly applications that meet the needs of my clients and users.
                        Continuously pursuing fresh challenges and avenues for professional development to further refine my skills and expertise.
                    </Typography>
                    <Button id='resume-button' variant='contained' size='large' href='src/Documents/Mike_Pozna_Resume.pdf' download={true}>
                        Download Resume <FileDownloadIcon id='download-icon' />
                    </Button>
                </div>
                <div id='image-container'>
                    <img id='bitmoji' src={Bitmoji} />
                </div>
            </div>
        )
    }

    const MobileView = () => {
        return (
            <div id='container'>
                <div id='header-container'>
                    <p id='header'>Hi, I'm Mike!</p>
                    <p id='subheader'>Full Stack Developer</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography id='description'>
                            Versatile developer passionate about creating intuitive, user-friendly applications that meet the needs of my clients and users.
                            Continuously pursuing fresh challenges and avenues for professional development to further refine my skills and expertise.
                        </Typography>
                    </div>
                </div>
                <div id='image-container'>
                    <img id='bitmoji' src={Bitmoji} />
                </div>
                <Button id='resume-button' variant='contained' href='src/Documents//Mike_Pozna_Resume.pdf' download={true}>
                    Download Resume <FileDownloadIcon id='download-icon' />
                </Button>
            </div>
        )
    }

    return (
        mobile ? <MobileView /> : <DesktopView />
    )
}

export default Title