import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/main.module.css'
import Prismic from '@prismicio/client'
import { Client } from '../prismic-configuration'
// import ProductList from "../src/components/product-list"
import Product from "../src/components/product"

export default function Home({ allHomepage, IIndexProps }) {
  const homePage = JSON.parse(allHomepage).results
  const categoryNavigation = homePage[0].data['category-navigation']
  console.log(categoryNavigation)
  console.log(IIndexProps)
  return (
    <div className={styles.container}>
      <Head>
        <title>{homePage[0].data.title[0].text}</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="NzZjYmQyMDQtNTQ3MC00OWM5LTk1MjUtYzdhYjEzYTE1ODY0NjM3NTQyMjM2NTI0NDM0NDUz" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
      </Head>

      <main className={styles.main}>
        <Image src="/logo-400x91.png" width="400" height="91" />
        <>
        <div className={styles.navigation}>
          {categoryNavigation.map((category) => (
            <div className={styles.navbar} key={category.id}>
              <a className={styles.navelement}>{category.category.uid}</a>
            </div>
          ))}
        </div>
        </>
        <>
          {categoryNavigation.map((category) => (
              <Product name="Test Product" 
              id="test-product"
              url="/"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              image="/thumbnail.jpg"
              price="10.2"
              />
          ))}
        </>
      </main>
      {/* <footer className={styles.footer}></footer> */}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const client = Client()
  const allHomepage = await client.query(
    Prismic.Predicates.at('document.type', 'homepage')
  )
  
  return {
    props: {
      allHomepage: JSON.stringify(allHomepage),
    },
  }
}
