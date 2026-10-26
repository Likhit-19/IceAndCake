import { Form } from "react-router-dom";
import { redirect, useActionData } from "react-router-dom";
import Input from "./Input";
export default function AutheForm({ formName }) {
    const error = useActionData();
    return (
        <div className=" bg-white p-8  w-md rounded-2xl
         shadow-2xl ">
            <div >
                <img src="/images/logo.png" className="w-2xs mx-auto block" />
                <h2 className="text-3xl font-bold text-center font-serif  text-shadow-gray-500">Welcome Back!</h2>
                <h4 className="text-center text-gray-500">-- Login to continue with you account --</h4>
            </div>
            <Form method="POST" >
                <div className="mb-2 p-3">
                    <Input name="email" type="email" label="Email"></Input>
                </div>
                <div className="mb-6 p-3">
                    <Input name="password" type="password" label="Password" />
                </div>
                {error && (<p className="text-red-500 text-center mb-4">{error.message}</p>)}
                <div className="mb-6">
                    <button className="border border-gray-500 rounded-md bg-pink-200 w-full">-- Login --</button>
                </div>
                <div className="flex justify-end text-sm mt-3">
                    <NavLink
                        to="/user/signup"
                        className="text-pink-600 hover:text-pink-800 font-semibold transition-colors"
                    >
                        Sign up →
                    </NavLink>
                </div>

            </Form>
            
        </div>);
}


export async function loginAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch(
            "https://ice-and-cake.vercel.app/user/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(data),
            }
        );

        // Read the response as text first to avoid JSON parsing errors.
        const text = await response.text();

        let result;
        try {
            result = JSON.parse(text);
        } catch {
            console.error("Server returned non-JSON:", text);
            return {
                message: `Server returned an invalid response (HTTP ${response.status}). Check the API URL and backend logs.`
            };
        }

        if (response.ok) {
            return redirect("/");
        }

        return {
            message: result.message || `Login failed (HTTP ${response.status})`
        };
    } catch (error) {
        console.error("Login request failed:", error);

        return {
            message: "Unable to connect to the server. Please try again."
        };
    }
}
