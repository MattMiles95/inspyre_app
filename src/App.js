// Bootstrap Components
import Container from "react-bootstrap/Container";

// CSS
import styles from "./App.module.css";

// Local Components
import NavBar from './components/NavBar';

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
          <Route path="/signin" element={<h1>Sign In</h1>} />
          <Route path="/signup" element={<h1>Sign Up</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
