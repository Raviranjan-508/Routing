import React, {createContext , useContext, useState}  from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token , setToken ] = useState("");
    const Login = async () => {
        let r = await fetch("https://reqres.in/api/login", {
            method : "POST",
            headers: {
                "content-type" : "application/json",
            },
            body: JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }),
        });

        let data = await r.json();
        setToken(data.token);
    };

    const logout = () => {
        setToken("");
    };
    return (
        <AuthContext.Provider value={{  token , Login , logout }} >{children}</AuthContext.Provider>
    )
}