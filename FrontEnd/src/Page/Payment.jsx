import { useSelector } from "react-redux";

export default function Payment() {

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    async function handlePayment() {

        try {

            // 1. Create Razorpay order
            const response = await fetch(
                "https://ice-and-cake.vercel.app/payment/create-order",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        amount: total
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            // 2. Razorpay Checkout
            const options = {
                key: "rzp_test_TcfxAwAlqQIY62",

                amount: data.order.amount,

                currency: data.order.currency,

                name: "Ice & Cake",

                description: "Ice & Cake Order",

                order_id: data.order.id,

                handler: async function (response) {

                    // 3. Verify payment on backend
                    const verifyResponse = await fetch(
                        "https://ice-and-cake.vercel.app/payment/verify",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            credentials: "include",
                            body: JSON.stringify(response)
                        }
                    );

                    const result =
                        await verifyResponse.json();

                    if (result.success) {
                        alert("Payment Successful!");
                    } else {
                        alert("Payment verification failed");
                    }
                },

                theme: {
                    color: "#ec4899"
                }
            };

            const razorpay = new window.Razorpay(options);

            razorpay.open();

        } catch (error) {

            console.log(error);

            alert("Something went wrong");
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-10">

            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8">

                <h1 className="text-3xl font-bold mb-8">
                    Payment
                </h1>

                <div className="space-y-4">

                    {cartItems.map((item) => (

                        <div
                            key={item._id}
                            className="flex justify-between border-b pb-3"
                        >

                            <span>
                                {item.name} × {item.quantity}
                            </span>

                            <span className="font-semibold">
                                ₹{item.price * item.quantity}
                            </span>

                        </div>

                    ))}

                </div>

                <div className="flex justify-between mt-8 text-xl font-bold">

                    <span>Total</span>

                    <span className="text-pink-500">
                        ₹{total}
                    </span>

                </div>

                <button
                    onClick={handlePayment}
                    className="w-full mt-8 bg-pink-500
                    text-white py-3 rounded-xl
                    font-semibold hover:bg-pink-600"
                >
                    Pay ₹{total}
                </button>

            </div>

        </div>
    );
}