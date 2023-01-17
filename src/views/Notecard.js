import React from 'react'
import '../style/Notecard.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function NoteCard({ contact }) {
  return (
    <div class="flex text-center p-12">
        <Card elevation={10} >
            <CardHeader
                title={ contact.name }
                subheader={ contact.title }       
            >
            </CardHeader>
            <CardContent class="p-8 w-60">
                <Typography variant="body1" color="textSecondary" > { contact.employer }</Typography>
                <Typography variant="body1" color="textSecondary"> { contact.address }</Typography>
                <Typography variant="body1" color="textSecondary"> { contact.city }</Typography>
                <Typography variant="body1" color="textSecondary"> { contact.phone }</Typography>
                <div className="card__email">
                    <a
                        href="mailto:{ contact.email }"
                        rel="noreferrer"
                        target="_blank"
                    >   
                        Click to Email
                    </a>
                </div>                
            </CardContent>
        </Card>
    </div>
  )
}

export default NoteCard