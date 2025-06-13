import { patients } from "@/lib/types";
import { SetStateAction, useState
 } from "react";



 export function Addpatient({setPatients, patients, setIsOpen}: any){
    const generateId = () => Math.floor(Math.random()*1000).toString()

    const [newPatient, setNewPatient] = useState(
        {
            id: generateId(),
            name: '',
            date_of_birth: ''
        }
    )

    //single one with neat trick to not repeat handle function for each input 
    const handleInputs = (e) => {
        setNewPatient({...newPatient, 
            [e.target.name]: e.target.value
        })
    }

    const addPatient = (e) => {
        if(newPatient.name === '' || newPatient.date_of_birth === '') return;
        setPatients([...patients, newPatient])
        setIsOpen(false)
    }

    return(
        <div className="flex justify-center">
            <div className="flex flex-col space-y-2  max-w-96 max-h-96">
                <label htmlFor="name">Name: </label>
                <input className="border border-green-200" onChange={handleInputs} name="name"/>
                <label htmlFor="name">Date of birth: </label><span className="text-xs italic">format: YYYY-MM-DD</span>
                <input onChange={handleInputs} className="border border-green-200" name="date_of_birth"/>
                <button onChange={handleInputs} onClick={addPatient}>Add Patient</button>
            </div>
          
        </div>

    )
 }