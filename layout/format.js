import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import Newsletter from '../components/newsletter'

export default function format({ children }) {
    return (
      <>
        <Head>
            <title>Blog</title>
        </Head>
        <Header></Header>
        <main>{children}</main>
        <Newsletter/>
        <Footer/>
      </>
    );
}