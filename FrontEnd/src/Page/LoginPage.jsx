import AutheForm from '../components/LoginForm';
export default function LoginPage()
{
    return(
        <>
        <main className="flex justify-center items-center min-h-screen bg-[url('/images/Ice&cake.png')]
         bg-cover bg-center bg-no-repeat">
            
        <AutheForm />
        </main>
        </>
    );
}