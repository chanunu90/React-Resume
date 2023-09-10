import { useState } from "react";
import Data1 from "./selfIntroduction/Data1";
import Data2 from "./selfIntroduction/Data2";
import Data3 from "./selfIntroduction/Data3";


const SelfIntroduction = () => {

    const [state , setState] = useState(0);

    const changeState = (num) => {

        setState(num)

    }

    return ( 
        <div className='w-[1000px] m-auto mt-11'>
            <div className='flex container m-auto mt-3 w-[680px]'>
                <div className='border-black border-2 rounded-2xl p-1 mr-8 hover:bg-gray-600 hover:text-white cursor-pointer' onClick={() => changeState(0)}>
                업무에 적합한 나만의 장점
                </div>
                <div className='border-black border-2 rounded-2xl p-1 mr-8 hover:bg-gray-600 hover:text-white cursor-pointer' onClick={() => changeState(1)}>
                입사 후 포부 
                </div>
                <div className='border-black border-2 rounded-2xl p-1 hover:bg-gray-600 hover:text-white cursor-pointer' onClick={() => changeState(2)}>
                프로젝트 문제 해결 능력 사례 및 느낀점 
                </div>
            </div>
            {state === 0 ? <Data1></Data1> : state === 1 ? <Data2></Data2> : <Data3></Data3>}

        </div>
    );
}
 
export default SelfIntroduction;