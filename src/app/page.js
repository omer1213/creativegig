"use client";
import Image from "next/image";
import DrawerAppBar from "./navBar/navBar";
import Home2 from "./home2/page";
import React from "react";
// import Loading from "./loading";

export default function page() {
  // const [loading, Setloading] = React.useState(false);
  // setTimeout(() => {
  //   Setloading(true);
  // }, 12000);
  return (
    <>
      <div>
        <Home2 />
      </div>
      {/* <div style={{display:loading?"block":"none",zIndex:"1000"}}>
      <Loading/>
      style={{display:loading?"none":"block",zIndex:"1000"}}
    </div> */}

      {/* <DrawerAppBar /> */}
      {/* <Home /> */}
    </>
  );
}
