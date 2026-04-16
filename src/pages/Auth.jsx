import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth(){
    const [ mode, setMode ] = useState("signup");
    const { register, handleSubmit, formState: { errors }} = useForm();
    function onSubmit(){
        alert(`success ${mode}`);
    }
    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    <h1 className="page-title"> { mode === 'signup' ? "Sign Up" : "Log In" } </h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" className="form-input" {...register("email", { required: "An email is needed"})}/>
                            {errors.email && <span className="form-error">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" id="password" className="form-input" {...register("password", { required: "An password is needed"} ) } />
                            {errors.password && <span className="form-error">{errors.password.message}</span>}
                        </div>
                        <button type="submit" className="btn btn-primary btn-large">{ mode === 'signup' ? "Sign Up" : "Log In" }</button>
                    </form>

                    <div className="auth-switch">
                        {
                            mode === "signup" ? 
                            (<p>Already have an account? <span className="auth-link" onClick={ ()=> setMode("login") }>Login</span></p>) 
                            : 
                            (<p>Don't have any account? <span className="auth-link" onClick={ ()=> setMode("signup") }>Sign Up</span></p>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}