// API
import "./api/axiosDefaults";

// Bootstrap Components
import Container from "react-bootstrap/Container";

// CSS
import styles from "./App.module.css";

// Local Components
import NavBar from './components/NavBar';
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";

// React Router
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/inspyre" element={<h1>Inspyre</h1>} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
