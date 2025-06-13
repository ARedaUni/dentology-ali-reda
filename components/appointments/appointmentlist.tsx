import { appointments, patients } from '@/lib/types';
import Link from 'next/link';
import {useState} from 'react'




export function Appointmentslist({appointment}: {appointment: appointments}){
    return(
        <div  className='flex flex-col border border-red-500 rounded-md p-3 m-3'>
        <p>Appointment: {appointment.type}</p>
        <p>Status: {appointment.status}</p>
        <p>Time and date: {appointment.date_and_time.replace('T', ' ')}</p>
        

    </div>
    )


}