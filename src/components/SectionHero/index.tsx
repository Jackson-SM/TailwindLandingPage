import React from 'react'

export const SectionHero = () => {
  return (
    <section className="min-h-[80vh] relative flex items-center justify-center flex-col text-slate-200 gap-6 bg-gradient-to-b from-transparent via-transparent via-30% to-zinc-900">
      <img src="./src/assets/hero-pattern.jpg" alt="" className="absolute w-full h-full object-cover -z-10" />
      <h1 className="text-3xl sm:text-5xl animate-pulse">This is an example website using TailwindCSS.</h1>
      <p className="text-slate-400 text-sm">This is a text for example my website with the objective practice languages, technologies and skills.</p>
    </section>
  )
}
