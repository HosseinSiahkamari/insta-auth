"use client"

import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'

import Image from 'next/image'



const Suggestions = () => {

    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
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
        <div className=''>
            {suggestions.map((item)=>(
                <div key={item.key}>
                    <img src="item.avatar" alt="picture" />
                </div>

            ))}

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