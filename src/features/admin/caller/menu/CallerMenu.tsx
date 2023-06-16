

import useDateTime from '@common/components/DateTime'
import ModalConfirm from '@common/components/modals/ModalConfirm'
import React from 'react'
import useCallerMenuModel from './CallerMenuModel'

export default function CallerMenu() {
  const date = useDateTime()
  const caller = useCallerMenuModel()
  return (
    <>
    <ModalConfirm open={caller.modalConfirm} onSave={caller.handleSave} onCancel={() => caller.setModalConfirm(false)} time={date.getDateTime("time")} />
     <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-10">
          <h1 className='text-white font-bold text-6xl text-center'>Calling Menu</h1>
          <button onClick={()=> caller.setModalConfirm(true)} className="py-8 px-80 bg-[#229BD8] rounded-lg text-4xl text-white font-bold">Maintenance</button>
          <button className="py-8 px-80 bg-[#229BD8] rounded-lg text-4xl text-white font-bold">Quality</button>
          <button onClick={()=> {}}className="py-8 px-80 bg-[#229BD8] rounded-lg text-4xl text-white font-bold">Leader</button>
        </div>
      </div>
      <div className="self-end pr-8 pb-8" onClick={()=>{}}>
        <button className="py-5 px-16 border-4 border-red-500 text-red-500 text-4xl font-bold" onClick={caller.onLogout}>Logout</button>
      </div>
    </>
  )
}
