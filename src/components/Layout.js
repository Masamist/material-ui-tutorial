import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'


const drawerWidth = 240

function Layout({ children }) {
  const history = useHistory()

  const theme = {
    spacing: 8,
  }

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (e, id, path) => {
    setSelectedIndex(id)
    history.push(path)
  };

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/',
      id:0,
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create',
      id:1,
    },
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      {/* app bar */}
        <AppBar>
          <Toolbar>
            <Typography variant='h4' color="secondary" pl={30}>
              Welcome to the ninjya note.
            </Typography>
          </Toolbar>
        </AppBar>
      {/* side drawer */}
      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor="left"
        classes={{ paper: theme.drawerPaper}}
      >
        <Box sx={{ m:2}}>
          <Typography variant='h5'>
            Ninja Notes
          </Typography>
        </Box>
          

        {/* list / links */}
        <List>
          {menuItems.map(item => (
            <ListItemButton
              selected={selectedIndex===item.id}
              onClick={(e) => handleListItemClick(e, item.id, item.path)}
              
              key={item.text}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box pt={11}>
        {children} 
      </Box>
        
    </Box>
  )
}

export default Layout