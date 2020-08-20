import React from 'react';
// import './App.css';
import { Typography, Container, Card, CardContent, Button, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import { blue, green } from '@material-ui/core/colors';
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
    backgroundColor: blue[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: '0 auto',
  },
  icon: {
    fontSize: 32
  },
  alertStyle: {
    marginTop: 40
  },
  button: {
    margin: theme.spacing(1),
    color: '#fff'
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

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
            
              <GetAppIcon className={classes.icon}/>
            
            <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
              Unduh Bukti Pembayaran
            </Typography>
            <Typography >
              Tekan tombol dibawah untuk mengunduh
            </Typography>
            <ThemeProvider theme={theme}>
              <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf" style={{textDecoration: 'none'}}>
                {({ blob, url, loading, error }) => 
                (loading ? 'Loading document...' : 
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<GetAppIcon />}
                  >
                    Unduh
                  </Button>
                )}
              </PDFDownloadLink>
            </ThemeProvider>
          </CardContent>
          {/* <CardActions>
              <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf" style={{textDecoration: 'none'}}>
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <Button size="small">Download</Button>)}
              </PDFDownloadLink>
          </CardActions> */}
        </Card>
      </Container>
    </div>
  );
}

export default Receipt;
