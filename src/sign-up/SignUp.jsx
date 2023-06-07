
import { Link } from 'react-router-dom';
import {  updateProfile } from 'firebase/auth';
import { useState } from 'react';
import useTitle from '../hooks/useTitle';
import { useAuth } from '../context/AuthProvider';
import { useForm } from 'react-hook-form';
    
    


const SignUp = () => {
    useTitle("Sign Up")
    const {register, handleSubmit} = useForm()
  
    const {createUser} = useAuth()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const hendleForm = (data) => {
        console.log(data)

        const name = data.name
        const email = data.email
        const password = data.password
        const confirm_password = data.confirm_password
        const profileUrl = data.profile


        setError(null)
        setSuccess(null)

        if(!name || !profileUrl || !email || !password || !confirm_password) {
            setError("Cannot leave any field empty")
            return
        } 
        
        if(password.length < 6) {
            setError("is less than 6 characters")
            return
        }
       
        if(!/(?=.*?[A-Z])/.test(password)) {
            setError("don't have a capital letter")
            return 
        }
        if(!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError("don't have a special character")
            return 
        }
        if(password !== confirm_password) {
            setError("password Are not match")
            return 
        }
        createUser(email, password) 
        .then ((result) => {
            updateProfile(result.user, {
                displayName: name,
                photoURL: profileUrl
            })
           form.reset()

           setSuccess("Registration successfull")

        }) 
        .catch(error => {
            
        })
    }





    return (
        <main className='w-full'>
            
           <section className='container flex  items-center w-full h-[70vh] gap-5'>
           <section className='p-[25px] mt-20 w-full md:ml-auto md:w-1/2'>
                <h2 className='text-3xl font-bold'>Create An Account</h2>

                <p className='mt-[8px]'>Already have an account? <Link to="/login" className='text-main'>Login</Link></p>     
                <form onSubmit={handleSubmit(hendleForm)}>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" {...register("name")} id="name" className='border-b-2 rounded w-full p-2 text-base outline-none' autoComplete='off' placeholder='Name' />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="profile">Profile pic url</label>
                        <input type="text" name="profile" {...register("profile", )} id="profile" className='border-b-2 w-full rounded p-2 text-base outline-none' autoComplete='off' placeholder='Profile pic url' />
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" {...register("email", {required: true})} id="email" className='border-b-2 w-full rounded p-2 text-base outline-none' autoComplete='off' placeholder='email' required/>
                    </div>
                    <div className='flex flex-col my-3'>
                        <label htmlFor="password" >Password</label>
                        <input type="password" name="password" {...register("password")} id="password" className='border-b-2 w-full rounded p-2 text-base outline-none' autoComplete='off' placeholder='password' />
                    </div> 
                    <div className='flex flex-col my-3'>
                        <label htmlFor="password" >Confirm Password</label>
                        <input type="password" name="password" {...register("confirm_password")} id="password" className='border-b-2 w-full rounded p-2 text-base outline-none' autoComplete='off' placeholder='password' />
                    </div> 
                    <p className='text-[#da4747]'>{error && error}</p>
                    <p className='text-[#399d23]'>{success && success}</p>

                    <button type='submit' className='bg-main  p-2  rounded-xl text-white w-full  text-[21px] '>Sign Up</button>         
                    
                    

                </form>
            </section>
           </section>

        </main>
        
    );
};

export default SignUp;