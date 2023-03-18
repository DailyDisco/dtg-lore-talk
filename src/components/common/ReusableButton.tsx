import React from "react";

const ReusableButton = ({ ButtonName }: { ButtonName: string }) => {
  return (
    <div>
      <button>{ButtonName}</button>
    </div>
  );
};

export default ReusableButton;
