import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import Currency from "react-currency-formatter"
import { addToBasket, removeFromBasket } from "../slices/basketSlice"
import {useDispatch} from "react-redux"


function CheckoutProduct({
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    hasPrime
}) {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            hasPrime
        }
        dispatch(addToBasket(product))
    }
    const removeItemFromBasket = () =>{
       
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className="grid grid-cols-5">
            <Image
                src={image}
                height={200}
                width={200}
                objectFit="contain"
            />
            {/* Middle section */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5  text-yellow-500" />
                    ))
                    }
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="GBP" />
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img loading="lazy"
                            className="w-12"
                            src="https://links.papareact.com/fdw" />
                        <p className="text-xs text-gray-50">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col space-y-2 my-auto">
                <button className="button" onClick={addItemToBasket}>Add to cart</button>
                <button className="button" onClick={removeItemFromBasket}>Remove</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
