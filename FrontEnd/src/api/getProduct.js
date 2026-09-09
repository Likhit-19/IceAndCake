export async function getProduct()
{
 const response= await fetch(
        "http://localhost:8000/Home"
    );
    if(response.ok)
    {
        console.log("Data fetched Successfully!");
    }
    const data=response.json();
    return data;
}