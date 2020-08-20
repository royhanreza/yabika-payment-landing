import React from 'react'
import { StyleSheet, Document, Page, Text, View, Image, Font } from '@react-pdf/renderer'

const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]

export const ReceiptPdf = ({ transaction }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.headerContainer}>
          <View style={styles.headerFirstColumn}>
            <Text style={styles.title}>Bukti Pembayaran</Text>
            <Text style={styles.name}>{ transaction.student.name }</Text>
            <Text style={styles.date}>NIS: { transaction.student.nis }</Text>
            <Text style={styles.date}>Tanggal: { transaction.completed_at }</Text>
            <Text style={styles.transactionNumber}>Nomor Transaksi: { transaction.transaction_number }</Text>
          </View>
          <View style={styles.headerSecondColumn}>
            <Image
              style={styles.image}
              src="https://1.bp.blogspot.com/-HG9OdjQpL2s/T3fLmGAmPjI/AAAAAAAAADk/8Fx0ELrLNzI/s1600/YBK+TRNS.png"
            />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.containerTitle}>Detail Transaksi</Text>
          { transaction?.paymentsDetails?.map((payment, index) => 
            <View style={styles.row} key={index}>
              <View style={styles.col}><Text style={styles.colText}>{`${payment.type_of_payment.name} - ${payment.month ? months[payment.month] : ''} - ${payment.school_year.name}`}</Text></View>
              <View style={styles.col}><Text style={styles.colText}>Rp{payment.amount}</Text></View>
            </View>
          ) }
          <View style={styles.row}>
            <View style={styles.col}><Text style={styles.totalTitle}>Total</Text></View>
            <View style={styles.col}><Text style={styles.total}>Rp{transaction.total}</Text></View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.containerTitle}>Metode Pembayaran</Text>
          <View style={styles.row}>
            <View style={styles.col}><Text style={styles.colText}>Metode Pembayaran</Text></View>
            <View style={styles.col}>
              <Text style={styles.colText}>
                { transaction.method === 1 ? 
                  transaction?.paymentsDetails[0]?.payment_method?.name
                  :
                  'Pembayaran Langsung'
                }
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

Font.register({
  family: 'Rubik',
  fonts: [
  {src: 'https://cdn.jsdelivr.net/npm/rubik-font@0.0.3/fonts/Rubik-Medium.ttf'},
  {src: 'https://cdn.jsdelivr.net/npm/rubik-font@0.0.3/fonts/Rubik-Bold.ttf', fontWeight: 600}
  ]
});
  
Font.register({
  family: 'Roboto',
  fonts: [
  {src: 'https://cdn.jsdelivr.net/npm/roboto-fontface@0.10.0/fonts/roboto/Roboto-Regular.woff'},
  ]
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16,
    fontFamily: 'Rubik',
    color: 'green'
  },
  name: {
    fontSize: 13,
    marginTop: 15
  },
  date: {
    fontSize: 13,
    marginTop: 3
  },
  transactionNumber: {
    fontSize: 13,
    marginTop: 3
  },
  headerFirstColumn: {
    width: '65%',
    textAlign: 'left',
  },
  headerSecondColumn: {
    width: '35%',
    textAlign: 'right'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    width: 50,
  },
  container: {
    marginTop: 30
  },
  containerTitle: {
    fontSize: 14,
    fontFamily: 'Rubik',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'green'
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  colText: {
    fontSize: 13,
    marginTop: 10,
  },
  totalTitle: {
    fontSize: 13,
    marginTop: 10,
    fontFamily: 'Rubik',
    fontWeight: 500,
  },
  total: {
    fontSize: 13,
    marginTop: 10,
    fontFamily: 'Rubik',
    fontWeight: 500,
  },
  imageLunas: {
    width: 200
  }

});
