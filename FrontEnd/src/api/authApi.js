export  async function getCurrentUser(){
    const response= await fetch(
        "https://ice-and-cake-hqaygp2k5-alpha-abd3.vercel.app/user/auth",
        {
            credentials:"include"
        }
    );
    if(!response.ok)
    {
        return null;
    }

    return response.json();
}