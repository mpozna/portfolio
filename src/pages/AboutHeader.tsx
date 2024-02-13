import Bitmoji from '../images/bitmoji.png'
import SocialMediaTemp from '../images/social-media-temp.png'
import '../styles/about.css'
import LinkedIn from '../images/linkedin.png'
import { Button, Icon, SvgIcon, useMediaQuery } from '@mui/material'

const Title = () => {
    const media = useMediaQuery('(max-width:600px)')

    return (
        <div id='container'>
            <div id='header-container'>
                <p id='header'>Hi I'm Mike!</p>
                <p id='subheader'>Full Stack Developer</p>
                <div id='resume-button-container'>
                    <Button id='resume-button' variant='contained' color='primary' size={media ? 'small' : 'large'} href='src/Documents/Resume_Jan2023.pdf' download={true}>Download Resume</Button>
                </div>
            </div>
            <div id='image-container'>
                <img id='bitmoji' src={Bitmoji} />
            </div>
        </div>
    )
}

export default Title