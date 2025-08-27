import { FaStar, FaRegStar } from "react-icons/fa";

export const Rating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <FaStar key={i} className="text-yellow-500" />
        ) : (
          <FaRegStar key={i} className="text-gray-400" />
        )
      )}
    </div>
  );
};
