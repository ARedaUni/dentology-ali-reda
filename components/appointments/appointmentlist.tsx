import { appointments, patients } from '@/lib/types';
import Link from 'next/link';
import {useState} from 'react'

const returnStatusColor = (status:string) => {
    if(status==="Attended"){
        return 'border-green-500'
    } else  if(status==="Scheduled"){
        return 'border-yellow-500'
    } else if(status==="Cancelled"){
        return 'border-red-500'
    }
  }


export function Appointmentslist({appointment}: {appointment: appointments}){
    return(
        <div  className={`flex flex-col border ${returnStatusColor(appointment.status)}  rounded-md p-3 m-3`}>
        <p>Appointment: {appointment.type}</p>
        <p>Status: {appointment.status}</p>
        <p>Time and date: {appointment.date_and_time.replace('T', ' ')}</p>
        

    </div>
    )


}