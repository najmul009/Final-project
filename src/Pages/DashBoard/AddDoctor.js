import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Common/Loading';

const AddDoctor = () => {
    

    const [upLoading, setUpLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const {data:services,isLoading} = useQuery('servicesName', ()=> fetch('http://localhost:5000/services').then(res=>res.json())) ;
    const imageBBapi = 'df9a9668c4fca657aaede92ab5684791';
    const onSubmit = async data => {
        setUpLoading(true)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imageBBapi}`;
        fetch(url,{
            method: 'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            
            if(result.success){
                const img = result.data.url;
                const doctor= {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                };
                fetch('http://localhost:5000/addDoctor',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        
                    },
                    body:JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(inserted=>{
                    setUpLoading(false)
                    if(inserted.insertedId){
                        reset()
                        toast('Doctor added successfuly')
                    }else{
                        toast.error('something worng!')
                    }
                })
            }
        })
    };
    if(isLoading || upLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-secondary text-2xl my-5'>Add Doctor</h1>
            <div className="overflow-x-auto">
                <div className='flex  justify-center items-center '>
                    <div className="card w-96 bg-base-100 shadow-xl text-center">
                        <div className="card-body">


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
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            },
                                            minLength: {
                                                value: 4,
                                                message: 'Provied a valid Name'
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
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provied a valid email'
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
                                        <span className="label-text">Specialty</span>
                                    </label>
                                    <select {...register('specialty')} className="select select-bordered w-full max-w-xs">
                                        {
                                            services.map((service) => <option
                                                key={service._id}
                                                value={service.name}>{service.name}</option>)
                                        }

                                    </select>

                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input
                                        type="file"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: 'Image is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                        

                                    </label>
                                </div>

                                <input className='btn w-full max-w-xs mt-10' type="submit" value="Add" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;