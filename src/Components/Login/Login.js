import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';
import NotFound from '../NotFound';
import { Col, Container, Row } from 'react-bootstrap';

const Login = () => {

  const { login } = React.useContext(UserContext);
  const [bgDinamic, setBgDinamic] = React.useState();

  async function bgImageDinamic(){
    let response = await fetch('https://api.unsplash.com/photos/random?query=pets',
      {
        method: 'GET',
        headers: {
          'Authorization': 'Client-ID 2QfrMgwuSuivApCYbkMp2LJqDly-0OFujqThACvdOgQ'
        }
      });
    let json = await response.json();
    setBgDinamic(json.urls.regular);
  }

  React.useEffect(() => {

    bgImageDinamic();

  },[]);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section>
      <Container fluid>
        <Row>
          <Col lg={6} style={{
                            backgroundImage: `url(${bgDinamic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: '30vh'
                              }}></Col>
          <Col lg={4} className="d-flex justify-content-center">
            <div className={styles.forms}>
              <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="criar" element={<LoginCreate />} />
                <Route path="perdeu" element={<LoginPasswordLost />} />
                <Route path="resetar" element={<LoginPasswordReset />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
