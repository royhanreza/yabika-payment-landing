import React from 'react';
// import './App.css';
import { Typography, Container, Card, CardContent, Avatar, CardActions, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import { green } from '@material-ui/core/colors';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer'

const MyDoc = () => (
  <Document>
    <Page>
      <Text>THIS IS PDF</Text>
    </Page>
  </Document>
)

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    flexGrow: 1,
    textAlign: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  rootCard: {
    minWidth: 275,
    marginTop: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  pos: {
    marginBottom: 12,
    marginTop: 10,
  },
  iconContainer: {
    color: '#fff',
    backgroundColor: green[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: '0 auto',
  },
  icon: {
    fontSize: 32
  },
  alertStyle: {
    marginTop: 40
  }
}));

function Receipt() {
  const classes = useStyles();
  return (
    <div className={classes.rootContainer}>
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
      <Container maxWidth="sm">
        <Card className={classes.rootCard}>
          <CardContent>
            <Avatar className={classes.iconContainer}>
              <CheckIcon className={classes.icon}/>
            </Avatar>
            <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
              Receipt
            </Typography>
            <Typography variant="h5" component="h2">
              Transaksi Selesai
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Segera lakukan pembayaran jika anda menggunakan Bank Transfer
            </Typography>
            {/* <Typography variant="body2" component="p">
              Transaksi telah berhasil dibuat dan menunggu pembayaran atau pembayaran berhasil dilakukan
              <br />
              {'"a benevolent smile"'}
            </Typography> */}
            <Alert severity="info" className={classes.alertStyle}>Anda bisa menutup halaman ini</Alert>
          </CardContent>
          <CardActions>
              <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf" style={{textDecoration: 'none'}}>
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <Button size="small">Download</Button>)}
              </PDFDownloadLink>
            
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

export default Receipt;
