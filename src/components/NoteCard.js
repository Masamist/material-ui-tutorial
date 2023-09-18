import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CardContent, IconButton, Typography } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

function NoteCard({note, handleDelete}) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
         action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
          }
          title={note.title}
          category={note.category}
        />
        <CardContent>
          <Typography variant='boby2' color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
        </Card>
    </div>
  )
}

export default NoteCard