import { Button } from "../components/button"
import { Inputform } from "../components/input"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Blog=()=>{
    const [title,settitle]=useState("")
    const [content,setcontent]=useState("")
    const navigate=useNavigate()
    return <div>
        <div className="bg-neutral-50">
            <div className="flex justify-start p-4 font-serif text-3xl text-purple-500 font-semibold">
                Blogger
            </div>
            <div className="flex justify-center font-serif text-red-500 text-2xl font-semilight p-4">
                Create your Blog
            </div>
            <div className="flex justify-center h-screen shadow-xl rounded-md border-solid border-slate-900">
                <div className="display-flex justify-center font-serif font-semibold">
                <div className="display-flex flex-col pl-5 text-xl justify-center">
                    Choose a name for your blog
                </div>
                <div className=" text-sm font-serif font-light pl-5 justify-center">
                This is the title that will be displayed at the top of your blog.
                </div>
                <div className=" p-5">
                <Inputform onChange={(e)=>{
                    settitle(e.target.value)
                }} className="pl-4" label={"Blog Title"} placeholder={"eg AI,Stock market"}/>
                </div>
                <div className=" p-5">
                <Inputform onChange={(e)=>{
                    setcontent(e.target.value)
                }} className="pl-4" label={"Blog Content"} placeholder={"eg AI is one of the most innovative ideas of this decade.."}/>
                </div>
                <div className="flex justify-center p-4">
                    <Button onClick={async ()=>{
                        try {
                            const response=await axios.post('http://localhost:3000/api/v1/blogs/blog',{
                            title,
                            content
                        })
                        if(response.data){
                        navigate('/blogs')
                        }else{
                            console.error("not found in response data");
                        }} catch (error) {
                            
                        }
                    }} placeholder={"Create"}/>
                </div>
                </div>
            </div>
        </div>
    </div>
}