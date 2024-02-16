import Bitmoji from '../images/bitmoji.png'
import '../styles/about.css'
import { Button, useMediaQuery } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Title = () => {
    const mobile = useMediaQuery('(max-width:800px)')

    const DesktopView = () => {
        return (
            <div id='container'>
                <div id='header-container'>
                    <p id='header'>Hi, I'm Mike!</p>
                    <p id='subheader'>Full Stack Developer</p>
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
                </div>
                <div id='image-container'>
                    <img id='bitmoji' src={Bitmoji} />
                </div>
                <Button id='resume-button' variant='contained' href='./Mike_Pozna_Resume.pdf' download={true}>
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