"use client"

import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'

import Image from 'next/image'



const Suggestions = () => {

    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            userId: faker.string.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.url(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
            key: i,
        }));
        setSuggestions(suggestions);
        // console.log(suggestions[0].avatar);
    }, []);


    return (
        <div className='ml-10'>
            <div className='flex justify-between my-5 text-sm'>
                <h3 className='text-gray-500 mr-5'>Suggested for you</h3>
                <button className='mr-3 text-xs font-semibold hover:text-gray-500 '>See All</button>
            </div>
            {suggestions.map((item) => (
                <div className='flex justify-between h-12 w-full my-2 ' key={item.key}>
                    <div className='w-1/6 flex items-center justify-start'>
                        <img className='w-10 h-10 ml-3 rounded-full cursor-pointer' src={item.avatar} alt="picture" />
                        <p className='text-sm ml-2 cursor-pointer'>{item.username} </p>
                    </div>
                    <div className='w-1/6 my-auto border-solid '>
                        <p className='text-sky-500 text-xs font-semibold cursor-pointer mr-2 flex items-center justify-end'>Follow</p>
                    </div>
                </div>
            ))}
            <button className='text-gray-300 text-xs'>About.</button>
            <button className='text-gray-300 text-xs'>Help.</button>
            <button className='text-gray-300 text-xs'>API.</button>
            <button className='text-gray-300 text-xs'>Jobs.</button>
            <button className='text-gray-300 text-xs'>Privacy.</button>
            <button className='text-gray-300 text-xs'>2023 Clone Instagram by Hossein Siahkamari</button>

            {/* 
            <div className='flex items-center w-72 h-5 mt-10 mb-5'>
                <div className='w-64 flex items-center '>
                    <span className='font-semibold text-zinc-500'>Suggested for you</span>
                </div>
                <span className='text-xs w-10 font-semibold cursor-pointer'>See All</span>
            </div> */}
            {/* {imgArray.map((item, i) => {
                return <div key={i} className="flex items-center justify-center h-12 w-72 my-2">
                    <img src={item.imgId} className='rounded-full h-12 w-12 cursor-pointer' alt="pic" />
                    <div className='w-44 h-8 flex-col ml-2 cursor-pointer'>
                        <p className='w-40 h-4 text-sm font-semibold'>{item.profileName} </p>
                        <p className='w-40 h-4 text-xs text-zinc-500'>{item.content} </p>
                    </div>
                    <span className='text-sky-500 text-xs font-semibold cursor-pointer'>{item.followStatus} </span>
                </div>
            })} */}
        </div>
    );
}

export default Suggestions;