import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import ContactForm from './form';
import GoogleMap from './googlemap';



const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    backgroundColor: theme.palette.background.emphasis,
  },
  midColumn: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4)
    }
  }
}));

export default function Contact(props) {
  const classes = useStyles();

  const content = {
    'header': 'Lorem ipsum dolor sit amet',
    'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.',
    'contact1': 'Address',
    'contact1-desc1': '1652 Cordia Cir',
    'contact1-desc2': ' Newton, North Carolina(NC), 28658',
    'contact2': 'Email',
    'contact2-desc': 'hello@mui.dev',
    'contact3': 'Social Media',
    'contact4': 'Phone',
    'contact4-desc': '(318) 285-9856',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
            
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.midColumn}>
                <Box display="flex" mb={3}>
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <RoomIcon color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc2']}</Typography>
                  </Box>
                </Box>
                <Box display="flex">
                  <div>
           
                    <Avatar className={classes.iconWrapper}>
                      <EmailIcon color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact2']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact2-desc']}</Typography>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              
               
              <Box display="flex">
                <div>
                
                 
                  
                </div>
                <Box ml={2}>
                <ContactForm/>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}