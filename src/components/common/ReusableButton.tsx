import { useRouter } from "next/router";
import React from "react";

const ReusableButton = ({ ButtonName }: { ButtonName: string }) => {
  const router = useRouter();
  const onClick = () => {
    if (ButtonName === "Create a Thread") {
      router.push("/threads/createThread", "/threads/createThread");
    }
    if (ButtonName === "Messages") {
      router.push("/messages", "/messages");
    }
  };
  return (
    <div>
      <button
        onClick={() => onClick()}
        className="rounded:lg bg-blue-500 p-2 font-bold text-white hover:bg-blue-700"
      >
        {ButtonName}
      </button>
    </div>
  );
};

export default ReusableButton;
