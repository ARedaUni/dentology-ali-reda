export type patients = {
    id: string, 
    name: string,
    date_of_birth: string
}


export type appointments = {
    id: string,
    type: string,
    status: string,
    date_and_time: string,
    patientid: string
}