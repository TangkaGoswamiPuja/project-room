"use client";
import Link from 'next/link';
const Login = () => {

    const hello = () => {
        console.log("hello")
    }
    const bye = () => {
        console.log("bye")
    }

    return (
        <div>
            <h1>Login</h1>
             <Link href="/">
                <button className="btn">home</button></Link>

            {/* <button onClick={hello} className="btn">login</button>
           
            <button onClick={bye} className="btn">logout</button> */}

            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;