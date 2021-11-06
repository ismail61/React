import React,{useContext,useState,useEffect} from 'react';
import {Name,Pass} from './FunA'
const FunC = () => {
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(0)

    useEffect(() => {
      document.title=`Clicked me ${num} times`
    }, [num])
    useEffect(() => {
      alert('You Click me')
    }, [num1])

    const name = useContext(Name)
    const password = useContext(Pass)
    return (
        <div>
            {/* <Name.Consumer>
                {(name)=>{
                   return  (
                       <Pass.Consumer>
                           {(password)=>{
                               return <h1>My name Is : {name} And password Is : {password}</h1>
                           }}
                       </Pass.Consumer>
                   )
                }}
            </Name.Consumer> */}
            <h1>
                My name Is :{name} And Password Is : {password}
            </h1>
            <button onClick={()=>{setNum(num+1)}}>Click Me {num}</button>
            <button onClick={()=>{setNum1(num1+1)}}>Click Me {num1}</button>
        </div>
    );
};

export default FunC;