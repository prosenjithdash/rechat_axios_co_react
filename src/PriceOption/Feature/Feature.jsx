import { FiArrowRightCircle } from "react-icons/fi";

const Feature = ({ feature }) => {

    return (
        <div>
            <p className="flex gap-1 items-center mt-2 "> <FiArrowRightCircle className="text-red-600" />
                {feature}</p>
        </div>
    );
};

export default Feature;