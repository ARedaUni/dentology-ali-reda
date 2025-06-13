'use client'
import {useState} from 'react'
import patientData from '@/lib/data/patients.json'
import { Patientlist } from '@/components/patients/patientlist'
import { Input } from '@/components/ui/input'
import { patients } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Addpatient } from '@/components/patients/addpatient'

export default function Patients(){
   

    const [patients, setPatients] = useState<patients[]>(patientData)
    const [isOpen, setIsOpen] = useState(false);
    

    return (
        <div className='min-h-screen '>
         {isOpen ? <Addpatient setIsOpen={setIsOpen} patients={patients} setPatients={setPatients} /> :
            <div className='flex flex-col'>
                <div className='flex justify-between mx-3 my-3'>
            <h1 className='text-3xl '>Patients</h1>
            <div className='flex'>
            <Button onClick={() => {setIsOpen(true)}}>Add Patient</Button>
           
            </div>
            </div>

            {patients && patients.map(patient => {
                return (
                    <Patientlist setPatient={setPatients} key={patient.id} patient={patient} />
                )
            })}
            </div>
}

          
        </div>
    )

}



