import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";




const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });
  
  const pdf = () => {
    return (
      <>
      <Document>
        <Page style={styles.body}>
          <Text style={styles.header} fixed></Text>
          
          <Text style={styles.text}>
            The Credit Line Decrease (CLD) model is used to identify high risks accounts with the objective 
            to mitigate potential losses by decreasing their credit limit. The model will be used on all the RRB 
            credit card customers. RRB branded credit card is a core product of RRB and accounts for ~$90 million 
            ANR with ~20 million open accounts till Dec’22. The model has been built using Dec 2018 development 
            vintage.  February 2018 and April 2019 has been used for out-of-time (OOT) validations. 
            The model has been built on entire card customers except for the customers whose past 12 
            months historical data is not known. The model estimates the likelihood of an account having 
            a status of 60+ days past due at the end of 18 months(classified as ‘bad’ hereafter in this document).
            The model has been built on both internal as well as external data. The external credit bureau data is 
            received monthly through a batch process for the Existing Card Members (ECM). In addition, the model 
            leverages daily data – daily bureau (in addition to batch bureau), daily triggers and a few daily on-us 
            attributes – to allow the identification of high risk accounts before they utilize the remaining 
            open-to-buy amount. 
            Model Overview The CLD model is developed as an account level score and scores all the ECM consumer accounts.
            It is developed using on-us ECM information (daily and cycle-end), batch bureau (monthly) and 
            Bureau trigger (daily) information. 
             The use of daily data in the model development allows the score to 
             adjust according to the changes observed at a daily level and 
          </Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />

         <div className="flex justify-center rounded">
         <button className="bg-gray-600 h-50w-70 rounded m-14 text-white p-7">Download Pdf</button>
         </div>
        </Page>
      </Document>

    </>  
    );
  };
  
  export default pdf;