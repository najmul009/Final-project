import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Common/Loading';

const SignUp = () => {
    const [user ] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle,gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        eUser,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      let signInError;
      if (loading || gLoading) {
        return <Loading></Loading>
    }
    if(user){
        console.log(user);
    };
    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    };
    const onSubmit = data => {
        console.log(data);
        // signOut(auth);
        createUserWithEmailAndPassword(data.email, data.name)
    };
    return (
        <div className='flex  h-screen justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl text-center">
                <div className="card-body">
                    <h2 className='text-center font-bold text-2xl'>Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required:{
                                    value:true,
                                    message:'Name is Required'
                                },
                                minLength: {
                                    value:4,
                                    message:'Provied a valid Name'
                                }
                            })}
                            />
                            <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required:{
                                    value:true,
                                    message:'Email is Required'
                                },
                                pattern: {
                                    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message:'Provied a valid email'
                                }
                            })}
                            />
                            <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            type="password" 
                            placeholder="Password" 
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required:{
                                    value:true,
                                    message:'Provied Your Password'
                                },
                                minLength: {
                                    value:6,
                                    message:'Password Must be 6 characters or longer'
                                }
                            })}
                            />
                            <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs' type="submit" value="Sign Up"/>
                    </form>

                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent w-full max-w-xs">SignInWithGoogle</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;