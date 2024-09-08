import React from 'react'
import Layout from '../Layout'
import Calendar from './Calander-Date/Calander'

export const SelectDate = () => {
  return (
    <Layout>
  <div className='flex flex-col justify-center content-center text-white text-center'>
    <div className='pt-64 text-2xl font-bold mb-4'>
    Select Your Event Date and Time
    </div>
    <Calendar/>
</div>
    </Layout>
  )
}