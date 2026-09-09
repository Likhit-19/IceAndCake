export  async function getCurrentUser(){
    const response= await fetch(
        "http://localhost:8000/user/auth",
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