import { Heading } from "../components/heading"
import { Subheading } from "../components/subheading"
import { Inputform } from "../components/input"
import { Button } from "../components/button"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Signin=()=>{
    const [userName,setusername]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()
    
    return <div className="bg-orange-500">
        <div className="flex justify-between text-neutral-50 text-xl p-3 font-bold">
            <div>Blogger</div>
            <div>SIGN UP </div>
        </div>
    <div className="flex justify-center  h-screen shadow-xl rounded-md border-slate-300 border-solid shadow-gray-500">
        <div className="display-flex flex-col pl-5 justify-center">
        <div className="rounded-lg bg-white w-80 justify-center p-2 pl-5 h-max px-4">
       
    
        <div className="flex justify-center text-slate-500 font-light p-4">
        <Subheading className="font-serif text-bold text-2xl" label={"Signin"}/>
        </div>
        <div className=" text-neutral-50 font-serif font-semilight">
        <Inputform onChange={(e)=>{
            setusername(e.target.value)
        }} className="text-neutral-50 font-serif p-4" label={"Username"} placeholder={"eg johndoe@gmail.com"}/>
        <Inputform onChange={(e)=>{
            setpassword(e.target.value)
        }} className="text-neutral-50 font-serif p-4" label={"Password"} placeholder={"min 8 characters"}/>
        </div>
        <div className="flex justify-center p-5">
        <Button onClick={async ()=>{
            const response=axios.post('http://localhost:3000/api/v1/user/signin',{
                userName,
                password
            })
            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/weather');
            } else {
                console.error("Token not found in response data");
                // Handle the case when token is not found
            }
            navigate('/blogs')
        }} placeholder={"Signup"}/>
        </div>
        </div>
        </div>
        </div>
    </div> 
}