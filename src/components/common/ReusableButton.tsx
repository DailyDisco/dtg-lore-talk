import { useRouter } from "next/router";
import React from "react";

const ReusableButton = ({ ButtonName }: { ButtonName: string }) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/user/messages", "/user/messages");
  };
  return (
    <div>
      <button
        onClick={() => onClick()}
        className="rounded:lg bg-blue-500 py-2 font-bold text-white hover:bg-blue-700"
      >
        {ButtonName}
      </button>
    </div>
  );
};

export default ReusableButton;
