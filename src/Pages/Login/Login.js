import React from 'react';

const Login = () => {
    return (
        <div className='flex  justify-center '>
            <div class="card h-auto bg-base-100 shadow-xl text-center">
                <form>
                    
                    <input type="email" name='email' placeholder="email" class="input input-bordered w-full max-w-xs" />
                    <input type="password" name='password' placeholder="password" class="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Login" class="btn btn-accent w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default Login;