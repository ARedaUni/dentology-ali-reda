'use client'
import {useState, useEffect} from 'react'
import patientData from '@/lib/data/patients.json'
import { Patientlist } from '@/components/patients/patientlist'

export default function Patients(){
    type patientdata = {
        id: string,
        name: string,
        date_of_birth: string
    }

    const [patients, setPatients] = useState<patientdata[]>(patientData)

   
    

    return (
        <div className='min-h-screen '>
      
            <div className='flex flex-col '>
            <h1>Patients</h1>
            {patients && patients.map(patient => {
                return (
                    <Patientlist key={patient.id} patient={patient} />
                )
            })}
            </div>
          
        </div>
    )

}



