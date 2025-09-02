import React, { useRef, useState } from 'react'

export const EditProduct = ({ setIsOpen, productItem }) => {

    const fileInputRef = useRef(null)
    const [product, setProduct] = useState(productItem)
    const [categoryInput, setCategoryInput] = useState('')
    const [tagInput, setTagInput] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsOpen(false)
    }

    const handleDivClick = () => {
        fileInputRef.current.click()
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

    const handleDelete = (itemToRemove, name) => {
        setProduct((prev) => ({
            ...prev,
            [name]: prev[name].filter(item => item !== itemToRemove)
        }))
    }

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold'>Edit Product</h1>
            {/* <div>AddProduct</div> */}

            <form onSubmit={handleSubmit} action="submit" className='flex flex-col mt-4'>
                <div className='grid grid-cols-3 gap-2'>

                    {/* Title */}
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

                    {/* Image */}
                    <div
                        className='col-span-1 flex justify-center items-center gap-1'
                    >
                        {/* <label>Image</label> */}
                        <div
                        className='w-20 h-auto aspect-square object-cover bg-cover bg-center'
                        style={{ backgroundImage: `url(${product.img})` }}
                        onClick={handleDivClick}
                        >
                            <input
                                className='hidden'
                                type="file"
                                onChange={(e) => setProduct({ ...product, img: e.target.files[0] })}
                                ref={fileInputRef}
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className='flex flex-col mt-3 gap-1'>
                    <label className='text-lg font-medium'>Description</label>
                    <textarea
                        name="Description"
                        className='h-36 text-sm px-2 py-1 border focus:border-[#DB4444] focus:outline-none rounded-sm'
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        value={product.description}
                    />
                </div>

                <div className='grid grid-cols-2 gap-2 mt-3'>

                    {/* Price */}
                    <div className='col-span-1 flex flex-col gap-1'>
                        <label className='text-lg font-medium'>Price</label>
                        <input
                            type="number"
                            className='text-base px-2 py-1 border focus:border-[#DB4444] focus:outline-none rounded-sm'
                            onChange={(e) => setProduct({ ...product, price: e.target.value })}
                            value={product.price}
                        />
                    </div>

                    {/* Qty */}
                    <div className='col-span-1 flex flex-col gap-1'>
                        <label className='text-lg font-medium'>Quantity</label>
                        <input
                            type="number"
                            className='text-base px-2 py-1 border focus:border-[#DB4444] focus:outline-none rounded-sm'
                            onChange={(e) => setProduct({ ...product, qty: e.target.value })}
                            value={product.qty}
                        />
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                    {/* Category */}
                    <div className='flex flex-col col-span-1 mt-3 gap-1'>
                        <label className='text-lg font-medium'>Category</label>
                        <input
                            type="text"
                            className='text-base px-2 py-1 border focus:border-[#DB4444] focus:outline-none rounded-sm'
                            value={categoryInput}
                            onChange={(e) => setCategoryInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            name='category'
                        />
                        <div className={`flex flex-wrap gap-1 mt-2 ${product.category.length === 0 ? 'hidden' : 'block'}`}>
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

                    {/* Tags */}
                    <div className='flex flex-col col-span-1 mt-3 gap-1'>
                        <label className='text-lg font-medium'>Tags</label>
                        <input
                            type="text"
                            className='text-base px-2 py-1 border focus:border-[#DB4444] focus:outline-none rounded-sm'
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            name='tags'
                        />
                        <div className={`flex flex-wrap gap-1 mt-2 ${product.tags.length === 0 ? 'hidden' : 'block'}`}>
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

                {/* Button */}
                <div className='flex flex-row justify-end gap-1 mt-6'>
                    <button onClick={() => setIsOpen(false)} type='reset' className='border-2 border-[#DB4444] rounded-md px-4 py-2 text-xs text-[#DB4444] hover:text-white hover:bg-[#DB4444]'>Cancel</button>
                    <button type='submit' className='border-2 border-[#DB4444] rounded-md px-4 py-2 text-xs text-white hover:text-[#DB4444] bg-[#DB4444] hover:bg-white'>Save</button>
                </div>
            </form>
        </div>
    )
}
