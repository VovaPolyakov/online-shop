import { GetStaticProps, InferGetStaticPropsType } from 'next'
import prisma from '../../prisma/Client'
import { Products } from '@prisma/client'


export const getServerSideProps: GetStaticProps<{ products: Products[]}> = async (ctx) => {

  const products = await prisma.products.findMany()
  return { props:{ products } }
}
 
export default function Page({products}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return <ul>
    {products.map(({name}) => <li>{name}</li>)}
  </ul>
}
