import React from 'react'
import { Link } from 'react-router-dom'

export const AllProducts = () => {
  // temp products later to be removed after DB integration
  const imageURL = 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const imageURL2 = 'https://images.unsplash.com/photo-1599076480086-fd46f116eb8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const imageURL3 = 'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  const products = [
    { img: imageURL, title: 'Headphones', price: 45, category: ['electronics'], qty: 2 },
    { img: imageURL2, title: 'Camera', price: 799, category: ['electronics', 'photography'], qty: 1 },
    { img: imageURL3, title: 'Camera', price: 799, category: ['electronics', 'photography'], qty: 1 },
  ]

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold pb-6'>Product Management</h1>

      <div className='py-2'>
        <Link to='/admin/add-product'>
          <button className='border-2 border-[#DB4444] rounded-md px-4 py-2 text-xs text-[#DB4444] hover:text-white hover:bg-[#DB4444]'>
            ✚ Add Product
          </button>
        </Link>

        <div className='bg-white mt-6 rounded-md'>
          <div className='grid grid-cols-6 bg-slate-200 p-3 font-bold rounded-t-md gap-2'>
            <p className='col-span-1'>Image</p>
            <p className='col-span-1'>Title</p>
            <p className='col-span-1'>Price</p>
            <p className='col-span-1'>Category</p>
            <p className='col-span-1'>Qty.</p>
            <p className='col-span-1'>Edit/Delete</p>
          </div>
          {
            products.map((product, index) => {
              return (
                <div key={index} className='grid grid-cols-6 p-3 border-b-2 items-center gap-2 hover:bg-slate-50'>
                  <img className='col-span-1 text-sm aspect-square object-cover' width='40' height='auto' src={product.img} alt={product.title} />

                  <span><Link to='#' className='font-medium col-span-1 text-sm hover:text-[#DB4444]'>{product.title}</Link></span>

                  <p className='col-span-1 text-sm'>{product.price}</p>

                  <div className='col-span-1'>
                    {
                      product.category.map((item, index) => {
                        return (
                          <span key={index}>
                            <Link to='#' className='hover:text-blue-500 text-sm'>{item}</Link>
                            {index < product.category.length - 1 && ', '}
                          </span>
                        )
                      })
                    }
                  </div>

                  <p className='col-span-1 text-sm'>{product.qty}</p>

                  <span className='flex gap-1 items-center'>
                    <button className='hover:text-[#DB4444] px-2 py-1 rounded-[4px] text-sm'>Edit</button>
                    <button className='border box-border border-red-800 px-2 py-1 w-16 h-8 rounded-[4px] text-sm bg-red-800 hover:bg-transparent text-white hover:text-red-800'>Delete</button>
                  </span>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}
