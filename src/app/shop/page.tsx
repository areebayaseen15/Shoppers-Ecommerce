

import React from 'react'
import Container from '../component/Container'
import Productlist from '../component/productlist'

const ShopPage = () => {
  return (
    <div className='py-5'>
      <Container className='text-2xl font-semibold mb-8'>
        <h2 className='mb-10 mt-5'>
          All Available Products List:
        </h2>
        <Productlist/>
      </Container>

    </div>
  )
}

export default ShopPage
