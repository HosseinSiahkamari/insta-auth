import pexels01 from './../../assets/pexels01.jpg'


const HeadMain = () => {
    return (
        <div className='flex justify-between items-center max-w-[470px] px-5 mx-auto h-8 bg-slate-100 rounded-md shadow-md'>
            <div className='flex'>
                <img className='w-7 rounded-full' src={pexels01} alt="" />
                <p className='mx-2'>ali</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" /></svg>
            </div>
        </div>);
}

export default HeadMain;