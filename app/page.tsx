import Image from 'next/image'

import PlusIcon from '@/public/icons/plus'
import Todos from '@/components/Todos/Todos'

export default function Home() {
  return (
    <main className="pt-8 pb-12 px-8 sm:px-4">
      <div className='px-4 md:px-2 flex justify-between sm:block'>
        <div>
          <h2 className='text-3xl font-semibold sm:text-2xl'>Good morning!</h2>
          <p>You got some task to do.</p>
        </div>
        <div className='w-[11rem] sm:hidden'>
          <button className='flex justify-between bg-schoolinka-primary text-white rounded-lg py-2.5 px-4 w-full'>
            <PlusIcon/>
            <p className='text-sm'>Create New Task</p>
          </button>
        </div>
      </div>
      <Todos/>
    </main>
  )
}
