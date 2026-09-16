import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react"
import Cart from "./sideBarCart";
import { useState } from "react";
export default function Navigation() {
    const { data, isLoading } = useAuth();
    const [showCart,setShowCart]=useState(false);
    const navigate = useNavigate();
    function handleRedirectLogin() {
        navigate("/user/login");
    }

    async function handleRedirectLogout() {
        const response = await fetch("https://ice-and-cake-hqaygp2k5-alpha-abd3.vercel.app/user/logout", {
            credentials: "include",
        });
        if (response.ok) navigate("/user/login");

    }

    return (
        <nav className="relative w-full h-16 bg-pink-500 shadow-md">

            {/* Logo - Top Left */}
            <div className="absolute left-6 top-3 text-2xl font-bold text-white">
                Ice&Cake
            </div>

            {/* Navigation Links */}
            <ul className="h-full flex items-center justify-center gap-8 text-white font-medium">
                <li>
                    <a href="/" className="hover:text-pink-100 transition">
                        Home
                    </a>
                </li>

                <li>
                    <a href="#" className="hover:text-pink-100 transition">
                        Cake
                    </a>
                </li>

                <li>
                    <a href="#" className="hover:text-pink-100 transition">
                        Ice-Cream
                    </a>
                </li>
                {data?.user?.role=="Admin"&&(
                     <li>
                    <a href="#" className="hover:text-pink-100 transition">
                        Add-Product
                    </a>
                </li>
                )}
               

                <li>
                    <a href="#" className="hover:text-pink-100 transition">
                        Contact
                    </a>
                </li>
            </ul>
            <button onClick={()=>setShowCart(!showCart)}
                className="absolute right-34 top-3 bg-white cursor-pointer
                 text-pink-500 px-5 py-2 rounded-2xl font-semibold hover:bg-pink-100 transition flex items-center gap-2">
                <ShoppingCart size={20} />
                <span>Cart</span>
            </button>
            {showCart && <Cart/>}
            {/* Login */}

            {data?.user ? (
                <button onClick={handleRedirectLogout}
                    className="absolute right-6 top-3 bg-white text-pink-500 px-5 py-2 rounded-full font-semibold hover:bg-pink-100 transition">
                    Logout
                </button>
            ) : (
                <button onClick={handleRedirectLogin}
                    className="absolute right-6 top-3 bg-white text-pink-500 px-5 py-2 rounded-full font-semibold hover:bg-pink-100 transition">
                    Login
                </button>
            )}
        </nav>
    );
}