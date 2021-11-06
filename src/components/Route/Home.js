import React from 'react';
import About from './About'
import Login from './Login'
import Home1 from './Home1'
import Error from './Error'
import User from './User'
import Search from './Search'
import {Route,Switch,Redirect} from 'react-router-dom'

/* https://stackoverflow.com/questions/48150567/react-router-difference-between-component-and-render
if (component)
  return match ? React.createElement(component, props) : null

if (render)
  return match ? render(props) : null*/
const Main = () => { 
    const Name = ()=>{
        return (
            <h1>Name Page</h1>
        )
    }
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Home1} />
               {/*  <Route path='/about' component={()=><About name="About"/>} /> */}
                <Route path='/about' render={()=> <About name="About" />} />
                <Route path='/login' exact component={Login} />
                <Route path='/search' component={Search} />
                <Route path='/login/name' component={Name} />
                <Route path='/user/:fName/:lName' component={User} />
                {/* <Route component={Error} /> */}
                <Redirect to='/' />
            </Switch>
            
        </div>
    );
};

export default Main;