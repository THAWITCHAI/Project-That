import React from 'react'
import Sidebar from '../_components/Sidebar/Client/Sidebar'

type Props = {}

export default function Bookking({}: Props) {
  return (
    <div className='flex justify-between w-full h-full'>
        <Sidebar/>
        <div className='content w-5/6 border h-full'>Ok</div>
    </div>
  )
}