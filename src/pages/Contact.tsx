import '../styles/contact.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Alert, Button, Snackbar, SnackbarOrigin, TextField, styled, useMediaQuery } from '@mui/material';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

interface SnackState extends SnackbarOrigin {
  open: boolean,
  severity: string | null,
}

const Contact = () => {
  const media = useMediaQuery('(max-width:800px)')

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

  const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & input {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
      border-width: thin;
    }
  }
  & .css-12tl3rr-MuiInputBase-input-MuiOutlinedInput-input {
    color: white;
  }
`;

  return (
    <div>
      <p id="title">Contact Me</p>
      <div id="contact-container">
        <div id='contact-info'>
          <div id='contact-info-text-container'>
            <div className='contact-item'>
              <PhoneIcon htmlColor='white' fontSize='medium' />
              <a href='tel:4405912083' className='link'>440.591.2083</a>
            </div>
            <div className='contact-item'>
              <EmailIcon htmlColor='white' fontSize='medium' />
              <a href='mailto:michael.pozna@gmail.com' className='link'>michael.pozna@gmail.com</a>
            </div>
            <div className='contact-item'>
              <LinkedInIcon htmlColor='white' fontSize='medium' />
              <a href='https://www.linkedin.com/in/michaelpozna' target='_blank' className='link'>linkedin.com/in/michaelpozna</a>
            </div>
            <div className='contact-item'>
              <GitHubIcon htmlColor='white' fontSize='medium' />
              <a href='https://www.github.com/mpozna' target='_blank' className='link'>github.com/mpozna</a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div id='inputs-container'>
            <WhiteBorderTextField className='contact-form-input' name='firstName' id='first-name' label='First Name' variant='outlined' size='small' fullWidth={media ? true : false} InputLabelProps={{ style: { color: '#fff' } }} />
            <WhiteBorderTextField className='contact-form-input' name='lastName' id='last-name' label='Last Name' variant='outlined' size='small' fullWidth={media ? true : false} InputLabelProps={{ style: { color: '#fff' } }} />
            <WhiteBorderTextField className='contact-form-input' name='phone' id='phone' label='Phone' variant='outlined' size='small' fullWidth={media ? true : false} InputLabelProps={{ style: { color: '#fff' } }} />
            <WhiteBorderTextField className='contact-form-input' name='email' id='email' label='Email' variant='outlined' size='small' fullWidth={media ? true : false} InputLabelProps={{ style: { color: '#fff' } }} />
            <WhiteBorderTextField className='contact-form-input' name='message' id='message' label='Message' variant='outlined' multiline rows={4} size='small' fullWidth InputLabelProps={{ style: { color: '#fff' } }} />
            <Button onClick={e => sendEmail(e)} id='submit-button' variant='contained' size='small' fullWidth>Submit</Button>
          </div>
        </form>

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