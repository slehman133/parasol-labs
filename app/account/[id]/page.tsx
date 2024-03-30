import React from 'react'
import { getOrders, getOrdersByEmail } from '@/utils/shopifyAdmin'
import OrdersDisplay from '@/components/admin/OrderDisplay'

const AccountPage = async (props: { params: { id: string } }) => {

  const variables = { id: props.params.id }

  const user = await fetch(`http://localhost:3000/api/user/${variables.id}`)
    .then(res => res.json())

  // const orders = await getOrdersByEmail(user.email).then(res => res.data.customers.edges)
  // console.log(orders)

  const orders = await getOrders()
    .then(res => res.filter((e: any) => e.email === user.email))

  return (
    <>
      <div className='m-24'>
        <h1 className='text-4xl font-bold'>My Orders</h1>
        <div className='my-5'>
          <OrdersDisplay orders={orders} />
        </div>
      </div>
    </>
  )
}

export default AccountPage