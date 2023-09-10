import { useState } from 'react';
import Sol from '../project/Sol';
import Team from '../project/Team';

const Career = () => {

    const [state , setState] = useState(0);

    const changeState = (num) => {

        setState(num)

    }

    return ( 
        <div className=''>
            <div className='flex container m-auto  mt-3 w-64'>
                <div className='border-black border-2 rounded-2xl p-1 mr-8 hover:bg-gray-600 hover:text-white cursor-pointer' onClick={() => changeState(0)}>
                팀프로젝트
                </div>
                <div className='border-black border-2 rounded-2xl p-1 hover:bg-gray-600 hover:text-white cursor-pointer' onClick={() => changeState(1)}>
                개인프로젝트 
                </div>
            </div>
            {state === 0 ? <Team></Team> : <Sol></Sol>}

        </div>
    );
}
 
export default Career;