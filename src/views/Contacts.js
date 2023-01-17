import React from 'react'
import NoteCard from './Notecard.js'
import '../style/Contacts.css'
import Grid from '@mui/material/Grid';

const contacts = [
  { name: "Dwight LaGrone", title: "GIS Manager/IT", employer: "City of Sherman", Address: "420 N Rusk St", city: "Sherman, Tx 75090", phone: "(903) 892-7310", email:"dwightl@cityofsherman.com" },
  { name: "Jerry Pace", title: "GIS Technician/Engineering", employer: "City of Sherman", Address: "220 W Mulberry St", city: "Sherman, Tx 75090", phone: "(903) 892-7621", email:"jerryp@cityofsherman.com" },
 
];


function Contacts() {
  return (
    <div class="font-serif lg:w-5/12 lg:m-auto">      
      <h2 class="font-serif text-4xl mt-10 mb-10 lg:mb-10 lg:mt-14 lg:mb-2 lg:text-5xl">Contacts Page</h2>
      <Grid container spacing={16} class="grid grid-cols-2 place-items-center" >
        {contacts.map(contact => (
          <Grid item key={contact.id} xs="{12} md={8} lg={4}" >
            <NoteCard contact={contact} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Contacts;