import {useState} from "react"
import './App.css';
import Navbar from "./components/Layout/navbar"
import Footer from "./components/Layout/footer"
import { Provider } from 'react-redux';
import {BrowserRouter as Router , Route} from "react-router-dom"
import Landing from './components/HomePage/Landing';
import Movie from './components/HomePage/movie';
import store from './store';
import Login from "./components/LoginPage/login"
function App() {
  const [authenticatedUser,setAuthenticatedUser]=useState(false)
  const login=()=>{
    setAuthenticatedUser(true)
  }
  const logout=()=>{
    setAuthenticatedUser(false)
  }
  return (
   <Provider store={store}>
    <Router>
      <div>
        <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route exact path="/login" component={Login} />
        <Footer />
      </div>
    </Router>
    </Provider>

  );
}

export default App;
