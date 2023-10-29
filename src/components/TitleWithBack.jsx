import * as Icons from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TitleWithBack = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-5">
      <Icons.FaArrowLeft
        className="inline-block mr-2 cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
};

export default TitleWithBack;
