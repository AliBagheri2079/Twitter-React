import React from "react";
import { Img } from "react-image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const UserLogo = ({ imageUrl }) => {
  return (
    <Img
      src={[imageUrl, "../../img/avatar_first.png"]}
      loader={<LazyLoadImage alt={"user-logo"} effect="blur" src={imageUrl} />}
      alt="user-logo"
    />
  );
};

export default UserLogo;
