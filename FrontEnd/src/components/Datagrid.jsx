import { useProduct } from "../hooks/useProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import LandingPage from "../components/LandingPageIMG";

export default function Datagrid() {
    const { data = [], isLoading, isError } = useProduct();
    const dispatch = useDispatch();

    function handleAddItem(item) {
        dispatch(addToCart(item));
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">
                    Loading products...
                </p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">
                    Failed to load products.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full bg-white">

            {/* Navbar + Hero + Categories */}
            <LandingPage />

            {/* ================= PRODUCTS ================= */}
            <section
                id="products"
                className="max-w-[1400px] mx-auto px-6 py-10"
            >

                {/* Heading */}
                <div className="
                    flex
                    justify-between
                    items-end
                    mb-8
                ">

                    <div>
                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#3b1712]
                        ">
                            Featured Products
                        </h2>

                        <p className="
                            text-gray-500
                            mt-2
                        ">
                            Our most loved cakes and ice creams,
                            handpicked for you.
                        </p>
                    </div>

                    <button className="
                        hidden
                        md:block
                        border
                        border-pink-500
                        text-pink-500
                        px-5
                        py-2
                        rounded-xl
                        hover:bg-pink-500
                        hover:text-white
                        transition
                    ">
                        View All →
                    </button>

                </div>


                {/* Product Grid */}
                <ul className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-6
                    list-none
                    p-0
                    m-0
                ">

                    {data.map((product) => (

                        <li
                            key={product._id}
                            className="
                                bg-white
                                rounded-2xl
                                border
                                border-gray-100
                                shadow-sm
                                overflow-hidden
                                hover:shadow-xl
                                transition-all
                                duration-300
                                group
                            "
                        >

                            {/* Image */}
                            <div className="
                                relative
                                h-56
                                overflow-hidden
                                bg-pink-50
                            ">

                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        group-hover:scale-105
                                        transition-transform
                                        duration-500
                                    "
                                />

                                {/* Heart */}
                                <button className="
                                    absolute
                                    top-3
                                    right-3
                                    w-9
                                    h-9
                                    bg-white
                                    rounded-full
                                    shadow
                                    flex
                                    items-center
                                    justify-center
                                    text-lg
                                ">
                                    ♡
                                </button>

                            </div>


                            {/* Content */}
                            <div className="p-4">

                                <h3 className="
                                    text-lg
                                    font-semibold
                                    text-gray-800
                                ">
                                    {product.name}
                                </h3>


                                <p className="
                                    text-sm
                                    text-gray-400
                                    mt-1
                                ">
                                    {product.category || "Desserts"}
                                </p>


                                <div className="
                                    flex
                                    justify-between
                                    items-center
                                    mt-3
                                ">

                                    <div>
                                        <span className="
                                            text-yellow-400
                                        ">
                                            ★
                                        </span>

                                        <span className="
                                            text-sm
                                            text-gray-500
                                            ml-1
                                        ">
                                            4.8
                                        </span>
                                    </div>

                                    <span className="
                                        text-lg
                                        font-bold
                                        text-[#3b1712]
                                    ">
                                        ₹{product.price}
                                    </span>

                                </div>


                                {/* Add Cart */}
                                <button
                                    onClick={() =>
                                        handleAddItem(product)
                                    }
                                    className="
                                        w-full
                                        mt-4
                                        bg-pink-500
                                        text-white
                                        py-3
                                        rounded-xl
                                        font-semibold
                                        hover:bg-pink-600
                                        active:scale-[0.98]
                                        transition
                                    "
                                >
                                    🛒 Add to Cart
                                </button>

                            </div>

                        </li>

                    ))}

                </ul>

            </section>

        </div>
    );
}