import PriceOption from "../../../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities during off-peak hours",
                "Limited access to group fitness classes",
                "No access to personal training sessions",
                "Locker room access",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym facilities at all times",
                "Unlimited access to group fitness classes",
                "Discounted rates for personal training sessions",
                "Access to sauna and steam room",
                "Towel service",
                "Monthly fitness assessment"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "Access to gym facilities at all times",
                "Unlimited access to group fitness classes",
                "Complimentary personal training sessions",
                "Access to exclusive member events",
                "Discounts on gym merchandise",
                "VIP parking",
                "Nutritional counseling sessions",
                "Massage therapy sessions"
            ]
        }
    ]
    // lg:w-80%  lg:max-w-[1300px] lg:mx-auto lg:mt-[50px]
    return (
        <div className=" ">
            <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 lg:my-10 md:my-10">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;