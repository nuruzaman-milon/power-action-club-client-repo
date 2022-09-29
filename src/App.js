import './App.css';
import Blog from './components/Blog/Blog';
import Exercises from './components/Exercises/Exercises';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Exercises></Exercises>
      <Blog></Blog>
    </div>
  );
}

export default App;
