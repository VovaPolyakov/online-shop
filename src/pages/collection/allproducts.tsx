import { Products } from '@prisma/client'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import prisma from '../../../prisma/Client'

export const getServerSideProps: GetStaticProps<{ products: Products[]}> = async (ctx) => {
  const where = undefined // products filter
  const take = 10 // items on a page
  const products = await prisma.products.findMany({ where, take })
  return { props:{ products } }
}

export default function Page({products}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return <ul>
    {products.map(({name}) => <li>{name}</li>)}
  </ul>
}
