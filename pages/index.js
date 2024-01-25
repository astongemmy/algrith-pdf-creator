'use client';

import { Document, StyleSheet, PDFDownloadLink, View, PDFViewer, Page, Text, Image, Font } from '@react-pdf/renderer';
import Head from 'next/head';

import Layout from '../components/Layout';

// Register fonts to be used for the PDF document
Font.register({
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  family: 'Oswald'
});

// Create a style object for the PDF document
const styles = StyleSheet.create({
  body: {
    fontSize: 16,
  },
  header: {
    backgroundColor: 'rgba(0, 160, 198, 0.7)',
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingBottom: 24,
    display: 'flex',
    width: '100vw',
    paddingTop: 12,
    gap: 12
  },
  top: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    display: 'flex'
  },
  meta: {
    backgroundColor: 'rgba(209, 213, 219, 0.3)',
    color: 'rgba(107, 114, 128, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'right',
    borderRadius: 8,
    display: 'flex',
    fontSize: 14,
    padding: 8,
    gap: 12
  },
  logo: {
    borderRight: 'solid 1px rgba(107, 114, 128, 1)',
    paddingRight: 12,
    height: 24,
    width: 80
  },
  date: {
    paddingVertical: 12,
    textAlign: 'right',
    width: 'auto'
  },
  title: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: 700,
    fontSize: 24
  },
  content: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingBottom: 24,
    display: 'flex',
    paddingTop: 42,
    gap: 18
  },
  entry: {
    flexDirection: 'row',
    display: 'flex',
    gap: 20
  },
  response: {
    color: 'rgba(107, 114, 128, 1)',
  },
  label: {
    fontWeight: 700,
    color: 'black',
    width: '20%'
  },
  image: {
    marginHorizontal: 100,
    marginVertical: 15,
  },
  pageNumber: {
    position: 'absolute',
    textAlign: 'center',
    color: 'grey',
    fontSize: 12,
    bottom: 30,
    right: 0,
    left: 0
  }
});

// PDF document data
const pdf = {
  name: 'Algrit PDF Creator',
  author: 'Algrith PDF',
  creator: 'Algrith PDF Creator',
  producer: 'Algrith PDF producer',
  size: 'A4',
  body: [
    {
      type: 'text',
      text: 'Lorem ipsum something...',
      label: 'Name',
      src: '',
    },
    {
      type: 'text',
      text: 'Lorem ipsum something...',
      label: 'Name',
      src: '',
    },
    {
      type: 'image',
      text: 'Lorem ipsum something...',
      label: 'Name',
      src: '/images/illustrations/collaboration.jpeg',
    }
  ]
};

const PDFTemplate = () => (
  <Document style={{ width: '100vw' }} title={pdf.name} author={pdf.author} creator={pdf.creator} producer={pdf.producer}>
    <Page style={styles.body} size={pdf.size}>
      <View style={styles.header}>
        <View style={styles.top}>
          <View style={styles.meta}>
            <Image src="https://ff23c1effde3ee970c07ac1e3afdec6047941061d8b6cc53da588f1-apidata.googleusercontent.com/download/storage/v1/b/fplsblog/o/formplus-white-logo.png?jk=AanfhSDf3ODYwaGaibB8A2_NtLp1Bh18oIEuQx7uU_J07l9gFkd18U6Q8iKBtoXyHvqTPdgd2U9_TxW5oiTgXmzelhHXkqaI-P7wk2wrg8oAq-be514ExgZKeZ4zy0Rfzou7H5dYX27FEx8bC7bqIkQtwzzIr_FgkvuPrw39-F_soMb_8jMxVIwGAQeEgMmU7M_5FIskjertxDy232Fd80ZzvgZi8AzjKq3gNxTX6uBJ4pVkZtpa5E-GrTe-ZR1sB51ylAdAqfpGPzxoKAQ-sumAYze6yfR_lsru40Bk0PEPmAAiInabWGp5DY3eN4UoeruV_UqS8B6oriSsXY5MyrnNH7g4uXykDMWodNdIEPsuKpbj8B8zWc7HVzSqtIJlFat6HJWZQJVKxUpl1YKFR5xI4nCSorxqEBiapVtibb7e7rDfF235HhiJn5OdigzoA5j5FFQahkx4bgw99sgiJ1tWHtXgZkjvRp4v5ELwSHNOSzTkP2SgizfhEKYYXDJ8eBA_C9EkHVdl_UhpPWQkwA6n8_UIa7fdEnf0viqBdsRQQo08TVBkwnDMGR0pdbq1dJ6uMjtYlqIBR94qhDqd2aTHZDg7NxPHKsMjfefWnC2LllaHA7i9LSg5vD4PhIBcQoNwD3CjVqnp5ZgPyGry3yLRQq3Op5YWEVTR0WLv16R2AZYCQENTeYLpGPtrOqmHPnGFOfSnTZoO5RvFS5hsQTSXJAwJo_alPQq0c4iik8ZZxsq0kshzXZkcHRmJQ_Y8bjPcYj3qMmn8rPklCiqyIh4EBngoO-FoE0puPxP-plYo9dtnLJCUEdzEq2nMLIgiwd2PljDzAvTy-80_mBQwvBegGcI9DO4rnfwtWW0RNZZA2UEFUNYKhx-VPPEG5XPI9yiJWUcKqd8Cxji1ShCLcaJh4K-uRY6vc53nKmIZb4gPI6boGaSBWsrehj2ifYZMUGSJdbrhqF0lxLmEcB5LazwZel7vYtyTq7ou8fQEbISGgJPxLeiJk_z6W6Eq2B62ZSL_CnZaXWahHKsiFLIvk0BMH1QFGA31hlU0jnYxgTqYIBaW4fmy12C5MCFYFAzUL6ry6QxHnJeEBRFGc85g2GnCymqSeDqcSgvCyHao-M37zXjWmdTT2Sa5x_7vKhm7H9JVmQ&isca=1" style={styles.logo} />
            <Text>Document ID: 29782763736836564</Text>
          </View>

          <Text style={styles.date}>
            Friday, January 5th, 2024
          </Text>
        </View>

        <Text style={styles.title}>
          Algrith PDF Document
        </Text>
      </View>

      <View style={styles.content}>
        {pdf.body.pages.map(({ label, type, src, text }, index) => (
          <View key={index} style={styles.entry}>
            <Text style={styles.label}>{label}: </Text>
            
            {type === 'image' ? (
              <Image style={styles.response} src={entry.src} />
            ) : (
              <Text style={styles.response}>{entry.text}</Text>
            )}
          </View>
        ))}
      </View>

      <Text style={styles.pageNumber} fixed>
        Created with Algrith PDF Creator
      </Text>

      {/* <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed /> */}
    </Page>
  </Document>
);

const Index = () => {
	return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
        <title> Home | Algrith PDF Creator </title>
      </Head>

      <main>
        lore
        {/* <PDFDownloadLink document={<ESignPDFTemplate />} fileName="e-sign-preview.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink> */}

        {/* <PDFViewer frameBorder="0" showToolbar={false} style={{ width: '100%', height: '100%' }}>
          <PDFTemplate />
        </PDFViewer> */}
      </main>
    </Layout>
  );
};

export default Index;