import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginScreen = () => {
  //   const [isSubmitted, setIsSubmitted] = useState(false);

  //   function submitForm() {
  //     setIsSubmitted(true);
  //   }
  return (
    <Router>
      <div>
        <LoginForm />
      </div>
    </Router>
  );
};

export default LoginScreen;
