
export default function LandingPageIMG() {
    const categories = [
        {
            name: "Cakes",
            image: "/images/cake.png",
        },
        {
            name: "Ice Creams",
            image: "/images/icecream.png",
        },
        {
            name: "Cupcakes",
            image: "/images/cupcake.png",
        },
        {
            name: "Pastries",
            image: "/images/pastry.png",
        },
        {
            name: "Brownies",
            image: "/images/brownie.png",
        },
        {
            name: "Cookies",
            image: "/images/cookie.png",
        },
        {
            name: "Donuts",
            image: "/images/donut.png",
        },
        {
            name: "Combos",
            image: "/images/combo.png",
        },
    ];

    return (
        <div className="w-full bg-white">

            {/* ================= HERO ================= */}
            <section
                className="
                    relative
                    w-full
                    h-[calc(100vh-70px)]
                    min-h-[500px]
                    overflow-hidden
                    bg-[#fff3f0]
                "
            >
                {/* Hero Image */}
                <img
                    src="/images/landpage_bg.png"
                    alt="Ice and Cake"
                    className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        object-center
                    "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-white/5"></div>

                {/* Hero Content */}
                <div
                    className="
                        relative
                        z-10
                        w-full
                        h-full
                        max-w-[1500px]
                        mx-auto
                        px-8
                        lg:px-16
                        flex
                        items-center
                    "
                >
                    <div className="max-w-[600px]">

                        <p
                            className="
                                uppercase
                                tracking-[5px]
                                text-sm
                                text-[#8a5048]
                                font-medium
                                mb-4
                            "
                        >
                            Freshly Baked. Happily Delivered.
                        </p>

                        <h1
                            className="
                                text-4xl
                                md:text-5xl
                                lg:text-6xl
                                xl:text-7xl
                                font-bold
                                leading-[1.05]
                                text-[#3b1712]
                            "
                        >
                            Delicious{" "}
                            <span className="text-pink-500">
                                Cakes &
                            </span>

                            <br />

                            <span className="text-pink-500">
                                Ice Creams
                            </span>{" "}
                            for Every

                            <br />

                            Sweet Moment
                        </h1>

                        <p
                            className="
                                text-gray-600
                                text-base
                                lg:text-lg
                                mt-5
                                max-w-[560px]
                                leading-7
                            "
                        >
                            From creamy ice creams to delightful cakes,
                            we bring happiness to your doorstep with the
                            freshest and finest ingredients.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-6">

                            <button
                                className="
                                    bg-pink-500
                                    text-white
                                    px-7
                                    py-3
                                    rounded-xl
                                    font-semibold
                                    shadow-md
                                    hover:bg-pink-600
                                    transition
                                "
                            >
                                Shop Now →
                            </button>

                            <button
                                className="
                                    bg-white/80
                                    border
                                    border-pink-200
                                    text-[#3b1712]
                                    px-7
                                    py-3
                                    rounded-xl
                                    font-semibold
                                    hover:bg-white
                                    transition
                                "
                            >
                                Explore Menu
                            </button>

                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-6 mt-7">

                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🚚</span>

                                <div>
                                    <p className="font-semibold text-gray-800">
                                        Fast Delivery
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Across Your City
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🌿</span>

                                <div>
                                    <p className="font-semibold text-gray-800">
                                        Fresh Ingredients
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        100% Quality
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-2xl">♡</span>

                                <div>
                                    <p className="font-semibold text-gray-800">
                                        Loved by Thousands
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Happy Customers
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CATEGORIES ================= */}
            <section
                id="categories"
                className="w-full bg-white py-8 px-6"
            >
                <div
                    className="
                        max-w-[1500px]
                        mx-auto
                        flex
                        justify-between
                        gap-5
                        overflow-x-auto
                        pb-3
                    "
                >
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="
                                min-w-[110px]
                                text-center
                                cursor-pointer
                                group
                            "
                        >
                            <div
                                className="
                                    w-24
                                    h-24
                                    mx-auto
                                    rounded-full
                                    bg-[#fff0ed]
                                    flex
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    group-hover:scale-105
                                    transition
                                "
                            >
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    font-semibold
                                    text-gray-800
                                "
                            >
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
