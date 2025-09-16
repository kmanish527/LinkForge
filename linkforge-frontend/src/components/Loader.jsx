import React from 'react'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Loader() {
  return (
    <div className="w-full h-80 flex flex-col items-center justify-center">
      <DotLottieReact
          src="https://lottie.host/dd482c72-0a34-45b8-bc6d-e81ff3afa4ec/lDc8nay5DH.lottie"
          loop
          autoplay
          style={{ width: "300px" }}
        />
    </div>
  )
}

export default Loader