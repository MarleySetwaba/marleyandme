import React from 'react'

const Tags = ({title} : {title: string}) => {
  return (
    <a className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-davys_gray-900 text-davys_gray hover:bg-davys_gray-700" href="#">
    {title}
  </a>
  )
}

export default Tags