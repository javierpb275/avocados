import React, { useEffect, useState } from 'react'

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
      {productList.map((product) => {
        return <div>{product.name}</div>
      })}
    </div>
  )
}

export default HomePage
