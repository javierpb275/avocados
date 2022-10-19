import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])
  return (
    <div>
      <Navbar />
      {productList.map((product) => {
        return <div>{product.name}</div>
      })}
    </div>
  )
}

export default HomePage
