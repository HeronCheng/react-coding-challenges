import App from './App';
import React, {useState} from 'react';

export const AuthContext = React.createContext();

// Use something like react-router-dom to manage multiple pages/routes
const Home=()=>{
    const [dark, setDark]=useState(false);
    return(
        <AuthContext.Provider
                value={{
                    dark : [ dark, setDark ],
                }}
            >
                <App/>
        </AuthContext.Provider>
    )
}

export default Home;
