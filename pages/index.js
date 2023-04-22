import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Joyprokash Chakrabarty</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content="A Sr. Software Engineer Specializes in Full-Stack development. I have expertise in PHP, Laravel, NextJs, Mysql, Mongo DB, Python, WordPress, Dot Net Core,  Azure DevOps" />
        <meta name="keywords" content="Developer in Dhaka, Upwork, linkedin, Developer, Backend Development, Web developer, Web developer in Dhaka,WordPress,Woocommerce,WordPress Plugin, Jpyprokash, Joy, Joyprokash Chakrabarty, Developer In Sylhet, Sylhety Developer" />
        <meta name="author" content="Joyprokash Chakrabarty" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <Header title="Joyprokash Chakrabarty" />
        <p className="description">
            <b>Sr. Software Engineer</b> Specializes in Full-Stack development
        </p>
        <p className="description" style={{ fontWeight:"bold",color: "golden" }}>
            Skills : PHP, Laravel, NextJs, Mysql, Mongo DB, Python, WordPress, Dot Net Core,  Azure DevOps
        </p>
        <br />
        <div>
            <Link href="https://github.com/joyprokash"><img src="/github.webp" style={{ maxWidth:'40px' }} alt="Netlify Logo" /></Link>
            &nbsp;&nbsp;<Link href="https://www.linkedin.com/in/joyprokash/"><img src="/linkedin.webp" style={{ maxWidth:'40px' }} alt="Netlify Logo" /></Link>
            &nbsp;&nbsp;<Link href="https://www.instagram.com/joyprokash_ch/"><img src="/instagram.webp" style={{ maxWidth:'40px' }} alt="Netlify Logo" /></Link>
            &nbsp;&nbsp;<Link href="mailto:joyprokash.me@gmail.com"><img src="/gmail.webp" style={{ maxWidth:'40px' }} alt="Netlify Logo" /></Link>
            &nbsp;&nbsp;<Link href="https://www.upwork.com/freelancers/~015f131428a65c9bcc"><img src="/upwork.png" style={{ maxWidth:'40px' }} alt="Netlify Logo" /></Link>
        </div>
        <br />  
        <p className="description">
            <Link href="mailto:joyprokash.me@gmail.com">Hire Me!</Link>
        </p>
     </main>
      <Footer />
    </div>
  )
}
