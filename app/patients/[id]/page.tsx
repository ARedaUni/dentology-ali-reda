'use client'

import PatientsData from "@/lib/data/patients.json"
import AppointmentsData from "@/lib/data/appointments.json"
import { useEffect, useState } from "react";
import { appointments, patients } from "@/lib/types";
import { use } from 'react'
import { Patientlist } from "@/components/patients/patientlist";
import { Appointmentslist } from "@/components/appointments/appointmentlist";
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
        <h2 className="text-3xl">Patient:</h2>
    <Patientlist setPatient={setPatient} patient={patient[0]} />

    <div className="flex flex-col">
        <h2 className="text-3xl">Appointments:</h2>
        {appointments.length > 0 ? appointments.map(appointment => {
            return (<Appointmentslist key={appointment.id} appointment={appointment} />)
        })
        : <div>Patient has made no appointments</div>
        
        }
    </div>
    </div>
  )

}