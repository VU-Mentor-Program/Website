import React from "react";
import StatusMessage from "../components/StatusMessage";

const Decline = () => {
  return (
    <StatusMessage
      title="Cancelled Spot"
      message="Thank you for cancelling and giving a spot to someone else 😊"
    />
  );
};

export default Decline;
