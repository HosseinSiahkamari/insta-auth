import Image from "next/image";


const MiniProfile = () => {
    return (
        <div className="flex items-center justify-center h-12 w-72 mt-10">
                <img src="https://i.pinimg.com/originals/ac/c7/e2/acc7e2c10f504bb8b923e50420c3e9b8.jpg" className='rounded-full h-12 w-12 cursor-pointer' alt='picture ' />
                <p className='w-44 h-12 flex items-center text-sm ml-2 font-semibold cursor-pointer'>hossein</p>
                <span className='text-sky-500 text-xs font-semibold cursor-pointer'>Switch</span>
            </div> 
     );
}
 
export default MiniProfile;