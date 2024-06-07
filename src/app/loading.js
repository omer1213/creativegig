"use client";
import React from "react";

function Loading() {
  const [loading, Setloading] = React.useState(true);
  setTimeout(() => {
    Setloading(false);
  }, 1000);

  return (
    <div
      style={{
        display: loading ? "block" : "none",
        color: "red",
        margin: "20%",
      }}
    >
      Loadin page for omer...
    </div>
  );
}

export default Loading;
