import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider( { children } ) {

    const anyUser = localStorage.getItem("currentUserEmail");
    const [ user, setUser] = useState(anyUser? anyUser : null );
    
    function signUp( email, password ) {

        const users = JSON.parse( localStorage.getItem("users") || "[]" );
        const newUser = {email, password};
        
        if(users.find( u => u.email === email)){
            return { success: false, message: "User already signed up"};
        }
        
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUserEmail", email);
        
        setUser(email);
    }

    function logIn(email, password) {
        
        const users = JSON.parse( localStorage.getItem("users") || "[]" );
        const anyUser = localStorage.getItem("currentUserEmail");
        
        if(anyUser){
            return { success : false, message: "Another User already loggedIn"};
        }
        
        if(users.find(u => u.email === email && u.password === password ) ) {
            localStorage.setItem("currentUserEmail", email);
            setUser(email);
            return { success: true, message: "Login Success" };
        }
        else{
            return { success: false, message: "Login failed" };
        }
    }

    function logOut(){
        setUser(null);
        localStorage.removeItem("currentUserEmail");
    }

    return ( <AuthContext.Provider value={{signUp, logIn, user, logOut}}> {children} </AuthContext.Provider> ) ;
}