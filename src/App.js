import "./App.css"
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './common/Navbar/Navbar'
import Home from "./components/pages/Home";
import About from "./components/About/About";
import Gallery from "./components/gallery/Gallery";
import Destinations from "./components/Destination/Home";
import SinglePages from "./SinglePage/SinglePages";
import Blog from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/Blog-single-page/BlogSingle";
import Testimoial from "./components/Testimoial/Testimoial";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";



function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/gallery' exact component={Gallery}></Route>
          <Route path='/destination' exact component={Destinations}></Route>
          <Route path='/singlepage/:id' exact component={SinglePages}></Route>
          <Route path='/blog' exact component={Blog}></Route>
          <Route path='/blogsingle/:id' exact component={BlogSingle}></Route>
          <Route path='/testimonail' exact component={Testimoial}></Route>
          <Route path='/contact' exact component={Contact}></Route>
          <Route path='/sign-in' exact component={Login}></Route>
          <Route path='/register' exact component={Register}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;




























