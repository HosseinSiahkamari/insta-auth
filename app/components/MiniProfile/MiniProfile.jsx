import { getServerSession, s } from "next-auth/next"
import { options } from './../../api/auth/[...nextauth]/options'


const MiniProfile = async () => {

    const session = await getServerSession(options);


    return (
        <div className="flex ml-10 h-12 w-full mt-10">
            {session ? <>
                <div className="flex justify-start h-12 w-2/3">
                    <img src="https://i.pinimg.com/originals/ac/c7/e2/acc7e2c10f504bb8b923e50420c3e9b8.jpg" className='ml-0 rounded-full h-12 w-12 cursor-pointer' alt='picture ' />
                    <p className='w-44 h-12 flex items-center text-sm ml-2 font-semibold cursor-pointer'>hossein</p>
                </div>
                <div className="w-1/3 h-12 flex items-center justify-center">
                    <button className='text-sky-500 text-xs font-semibold cursor-pointer mr-5'>Switch</button>
                </div></> : <button className="font-bold text-red-500">Log In</button>}
        </div>
    );
}

export default MiniProfile;