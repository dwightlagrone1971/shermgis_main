import React from 'react'
import NoteCard from './Notecard.js'
import '../style/Contacts.css'
import Grid from '@mui/material/Grid';

const contacts = [
  { name: "Dwight LaGrone", title: "GIS Manager", department: "Information Technology", employer: "City of Sherman", Address: "420 N Rusk St", city: "Sherman, Tx 75090", phone: "(903) 892-7310", email:"dwightl@cityofsherman.com" },
  { name: "Jerry Pace", title: "GIS Technician", department: "Engineering", employer: "City of Sherman", Address: "220 W Mulberry St", city: "Sherman, Tx 75090", phone: "(903) 892-7621", email:"jerryp@cityofsherman.com" },
  { name: "Cody Franks", title: "GIS Technician", department: "Public Works", employer: "City of Sherman", Address: "100 S Rusk St", city: "Sherman, Tx 75090", phone: "(903) 892-7195", email:"codyf@cityofsherman.com" },
];


function Contacts() {
  return (
    <div class="font-serif sm:mt-4 lg:w-5/12 lg:m-auto">      
      <h2 class="font-serif text-4xl mt-10 mb-10 lg:mb-10 lg:mt-14 lg:mb-2 lg:text-5xl">GIS Team</h2>
      <Grid container spacing={0} class="grid grid-cols-1 lg:grid-cols-3 place-items-center" >
        {contacts.map(contact => (
          <Grid item key={contact.id} xs="sm={12} md={8} lg={4}" >
            <NoteCard contact={contact} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Contacts;