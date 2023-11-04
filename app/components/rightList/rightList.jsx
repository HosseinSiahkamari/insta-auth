// "use client"

import pexels01 from './../../assets/pexels01.jpg'
import pexels02 from './../../assets/pexels02.jpg'
import pexels03 from './../../assets/pexels03.jpg'
import pexels04 from './../../assets/pexels04.jpg'
import pexels05 from './../../assets/pexels05.jpg'
import pexels06 from './../../assets/pexels06.jpg'


const RightList = () => {

    const imgArray = [
        { imgId: pexels02, profileName: 'Mary', content: 'Suggested for you', followStatus: 'follow' },
        { imgId: pexels03, profileName: 'Sozy', content: 'Suggested for you', followStatus: 'follow' },
        { imgId: pexels04, profileName: 'Rozita', content: 'Followed by Danial', followStatus: 'follow' },
        { imgId: pexels05, profileName: 'Meryam', content: 'Suggested for you', followStatus: 'follow' },
        { imgId: pexels06, profileName: 'Jason', content: 'Suggested for you', followStatus: 'follow' },
    ]

    return (
        <div className=''>
            <div className="flex items-center justify-center h-12 w-72 mt-10">
                <img src={pexels01} className='rounded-full h-12 w-12 cursor-pointer'  alt="pic" />
                <p className='w-44 h-12 flex items-center text-sm ml-2 font-semibold cursor-pointer'>hossein</p>
                <span className='text-sky-500 text-xs font-semibold cursor-pointer'>Switch</span>
            </div>
            <div className='flex items-center w-72 h-5 mt-10 mb-5'>
                <div className='w-64 flex items-center '>
                    <span className='font-semibold text-zinc-500'>Suggested for you</span>
                </div>
                <span className='text-xs w-10 font-semibold cursor-pointer'>See All</span>
            </div>
            {imgArray.map((item, i) => {
                return <div key={i} className="flex items-center justify-center h-12 w-72 my-2">
                    <img src={item.imgId} className='rounded-full h-12 w-12 cursor-pointer' alt="pic" />
                    <div className='w-44 h-8 flex-col ml-2 cursor-pointer'>
                        <p className='w-40 h-4 text-sm font-semibold'>{item.profileName} </p>
                        <p className='w-40 h-4 text-xs text-zinc-500'>{item.content} </p>
                    </div>
                    <span className='text-sky-500 text-xs font-semibold cursor-pointer'>{item.followStatus} </span>
                </div>
            })}
        </div>
    );
}

export default RightList;