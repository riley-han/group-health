import React from "react"

// const EntryCard = () => {
//   return (
//     <div className="relative w-[1000px]">
//       <div className="h-[250px] w-[350px] border solid border-gray-300 rounded-lg shadow-md bg-white hover:cursor-pointer z-10 hover:z-50"></div>
//       <div className="h-[250px] w-[350px] border solid border-gray-300 rounded-lg shadow-md absolute top-0 left-20 bg-white z-20 hover:z-50 hover:cursor-pointer"></div>
//       <div className="h-[250px] w-[350px] border solid border-gray-300 rounded-lg shadow-md z-30 bg-white absolute top-0 left-40 hover:z-50 hover:cursor-pointer"></div>
//     </div>
//   )
// }

// export default EntryCard

const EntryCard = () => {
  const date = "December 1, 2023"
  const sampleText = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  `
  return (
    <div className="h-[250px] w-[350px] border solid border-gray-300 rounded-lg shadow-md bg-white hover:cursor-pointer z-10 ">
      <div>
        <h1 className="text-xl font-bold">{date}</h1>
        <div className="w-[90%]">
          <p className="truncate text-gray-400">
            {sampleText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default EntryCard
