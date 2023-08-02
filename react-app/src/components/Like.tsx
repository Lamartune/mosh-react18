import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  const toggleStatus = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <AiFillHeart color="#ff6b81" size={20} onClick={toggleStatus} />;

  return <AiOutlineHeart color="#ff6b81" size={20} onClick={toggleStatus} />;
};

export default Like;
