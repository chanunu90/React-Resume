import image from '../images/chaeunwoo.jpg';

const ContainnerComponent = () => {
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

            <div className='w-[1000px] m-auto mt-11'>
                
                <table>
                    <tr>
                        <td className='w-[100px] bg-gray-300 text-center'>React</td> 
                        <td className='w-[400px] '>
                            React를 활용하여 사용자 인터페이스를 구현할 수 있습니다. 또한, 라우팅과 상태 관리를 위해 React Router, Redux Toolkit 등의 도구를 활용하는 능력도 보유하고 있습니다. 이를 통해 효율적이고 안정적인 웹 애플리케이션을 구축할 수 있습니다.
                        </td>
                        <td className='w-[100px] bg-gray-300 text-center'>SpringBoot</td> 
                        <td className='w-[400px]'>
                            React를 활용하여 사용자 인터페이스를 구현할 수 있습니다. 또한, 라우팅과 상태 관리를 위해 React Router, Redux Toolkit 등의 도구를 활용하는 능력도 보유하고 있습니다. 이를 통해 효율적이고 안정적인 웹 애플리케이션을 구축할 수 있습니다.
                        </td>
                    </tr>
                    <tr className='h-5'>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='w-[100px] bg-gray-300 text-center'>React</td> 
                        <td className='w-[400px]'>
                            React를 활용하여 사용자 인터페이스를 구현할 수 있습니다. 또한, 라우팅과 상태 관리를 위해 React Router, Redux Toolkit 등의 도구를 활용하는 능력도 보유하고 있습니다. 이를 통해 효율적이고 안정적인 웹 애플리케이션을 구축할 수 있습니다.
                        </td>
                        <td className='w-[100px] bg-gray-300 text-center'>SpringBoot</td> 
                        <td className='w-[400px]'>
                            React를 활용하여 사용자 인터페이스를 구현할 수 있습니다. 또한, 라우팅과 상태 관리를 위해 React Router, Redux Toolkit 등의 도구를 활용하는 능력도 보유하고 있습니다. 이를 통해 효율적이고 안정적인 웹 애플리케이션을 구축할 수 있습니다.
                        </td>
                    </tr>

                </table>

            </div>



        </div>
    );
}
 
export default ContainnerComponent;