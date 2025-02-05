import React, { useState } from "react";
import { AiFillSmile, AiOutlineComment, AiOutlineSmile } from "react-icons/ai";
import DogPhoto from "../../images/dog.jpg";
import Title from "../components/Title";

const LikeDogPhotoApp = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);

    if (like) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="container text-center">
      <Title title={"Like My Dog"} />
      <Title
        title={`Likes ${count}`}
        classes={"subtitle"}
        style={{ width: 300, cursor: "pointer" }}
      />
      <div className="card card-dark m-auto">
        <div className="card-header fs-xl">
          <AiOutlineSmile className="mr-2" />
          <small>Cute Dog</small>
        </div>
        <img
          alt="dog"
          src={DogPhoto}
          style={{ hight: "fit-content" }}
          onDoubleClick={toggleLike}
        />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />
          {like ? (
            <AiFillSmile className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineSmile onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LikeDogPhotoApp;
