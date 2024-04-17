import React from 'react';
import {
  Container,
  Grid,
  Row,
  Col,
  Panel,
  Button,
  ButtonToolbar,
} from 'rsuite';
import firebase from 'firebase/compat/app';
import { auth, database } from '../misc/firebase';
import { Alert } from 'rsuite';

const SignIn = () => {
  const signinWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
      alert('Signed In', 4000);
    } catch (err) {
      alert(err.message, 4000);
    }
  };

  const onGoogleSignin = () => {
    signinWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  const onFacebookSignin = () => {
    signinWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to chat app</h2>
                <p>Hi welcome to the site guyssss. this is this</p>
              </div>

              <div className="mt-3">
                <ButtonToolbar>
                  <Button block color="blue" onClick={onFacebookSignin}>
                    Facebook
                  </Button>
                  <Button block color="green" onClick={onGoogleSignin}>
                    Google
                  </Button>
                </ButtonToolbar>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
