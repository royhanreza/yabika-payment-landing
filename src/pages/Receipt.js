import React, { useEffect, useState } from 'react';
// import './App.css';
import { Typography, Container, Card, CardContent, Button, createMuiTheme, ThemeProvider, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import { blue, green } from '@material-ui/core/colors';
import { PDFDownloadLink } from '@react-pdf/renderer'
import { ReceiptPdf } from './ReceiptPdf';
import { useParams } from 'react-router-dom';
import axios from 'axios'


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
  transactionNumber: {
    color: green[500],
  },
  loadingCard: {
    minWidth: 275,
    marginTop: 20,
    textAlign: 'center'
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function Receipt() {
  const classes = useStyles();
  const {id} = useParams();
  const [loading, setLoading] = useState(true)
  const [transaction, setTransaction] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions/action/get-receipt/' + id).then(res => {
      console.log(res.data)
      setLoading(false)
      setTransaction(res.data)
    }).catch(err => {
      console.log(err)
      setLoading(false)
    })
  }, [id])

  if(loading) {
    return (
      <Container maxWidth="sm">
        <Card className={classes.loadingCard}>
          <CardContent>
            <CircularProgress />
          </CardContent>
        </Card>
      </Container>
    )
  } else {
    return (
      <div className={classes.rootContainer}>
        <Container maxWidth="sm">
          <Card className={classes.rootCard}>
            <CardContent>
              <Typography >
                Nomor Transaksi
              </Typography>
              <Typography className={classes.transactionNumber} >
                {transaction?.transaction_number}
              </Typography>
              <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                Unduh Bukti Pembayaran
              </Typography>
              <ThemeProvider theme={theme}>
                {transaction ?
                  <PDFDownloadLink document={<ReceiptPdf transaction={transaction} />} fileName={transaction?.transaction_number + '.pdf'} style={{textDecoration: 'none'}}>
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
                </PDFDownloadLink> : <span style={{textAlign: 'center'}}>Loading...</span>
                }
              </ThemeProvider>
            </CardContent>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Receipt;
