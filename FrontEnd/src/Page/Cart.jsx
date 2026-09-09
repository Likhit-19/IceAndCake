import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-gray-100 p-10">

            <h1 className="text-3xl font-bold mb-8">
                MY Cart
            </h1>

            <div className="bg-white rounded-2xl shadow p-6">

                {cartItems.map((item) => (

                    <div
                        key={item._id}
                        className="flex items-center gap-5
                        border-b py-5"
                    >

                        <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-xl"
                        />

                        <div className="flex-1">

                            <h2 className="text-xl font-semibold">
                                {item.name}
                            </h2>

                            <p className="text-pink-500 font-medium">
                                ₹{item.price}
                            </p>

                        </div>

                        <div className="flex items-center gap-3">

                            <button
                                onClick={() =>
                                    dispatch(removeFromCart(item))
                                }
                                className="w-8 h-8 bg-gray-200 rounded"
                            >
                                -
                            </button>

                            <span>
                                {item.quantity}
                            </span>

                            <button
                                onClick={() =>
                                    dispatch(addToCart(item))
                                }
                                className="w-8 h-8 bg-gray-200 rounded"
                            >
                                +
                            </button>

                        </div>

                        <p className="font-bold w-24 text-right">
                            ₹{item.price * item.quantity}
                        </p>

                    </div>

                ))}

                <div className="flex justify-end mt-8">

                    <div className="text-right">

                        <p className="text-xl">
                            Total
                        </p>

                        <p className="text-2xl font-bold text-pink-500">
                            ₹{total}
                        </p>

                        <button
                            onClick={() => navigate("/payment")}
                            className="mt-4 bg-pink-500 text-white
                            px-8 py-3 rounded-xl font-semibold
                            hover:bg-pink-600"
                        >
                            Proceed to Payment
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}