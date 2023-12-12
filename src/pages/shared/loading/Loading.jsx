
import  './loading.css'
import animaiton from '../../../assets/lottie-animation/welcome.json'
import Lottie from 'lottie-react';
const Loading = () => {
    return (
        <div className='flex h-[100vh] items-center justify-center bg-white'>
              <div className='md:w-[600px]'>
                    <Lottie animationData={animaiton}/>
              </div>
        </div>
    );
};

export default Loading;