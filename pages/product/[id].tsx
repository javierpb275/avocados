import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()
  const [product, setProduct] = useState<TProduct>()
  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((product) => {
          setProduct(product)
        })
    }
  }, [id])

  return (
    <section>
      <h1>{product?.name}</h1>
    </section>
  )
}

export default ProductPage
