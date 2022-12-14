import Head from "next/head";
import Image from 'next/image';
import Hero from '../components/Hero';
import Skill from '../components/Skill';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Finn van de Wiel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Hero heading='Finn van de Wiel' message='Student at Avans Hogeschool.' link='/work' linkcontent='Work' />
      <Skill />
    </div>
  );
}
