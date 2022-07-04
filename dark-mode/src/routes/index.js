import App from './App';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default Home;
