import { Container } from 'react-bootstrap';
import LoginScreen from './LoginScreen';
import './bootstrap.css';

function App() {
  return (
    <div>
      <Container
        style={{ margin: 'auto', textAlign: 'center', padding: '20px' }}
      >
        <LoginScreen />
      </Container>
    </div>
  );
}

export default App;
