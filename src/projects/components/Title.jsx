import React from "react";

const Title = ({ classes, title }) => {
  return (
    <h1 className={classes ? classes : "title text-center"}>
      {title ? title : "Title"}
    </h1>
  );
};

export default Title;
