import React, { useEffect, useRef, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const preloader = useRef(null);

  const removePreloader = () => {
    setLoading(false);
    preloader.current.remove();
  };

  useEffect(() => {
    removePreloader();
  }, []);

  const preStyle = {
    backgroundColor: "#15202b",
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: 99,
  };

  return (
    <div
      className="preloader d-flex justify-content-center align-items-center"
      ref={preloader}
      style={preStyle}
    >
      <HashLoader loading={loading} size={150} color="#1a91da" />
    </div>
  );
};

export default Preloader;
