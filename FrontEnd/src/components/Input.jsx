export default function Input({name,label,type})
{
    return(
        <><label htmlFor={name}  className="block font-bold text-2xl mb-1">{label}</label>
        <input type={type} required name={name}
        className="w-full border border-gray-400 hover:bg-gray-100
        rounded-sm text-center font-medium py-1.5" placeholder={name}></input></>
    );
}