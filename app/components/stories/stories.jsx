"use client"

import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Story from '../Story/Story'



const Stories = () => {
    const [suggestion, setSuggestion] = useState([]);
    useEffect(() => {
        const suggestion = [...Array(20)].map((_, i) => ({
            userId: faker.string.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.url(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
            key: i,
        }));
        setSuggestion(suggestion);
        // console.log(suggestions[0].avatar);
    }, []);


    const slideRightHandler = () => {
        const rowSlideRight = document.getElementById('dynamicID');
        const scrollAmount = 10; // میزان اسکرول به هر بار
        const scrollSpeed = 1
            ; // سرعت اسکرول
        const targetScrollLeft = rowSlideRight.scrollLeft + 500; // مقدار مورد نظر برای اسکرول

        const animateScroll = () => {
            if (rowSlideRight.scrollLeft < targetScrollLeft) {
                rowSlideRight.scrollLeft += scrollAmount;
                const scrollLeft = rowSlideRight.scrollLeft;
                requestAnimationFrame(() => {
                    if (rowSlideRight.scrollLeft === scrollLeft) {
                        animateScroll();
                    }
                });
            }
        };

        animateScroll();
    };


    const slideLeftHandler = () => {
        const rowSlideRight = document.getElementById('dynamicID');
        const scrollAmount = 10; // میزان اسکرول به هر بار
        const scrollSpeed = 1; // سرعت اسکرول
        const targetScrollLeft = rowSlideRight.scrollLeft - 500; // مقدار مورد نظر برای اسکرول به سمت چپ

        const animateScroll = () => {
            if (rowSlideRight.scrollLeft > targetScrollLeft) {
                rowSlideRight.scrollLeft -= scrollAmount;
                const scrollLeft = rowSlideRight.scrollLeft;
                requestAnimationFrame(() => {
                    if (rowSlideRight.scrollLeft === scrollLeft) {
                        animateScroll();
                    }
                });
            }
        };

        animateScroll();
    };


    return (
        <div className='relative'>
            <div className='absolute top-0 w-full mx-auto  flex items-center justify-between h-28 '>
                <button onClick={slideLeftHandler} className=" bg-white flex items-center justify-center h-5 w-5 rounded-full opacity-80 z-30">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                </button>
                <button onClick={slideRightHandler} className=" bg-white flex items-center justify-center h-5 w-5 rounded-full opacity-80 z-30">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                </button>
            </div>
            <div id='dynamicID' className="flex justify-start p-4  items-center h-28  w-screen md:w-full lg:w-full xl:w-full object-cover overflow-x-hidden">
                {suggestion.map((item) => {
                    return <Story className='' key={item.key} avatar={item.avatar} username={item.username} />
                })}
            </div>
        </div>
    );
}

export default Stories;