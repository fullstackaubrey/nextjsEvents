import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img />
          <a href="/home">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>

      <main className={styles.main}>
        {data.map((event) => (
        <a key={event.id} href={`/events/${event.id}`}> 
        <Image width={215} height={300} alt={event.title} src={event.image} /> 
        <h2>{event.title}</h2> 
        <p>{event.description}</p>
        </a> 
        ))}
    
      </main>

      <footer className={styles.footer}>
        <p>2023 Events App - A nextjs Practice Project</p>
      </footer>
    </>
  )
}

export async function getServerSideProps() {

  const { events_categories } = await import ("data/data.json");

  //secret information here, does not display in browser
  return {
    props:{
      data: events_categories
    }
  };
}