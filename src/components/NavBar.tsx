import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">   
        <Container maxWidth="xl">    
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              React Mortgage Calculator
            </Typography>
          </Toolbar>
        </Container>
        </AppBar>
      </Box>
    )
}

export default NavBar;