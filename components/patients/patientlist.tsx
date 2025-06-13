import { patients } from '@/lib/types';
import Link from 'next/link';
import {useState} from 'react'




export function Patientlist({patient}: {patient: patients}){
    return(
        <Link href={`patients/${patient.id}`}>
        <div  className='flex flex-col border border-green-500 rounded-md p-3 m-3'>
        <p>Patient {patient.id}</p>
        <h1>Name: {patient.name}</h1>
        <p>Date of Birth: {patient.date_of_birth}</p>
        

    </div>
    </Link>
    )


}