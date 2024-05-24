import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import { Inputform } from "../components/input";
import { Button } from "../components/button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                firstName,
                lastName,
                userName,
                password,
            });

            if (response.data && response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/blogs');
            } else {
                console.error("Token not found in response data");
                setError("An unexpected error occurred. Please try again.");
            }
        } catch (err) {
            if (err.response?.status === 409) {
                setError("User with this username already exists. Please try logging in or use a different username.");
            } else {
                setError(err.response?.data?.message || "An error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-orange-500 min-h-screen flex flex-col items-center">
            <div className="flex justify-between text-neutral-50 text-xl p-3 font-bold w-full max-w-screen-lg">
                <div>Blogger</div>
                <div>SIGN IN</div>
            </div>
            <div className="flex justify-center items-center h-full w-full max-w-screen-lg">
                <div className="bg-white rounded-lg shadow-xl p-8 w-80">
                    <div className="flex justify-center text-slate-500 font-light p-4">
                        <Subheading className="font-serif font-bold text-2xl" label="Signup" />
                    </div>
                    {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                    <div className="text-neutral-700 font-serif">
                        <Inputform onChange={(e) => setFirstName(e.target.value)} className="mb-4" label="First Name" placeholder="e.g., John" />
                        <Inputform onChange={(e) => setLastName(e.target.value)} className="mb-4" label="Last Name" placeholder="e.g., Doe" />
                        <Inputform onChange={(e) => setUserName(e.target.value)} className="mb-4" label="Username" placeholder="e.g., johndoe@gmail.com" />
                        <Inputform onChange={(e) => setPassword(e.target.value)} className="mb-4" label="Password" placeholder="min 8 characters" />
                    </div>
                    <div className="flex justify-center p-5">
                        <Button onClick={handleSignup} placeholder={loading ? "Signing up..." : "Signup"} disabled={loading} />
                    </div>
                </div>
            </div>
        </div>
    );
};
