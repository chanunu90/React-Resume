import image from '../images/chaeunwoo.jpg';

const Certificate = () => {
    return ( 
        <div>
            <div className='flex w-[700px] m-auto mt-11'>
                <div className='text-blue-600 text-3xl'>
                    <div className='text-4xl mt-5'>
                        차은우
                    </div>
                    <div>
                        풀스택 개발자
                    </div>
                </div>

                <div className='ml-12 mr-12'>
                    <table className=''>
                        <tr>
                            <td className='font-bold'>생년월일</td><td>1990.12.06</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>E-mail</td><td>Chanunu90@gmail.com</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>핸드폰</td><td>010-9245-0660</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>주   소</td><td>서울시 장위동 한천로 713</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>병역사항</td><td>병장 만기제대(무선통신병)</td>
                        </tr>
                        <tr>
                            <td className='font-bold'>Github주소</td><td>Github/chanunu90</td>
                        </tr>
                    </table>
                </div>

                <div className='w-28'>
                    <img src={image} alt="증명사진" />
                </div>
            </div>

            <div className='w-[850px] m-auto mt-11 flex justify-between'>
                
                <div>
                    <div className='text-2xl'>학력</div>
                    <ul>
                        <li>
                            - 2009.02 ~ 2017.02 인덕대학교 정보통신 학과 졸업 / 학점3.9 (4.5만점)
                        </li>
                        <li>
                            - 2006.02 ~ 2009.02 광운전자공업고등학교 졸업
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='text-2xl'>자격증</div>
                    <ul>
                        <li>
                            - 정보처리산업기사 (2015. 10 취득)
                        </li>
                        <li>
                            - 운전면허 1종 보통 (2013. 07 취득)
                        </li>
                        <li>
                            - 2급생활스포츠지도사 (2022. 12 취득)
                        </li>
                    </ul>
                </div>

            </div>



        </div>
    );
}
 
export default Certificate;