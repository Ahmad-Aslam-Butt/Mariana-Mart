import React, { useEffect, useRef, useState } from 'react'

export const AddProduct = () => {
    const initialProduct = {
        title: '',
        img: null,
        description: '',
        price: 0,
        qty: 1,
        category: [],
        tags: []
    }

    const fileInputRef = useRef(null)
    const [categoryInput, setCategoryInput] = useState('')
    const [tagInput, setTagInput] = useState('')
    const [product, setProduct] = useState(initialProduct)

    // useEffect(() => {
    //     console.log(product)
    // }, [product])

    const handleSubmit = (e) => {
        e.preventDefault()

        // submit to the backend here
        console.log(product)

        setProduct(initialProduct)
        setTagInput('')
        setCategoryInput('')

        if(fileInputRef.current)
            fileInputRef.current.value = ''
    }

    const handleDelete = (itemToRemove, name) => {
        setProduct((prev) => ({
            ...prev,
            [name]: prev[name].filter(item => item !== itemToRemove)
        }))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            const name = e.target.name
            const value = e.target.value.trim()

            if (value) {
                setProduct((prev) => ({
                    ...prev,
                    [name]: [...prev[name], value]
                }))
            }
            if (name === 'tags') setTagInput('')
            if (name === 'category') setCategoryInput('')
        }
    }

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold pb-8'>Product Management</h1>
            {/* <div>AddProduct</div> */}

            <form onSubmit={handleSubmit} action="submit" className='flex flex-col '>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='col-span-2 flex flex-col gap-1'>
                        <label className='text-lg font-medium'>Product Title</label>
                        <input
                            type="text"
                            className='text-base px-2 py-1 focus:font-semibold border focus:border-[#DB4444] focus:outline-none rounded-sm'
                            required
                            value={product.title}
                            onChange={(e) => setProduct({ ...product, title: e.target.value })}
                        />
                    </div>

                    <div className='col-span-1 gap-1'>
                        {/* <label>Image</label> */}
                        <input
                            type="file"
                            onChange={(e) => setProduct({ ...product, img: e.target.files[0] })}
                            ref={fileInputRef}
                        />
                    </div>
                </div>

                <div className='flex flex-col mt-3 gap-1'>
                    <label className='text-lg font-medium'>Description</label>
                    <textarea
                        name="Description"
                        className='h-36 text-sm px-2 py-1 border focus:border-[#DB4444] focus:outline-none rounded-sm'
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        value={product.description}
                    />
                </div>

                <div className='grid grid-cols-4 gap-2 mt-3'>
                    <div className='col-span-2 flex flex-col gap-1'>
                        <label className='text-lg font-medium'>Price</label>
                        <input
                            type="number"
                            className='text-base px-2 py-1 border focus:border-[#DB4444] focus:outline-none rounded-sm'
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                            value={product.price}
                        />
                    </div>
                    <div className='col-span-2 flex flex-col gap-1'>
                        <label className='text-lg font-medium'>Quantity</label>
                        <input
                            type="number"
                            className='text-base px-2 py-1 border focus:border-[#DB4444] focus:outline-none rounded-sm'
                            onChange={(e) => setProduct({ ...product, qty: e.target.value })}
                            value={product.qty}
                        />
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-2'>
                    <div className='flex flex-col col-span-2 mt-3 gap-1'>
                        <label className='text-lg font-medium'>Category</label>
                        <input
                            type="text"
                            className='text-base px-2 py-1 border focus:border-[#DB4444] focus:outline-none rounded-sm'
                            value={categoryInput}
                            onChange={(e) => setCategoryInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            name='category'
                        />
                        <div className={`flex gap-1 mt-2 ${product.category.length === 0 ? 'hidden' : 'block'}`}>
                            {
                                product.category.map((item, index) => {
                                    return (
                                        <span onClick={() => handleDelete(item, 'category')} key={index} className='bg-slate-200 px-2 py-1 rounded-full'>
                                            {item}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='flex flex-col col-span-2 mt-3 gap-1'>
                        <label className='text-lg font-medium'>Tags</label>
                        <input
                            type="text"
                            className='text-base px-2 py-1 border focus:border-[#DB4444] focus:outline-none rounded-sm'
                            // onClick={handleClick}
                            value={tagInput}
                            // onChange={(e) => setProduct({ ...product, tags: e.target.value })}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            name='tags'
                        />
                        <div className={`flex gap-1 mt-2 ${product.tags.length === 0 ? 'hidden' : 'block'}`}>
                            {
                                product.tags.map((item, index) => {
                                    return (
                                        <span onClick={() => handleDelete(item, 'tags')} key={index} className='bg-slate-200 px-2 py-1 rounded-full'>
                                            {item}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-1 mt-6'>
                    <button type='reset' className='border-2 border-[#DB4444] rounded-md px-4 py-2 text-xs text-[#DB4444] hover:text-white hover:bg-[#DB4444]'>Cancel</button>
                    <button type='submit' className='border-2 border-[#DB4444] rounded-md px-4 py-2 text-xs text-white hover:text-[#DB4444] bg-[#DB4444] hover:bg-white'>Save</button>
                    <button type='submit' className='border-2 border-[#DB4444] rounded-md px-4 py-2 text-xs text-white hover:text-[#DB4444] bg-[#DB4444] hover:bg-white'>Save & Add New</button>
                </div>
            </form>
        </div>
    )
}
