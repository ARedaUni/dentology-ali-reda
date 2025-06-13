import { patients } from '@/lib/types';
import Link from 'next/link';
import {Dispatch, SetStateAction, useState} from 'react'




export function Patientlist({patient, setPatient}: {patient: patients, setPatient: Dispatch<SetStateAction<patients[]>>}){
    return(
        <div  className='flex flex-col border border-green-500 rounded-md p-3 m-3'>
        <Link href={`patients/${patient.id}`}>
        
        <p>Patient {patient.id}</p>
        <h1>Name: {patient.name}</h1>
        <p>Date of Birth: {patient.date_of_birth}</p>
        </Link>
        <button className='bg-red-200' onClick={(e) => {e.stopPropagation(); setPatient(prev => prev.filter(item => {
            return item.id !== patient.id
        }))}}>Delete</button>

    </div>
    
   
    )


}