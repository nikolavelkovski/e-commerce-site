
import React, { useEffect } from 'react'
import { fetchProducts } from '../../store/actions/productsActions'

type Props = {}

export default function Home(props: Props) {

    useEffect(() => {
        fetchProducts();
    },[])
  return (
    <div>Home</div>
  )
}