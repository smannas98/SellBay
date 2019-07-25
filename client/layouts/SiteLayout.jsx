import Head from 'next/head';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

export default function SiteLayout({ children }) {
  return (
    <body>
      <Head>
        <title>SellBay</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="../static/bulma.css" />
      </Head>
      <NavBar />
      <section className="main-content columns is-fullheight">
        <SideBar />
        <div className="container column is-10">
          {children}
        </div>
      </section>
    </body>
  );
}
