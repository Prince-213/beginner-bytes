import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <div className=" top-0 overflow-hidden left-0 w-full bg-white h-screen flex items-center justify-center">
      <Image
        src={"/loading.gif"}
        alt="Loading"
        width={100}
        height={100}
        className=" "
      />
    </div>
  );
};

export default loading;
