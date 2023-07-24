import React from "react";

type Props = {
  params: {
    username: string;
  };
};

const Userboard = (props: Props) => {
  console.log(props);

  return <div>Userboard</div>;
};

export default Userboard;
