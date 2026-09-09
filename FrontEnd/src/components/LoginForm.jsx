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

            </Form>
        </div>);
}

export async function loginAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    const response = await fetch("http://localhost:8000/user/login",
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        }


    );
    const result = await response.json();
    if (response.ok) {
        return redirect("/");
    }

    return {
        message: result.message
    };
}
