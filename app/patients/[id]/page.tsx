'use client'

import PatientsData from "@/lib/data/patients.json"
import AppointmentsData from "@/lib/data/appointments.json"
import { useEffect, useState } from "react";
import { appointments, patients } from "@/lib/types";


// export default async function IndividualPatient({
//     params,
//   }: {
//     params: Promise<{ slug: string }>
//   }){

//     const { slug } = await params
    


//     return (
// <div></div>
//     )


// }


import { use } from 'react'
import { Patientlist } from "@/components/patients/patientlist";
 
type Params = Promise<{ id: string }>
 
export default function Page(props: {
  params: Params
}) {
  const {id} = use(props.params)

  useEffect(() => {
    setAppointments(appointments.filter(appointment => {
        return appointment.patientid === id
    }))
    setPatient(patient.filter(patient => {
        return patient.id === id
    }))
  }, [])

  const [appointments, setAppointments] = useState<appointments[]>(AppointmentsData);
  const [patient, setPatient] = useState<patients[]>(PatientsData);


  return(
    <div>
    <Patientlist patient={patient[0]} />

    <div className="">
        {appointments.length === 1 ? 
            <div>
        Appointment type: {appointments[0].type}
        Appointment status: {appointments[0].status}
        Appointment date: {appointments[0].date_and_time}
        </div>
        : <div></div>
        
        }
    </div>
    </div>
  )

}