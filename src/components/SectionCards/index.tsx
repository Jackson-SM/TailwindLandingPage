import React from 'react'

import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.svg'
import tailwindcss from '../../assets/tailwindcss.svg'

export const SectionCards = () => {
  return (
    <section className="bg-zinc-900 flex justify-between p-10">
      <div className='bg-zinc-800 w-80 h-44 rounded-md shadow-lg shadow-cyan-200/50 transition ease-in-out duration-200 hover:shadow-cyan-400/50 relative flex flex-col gap-[10px]'>
        <div className="w-20 h-20 my-[-40px] overflow-hidden bg-zinc-900 p-5 rounded-full mx-auto">
          <img src={javascript} alt="" />
        </div>
        <span className="text-3xl text-gray-300 self-center justify-self-end my-auto">Javascript</span>
      </div>

      <div className='bg-zinc-800 w-80 h-44 rounded-md shadow-lg shadow-cyan-200/50 transition ease-in-out duration-200 hover:shadow-cyan-400/50 relative flex flex-col gap-[10px]'>
        <div className="w-20 h-20 my-[-40px] overflow-hidden bg-zinc-900 p-5 rounded-full mx-auto">
          <img src={react} alt="" />
        </div>
        <span className="text-3xl text-gray-300 self-center justify-self-end my-auto">ReactJS</span>
      </div>

      <div className='bg-zinc-800 w-80 h-44 rounded-md shadow-lg shadow-cyan-200/50 transition ease-in-out duration-200 hover:shadow-cyan-400/50 relative flex flex-col gap-[10px]'>
        <div className="w-20 h-20 my-[-40px] overflow-hidden bg-zinc-900 p-5 rounded-full mx-auto">
          <img src={tailwindcss} alt="" />
        </div>
        <span className="text-3xl text-gray-300 self-center justify-self-end my-auto">TailwindCSS</span>
      </div>
    </section>
  )
}
