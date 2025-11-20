import React from 'react'
import { Sora } from "next/font/google";
import Home from "@/components/homepage/Home";


const sora = Sora({ subsets: ["latin"] });


const page = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default page
