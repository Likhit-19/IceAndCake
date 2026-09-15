import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";
import Input from "./Input";
export default function AddProductForm({ formName }) {
    return (
        <div className=" bg-white p-8  w-md rounded-2xl
         shadow-2xl ">
            <div >
                <img src="/images/logo.png" className="w-2xs mx-auto block" />
                <h2 className="text-3xl font-bold text-center font-serif  text-shadow-gray-500">First Time!</h2>
                <h4 className="text-center text-gray-500">-- SignUp to create your account --</h4>
            </div>
            <Form method="POST" encType="multipart/form-data" >
                        <div className="mb-2 p-3">
                        <Input name="name" type="text" label="Name"></Input>
                        </div>
                        <div className="mb-2 p-3">
                        <Input name="price" type="number" label="Price"></Input>
                        </div>
                        <div className="mb-6 p-3">
                         <Input name="category" type="text" label="Category"/>
                        </div>
                          <div className="mb-6 p-3">
                         <Input name="describe" type="text" label="Description"/>
                        </div>
                         <div className="mb-6 p-3">
                         <Input name="image" type="file" label="Image"/>
                        </div>
                        <div className="mb-6">
                            <button className="border border-gray-500 rounded-md bg-pink-200 w-full">-- Submit --</button>
                        </div>
                        
            </Form>
        </div>);
}

export async function addProductAction({ request }) {
    const formData = await request.formData();
   
    const response = await fetch("https://ice-and-cake-hqaygp2k5-alpha-abd3.vercel.app/Home/addProduct",
        {
            method: "POST",
            body: formData,
        }


    );
    if (response.ok) {
        return redirect("/");
    }
}