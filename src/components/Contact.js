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

  let check = 0;

  const [sender, setSender] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [senderError, setSenderError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [isSuccess, setIsSuccess] = useState(0);

  const serverURL =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_SERVER_PRODUCTION
      : process.env.REACT_APP_SERVER_DEVELOPMENT;

  const deliver = (e) => {
    e.preventDefault();

    const regAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regSender = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

    if (!address.match(regAddress)) {
      setAddressError(true);
    } else check++;

    if (!sender.match(regSender)) {
      setSenderError(true);
    } else check++;

    if (message.length <= 10) {
      setMessageError(true);
    } else check++;

    if (check === 3) {
      
      console.log('All fields have been checked');

      if (!messageError && !addressError && !senderError) {
        console.log('All fields are GOOD');
        setIsSuccess(1);

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
          .catch((error) => console.log('error', error.message));
      } else {
        console.log('there was an error // resetting fields');

        setAddressError(false);
        setMessageError(false);
        setSenderError(false);
      }
    }
  };

  const classes = useStyles();

  return (
    <>
      <div className="container">
        <div className="content960 col">
          <div id="NewChapter">contact me</div>

          <form name="contact" onSubmit={deliver}>
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
                    required
                  />
                </div>
                {senderError ? <div id="error">Is it a real name?</div> : ''}

                <div>
                  <input
                    type="email"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    name="address"
                    placeholder="Your email-address"
                    required
                  />
                </div>
                {addressError ? (
                  <div id="error">You must provide a valid email-address.</div>
                ) : (
                  ''
                )}
              </div>

              <div>
                <div>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    name="message"
                    placeholder="What would you like to tell me ?"
                    required
                  />
                </div>
                {messageError ? (
                  <div id="error">
                    Your text must contain more than 10 characters.
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div id="submit">
                <Button type="submit" variant="contained" color="secondary">
                  <Typography variant="h6" className={classes.button}>
                    send your message
                  </Typography>
                </Button>
              </div>
              {isSuccess ? (
                <div id="success">Your email was sent. Thank you</div>
              ) : (
                ''
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
