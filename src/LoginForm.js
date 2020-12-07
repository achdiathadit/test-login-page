import React from 'react';
import { Row, Col, Form, Image, Card, Button } from 'react-bootstrap';
import imageHero from './images/hero-image.png';
import { withRouter } from 'react-router-dom';
import './bootstrap.css';

const LoginForm = () => {
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     this.props.history.push('/');
  //   };

  return (
    <Card>
      <Row>
        <Col md={6} sm={6} xs={6}>
          <Image
            src={imageHero}
            alt='hero-image'
            style={{ height: '552px', padding: '0px' }}
          />
        </Col>
        <Col md={6} sm={6} xs={6} style={{ padding: '30px' }}>
          <Row className='row-right'>
            <p className='small-cap'>Don't have an account?</p>
            <Button
              variant='secondary'
              type='submit'
              className='btn-register'
              href='/'
            >
              Create account
            </Button>
          </Row>
          <Row className='row-center'>
            <h4 className='login-title'>
              <strong>Login Page</strong>
            </h4>
          </Row>
          <Row className='row-center'>
            <Form>
              <Form.Group controlId='formGroupText'>
                <Form.Control type='text' placeholder='Enter your username' />
              </Form.Group>
              <Form.Group controlId='formGroupPassword'>
                <Form.Control
                  type='password'
                  placeholder='Enter your password'
                />
              </Form.Group>
              <Button variant='info' type='submit' className='btn-login'>
                Login
              </Button>
              <p className='small-cap'>
                Forgot Password? <a href='/'>Click here</a>
              </p>
            </Form>
          </Row>
          <Row className='row-center social-link'>
            <button type='button' class='btn btn-link'>
              <i className='fab fa-twitter-square fa-2x' />
            </button>
            <button type='button' class='btn btn-link'>
              <i className='fab fa-instagram fa-2x' />
            </button>
            <button type='button' class='btn btn-link'>
              <i className='fab fa-linkedin fa-2x' />
            </button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default withRouter(LoginForm);
