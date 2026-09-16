export async function getProduct()
{
 const response= await fetch(
        "https://ice-and-cake.vercel.app/Home"
    );
    if(response.ok)
    {
        console.log("Data fetched Successfully!");
    }
    const data=await response.json();
    return data;
}