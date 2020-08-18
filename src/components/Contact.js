import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../css/contact.css';

function Contact() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'primary.main',
    },
    button: {
      width: '300px',
      flexGrow: 1,
      fontFamily: 'Merriweather',
      fontSize: '15px',
      textTransform: 'uppercase',
    },
  }));

  const [sender, setSender] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const serverURL =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_SERVER_PRODUCTION
      : process.env.REACT_APP_SERVER_DEVELOPMENT;

  console.log('mode: ', process.env.NODE_ENV);

  console.log('server: ', serverURL);

  const deliver = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      name: sender,
      email: address,
      message: message,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${serverURL}/sendmail`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  const classes = useStyles();

  return (
    <>
      <div className="container">
        <div className="content960 col">
          <div id="NewChapter">contact me</div>

          <form onSubmit={deliver}>
            <div className="bg col" style={{ textAlign: 'center' }}>
              <div className="col">
                <div>
                  <input
                    value={sender}
                    onChange={(event) => setSender(event.target.value)}
                    // onChange={(event) => console.log(event.target.value)}
                    name="sender"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    name="address"
                    placeholder="Your email-address"
                  />
                </div>
              </div>

              <div>
                <div>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    name="message"
                    placeholder="What would you like to tell me ?"
                  />
                </div>
              </div>
              <div>
                <Button
                  onClick={deliver}
                  variant="contained"
                  color="secondary"
                  href="#outlined-buttons"
                >
                  <Typography variant="h6" className={classes.button}>
                    send your message
                  </Typography>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
