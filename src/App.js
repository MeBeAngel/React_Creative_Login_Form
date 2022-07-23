import "./styles.css";
import LoginForm from './components/LoginForm';
import Heading from './components/Heading';

export default function App() {
  return (
    <div className="App">
      <Heading text="USER LOGIN FORM" />
      <LoginForm />
    </div>
    );
}
