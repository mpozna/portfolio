import '../styles/contact.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Alert, Button, Snackbar, SnackbarOrigin, TextField, useMediaQuery } from '@mui/material';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

interface SnackState extends SnackbarOrigin {
  open: boolean,
  severity: string | null,
}

const Contact = () => {
  const media = useMediaQuery('(max-width:600px)')

  const form = useRef()

  const [snackState, setSnackState] = useState<SnackState>({
    open: false,
    vertical: 'bottom',
    horizontal: 'left',
    severity: null
  })

  const { vertical, horizontal, open } = snackState;

  const handleClose = () => {
    setSnackState({ ...snackState, open: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          setSnackState({ vertical, horizontal, open: true, severity: 'success' });
        },
        (error) => {
          setSnackState({ vertical, horizontal, open: true, severity: 'error' });
        },
      );
  };

  return (
    <div>
      <p id="title">Contact Me</p>
      <div id="contact-container">
        <div id='contact-info'>
          <div id='contact-info-text-container'>
            <div className='contact-item'>
              <a href='tel:4405912083' className='clickable-icon'><PhoneIcon fontSize='medium' /></a>
              <p>440.591.2083</p>
            </div>
            <div className='contact-item'>
              <a href='mailto:michael.pozna@gmail.com' className='clickable-icon'><EmailIcon fontSize='medium' /></a>
              <p>michael.pozna@gmail.com</p>
            </div>
            <div className='contact-item'>
              <a href='https://www.linkedin.com/in/michaelpozna' target='_blank' className='clickable-icon'><LinkedInIcon fontSize='medium' /></a>
              <p>linkedin.com/in/michaelpozna</p>
            </div>
            <div className='contact-item'>
              <a href='https://www.github.com/mpozna' target='_blank' className='clickable-icon'><GitHubIcon fontSize='medium' /></a>
              <p>github.com/mpozna</p>
            </div>
          </div>
        </div>

        <div id='submit-message-container'>
          <form ref={form} onSubmit={sendEmail}>
            <div id='inputs-container'>
              <TextField className='contact-form-input' name='firstName' id='first-name' label='First Name' variant='outlined' size='small' fullWidth={media ? true : false} />
              <TextField className='contact-form-input' name='lastName' id='last-name' label='Last Name' variant='outlined' size='small' fullWidth={media ? true : false} />
              <TextField className='contact-form-input' name='phone' id='phone' label='Phone' variant='outlined' size='small' fullWidth={media ? true : false} />
              <TextField className='contact-form-input' name='email' id='email' label='Email' variant='outlined' size='small' fullWidth={media ? true : false} />
              <TextField className='contact-form-input' name='message' id='message' label='Message' variant='outlined' multiline rows={4} size='small' fullWidth />
              <Button onClick={e => sendEmail(e)} className='button' color='primary' variant='contained' size='small' fullWidth>Submit</Button>
            </div>
          </form>
        </div>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={snackState.severity}>
            {snackState.severity == 'success' ? 'Message sent' : 'Something went wrong'}
          </Alert>
        </Snackbar>
      </div>
    </div>
  )
}

export default Contact