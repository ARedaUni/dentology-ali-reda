import { patients } from '@/lib/types';
import Link from 'next/link';
import {useState} from 'react'




export function Patientlist({patient}: {patient: patients}){
    return(
        <Link href={`patients/${patient.id}`}>
        <div  className='flex flex-col'>

        <h1>{patient.name}</h1>
        <p>{patient.date_of_birth}</p>
        <p>{patient.id}</p>

    </div>
    </Link>
    )


}