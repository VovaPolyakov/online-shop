import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'
import { Products } from '@prisma/client'
import Image from 'next/image'


type Props = {
  data: Products[]
}


const Page = ({data}:Props) => {
  console.log(data[0].image_url)
  const image = 'https://ibb.co/1GjPgHY'
  return (
    <section className={styles.collection}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.row}>
          <h1 className={styles.title}>Featured Collection</h1>
          <Link href='/collection/hoodies'>
            <div className={styles.hoodie}>
              <img className={styles.hoodie__img}  src='https://i.ibb.co/nMtYGhq/hoodie.webp' alt='hoodie'></img>
              <p className={styles.text}>Winter Hoodie Collections
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.arrow} viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Page
