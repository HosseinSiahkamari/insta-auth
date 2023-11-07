import SideBar from './components/sideBar/sideBar';
import Header from './components/Header/Header';
import Suggestions from './components/Suggestions/Suggestions';
import Main from './components/main/main';
import MiniProfile from './components/MiniProfile/MiniProfile'
// import BottomBar from './components/bottomBar/bottomBar';


function App() {
  return (
    <div className='flex overflow-x-clip' >
      <div className=' md:w-20 xl:w-60 fixed  md:h-screen border-r-2 hidden w816:block left-0'>
        <SideBar />
      </div>
      <div className='block md:hidden left-0'>
        {/* <BottomBar /> */}
      </div>
      <div className='w-full h-full xl:ml-56'>
        <div className='flex justify-start md:justify-center  '>
          <div id='s25' className=' flex flex-col mx-auto w-full md:w-[630px]'>
            <div className='w-full  md:w-[630px] self-start'>
              <Header />
            </div>
            <div className='w-full md:w-[470px] self-center mt-10 '>
              <Main />
            </div>
          </div>
          <div className='w-96 h-[739px] hidden tablet:block'>
            <MiniProfile />
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
