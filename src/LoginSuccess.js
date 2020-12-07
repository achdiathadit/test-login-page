import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import imageHero from './images/hero-image.png';
import './bootstrap.css';

function LoginSuccess() {
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
        <Col md={6} sm={6} xs={6} style={{ padding: '30px', margin: 'auto' }}>
          <Row className='row-center'>
            <h3 className='login-success'>
              <strong>Login Success</strong>
            </h3>
          </Row>
          <Row className='row-center'>
            <h5 className='login-welcome'>
              <strong>Welcome to our platform</strong>
            </h5>
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
}

export default LoginSuccess;
