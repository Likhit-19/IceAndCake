export async function getProduct()
{
 const response= await fetch(
        "https://ice-and-cake-hqaygp2k5-alpha-abd3.vercel.app/Home"
    );
    if(response.ok)
    {
        console.log("Data fetched Successfully!");
    }
    const data=response.json();
    return data;
}