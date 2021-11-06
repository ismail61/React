import React,{createContext} from 'react';
import FunB from './FunB'
const Name = createContext()
const Pass = createContext()

const FunA = () => {
    return (
        <div>
            <Name.Provider value="Ismail Hosen raj">
                <Pass.Provider value="ismail">
                    <FunB />
                </Pass.Provider>
            </Name.Provider>
            
        </div>
    );
};

export default FunA;
export {Name,Pass}