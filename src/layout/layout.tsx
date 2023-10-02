import React from "react"

const AppLayout = ({ children }: any) => {
  return (
    <div>
      <div className="h-[45px] w-full bg-gray-800 m-b4"></div>
      <div>{children}</div>
    </div>
  )
}

export default AppLayout
