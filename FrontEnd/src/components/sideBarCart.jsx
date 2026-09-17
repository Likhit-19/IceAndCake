import {useSelector}  from "react-redux";
import {useDispatch} from "react-redux";
import { useAuth } from "../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {addToCart,removeFromCart} from "../store/cartSlice";
export default function Cart() {
    const navigate=useNavigate();
    const cartItems= useSelector((state)=>state.cart.items);
    const dispatch=useDispatch();
    const { data, isLoading } = useAuth();

    return (
        <div className="absolute right-34 top-14 w-92 bg-white shadow-2xl p-6 z-50  rounded-2xl">

            <h2 className="text-2xl font-bold text-center">Your Cart</h2>
            <ul className="max-h-80 overflow-y-auto">
                {cartItems.map((item) => (
                    <li
                        key={item._id}
                        className="flex items-center px-10 gap-3 border-b py-4">
                        {/*Image */}
                        <img src={item.imageUrl} alt={item.name}
                            className="w-16 h-16 rounded-xl object-cover" />
                        {/* Details */}
                        <div className="flex-1 px-4">
                            <h3 className="font-semibold">
                                {item.name}
                            </h3>



                            <div className="flex items-center gap-3 mt-1">
                                <div className="flex items-center gap-2">
                                    <p className="text-pink-500 font-medium">
                                        ₹{item.price*item.quantity}
                                    </p>
                                    <button  onClick={()=>dispatch(removeFromCart(item))}
                                     className="px-2 bg-gray-200 rounded">
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button onClick={()=>dispatch(addToCart(item))} 
                                    className="px-2 bg-gray-200 rounded">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
             {data?.user ? <button
                className="w-full mt-4 bg-pink-500
                text-white py-2 rounded-xl
                font-semibold hover:bg-pink-600"
                onClick={()=>navigate("/cart")}
            >
               Proceed
            </button>:
            <button
                className="w-full mt-4 bg-pink-500
                text-white py-2 rounded-xl
                font-semibold hover:bg-pink-600"
                onClick={()=>navigate("/user/login")}
            >
               login
            </button>}
            

        </div>
    );
}