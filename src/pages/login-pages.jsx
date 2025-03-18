import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = "alexx123@mail.com";
        const password = "123456";

        if(email === user && password === password){
            navigate('/lista-carros');
        }   
        else{
            alert("Login failed");
        }

    }   


return <>
            <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h1 class="text-2xl font-semibold text-gray-900 mb-5">Login</h1>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-pretty font-semibold text-sm  text-gray-900 ">Your email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="name@flowbite.com" required />
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-pretty font-semibold text-sm text-gray-900 ">Your password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      " required />
            </div>
            <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300     " required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 ">Remember me</label>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Submit</button>
            </form>
    </>
};
export default Login;