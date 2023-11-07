"use client"

import { Faker, faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'

import Image from 'next/image'



const Suggestions = () => {

    const [sugesstions, setSugesstions]= useState([]);

    useEffect(()=>{
        const suggestions = [...Array(12)].map((_,i)=>({
            avatar: faker.image-avatar(),
            name: faker.firstName(),
        }))
    },[] )

    

    return (
        <div className=''>
            <h2>Suggestions</h2>
            
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