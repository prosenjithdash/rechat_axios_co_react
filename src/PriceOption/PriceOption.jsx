import Feature from "./Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className=" bg-sky-300 rounded-xl px-4 pt-8 pb-6 my-10 flex flex-col">
            <h2 className="text-7xl font-extrabold text-center">{price}</h2>
            <h2 className="text-2xl text-center">/mon</h2>
            <h4 className="text-3xl text-center">{name}</h4>

            <div className="my-[50px] flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <div>
                <button className="w-full bg-orange-500 rounded-2xl text-white px-5 py-3 font-semibold hover:bg-green-600">Buy Now</button>
            </div>
        </div>
    );
};

export default PriceOption;