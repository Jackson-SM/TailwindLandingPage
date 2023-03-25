import React from 'react'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
export const Link = ({children,...props}: LinkProps) => {
  return (
    <a className="text-sm hover:text-zinc-300 transition-all relative ease duration-100 overflow-hidden efore:content-[''] before:w-full before:h-full before:bg-red-500 before:absolute before:z-10 before:top-[97%] before:right-[100%] hover:before:right-0 before:transition-all before:ease before:duration-200" {...props}>{children}</a>
  )
}
