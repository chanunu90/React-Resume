import { useState } from 'react';

const Team = () => {


    const [state , setState] = useState(0);

    return ( 
        <div>

            <div className='w-[1000px] m-auto mt-11'>
                
                <table>
                    <tr>
                      <th colspan="2" className='w-[1000px] col-span-ful text-center text-2xl'>
                      ◈ 프로젝트 제목 : 소규모 농장을 운영하는 농부들과의 커뮤니티
                      </th> 
                    </tr>
                    <tr className='h-5'>
                        <td></td>
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        URL
                        </th> 
                        <td className='w-[100px] text-center border-r-2 bg-gray-100'>
                        https://github.com/CoCoFarm-React/React.git<br></br>
                        https://github.com/CoCoFarm-React/enduser.git<br></br>
                        https://github.com/CoCoFarm-React/apiJpaServer.git
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        주요업무
                        및
                        상세역할
                        </th> 
                        <td className='w-[100px] text-center border-r-2 '>
                        적체적인 개발 기간 및 업무 조율 및 관리자페이지 개발 및 리엑트를 이용한 화면 개발환경 구성  
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        작업 기간
                        </th> 
                        <td className='w-[100px] text-center border-r-2 bg-gray-100'>
                        2023.07 – 2023.08
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        프로젝트 소개
                        </th> 
                        <td className='w-[100px] text-center border-r-2 '>
                        신선하고 맛있는 야채를 즐겁게 구매할 수 있는 웹 앱 프로그램으로 소규모 농장들의 활성화를 도모하고 지역 경제를 살리는 역할을 합니다. 이 프로그램을 통해 소비자들은 직접 농장에서 온 신선한 야채를 구입하며, 동시에 농장들은 지속가능한 발전을 이룰 수 있습니다.
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        인원 구성
                        </th> 
                        <td className='w-[100px] text-center border-r-2 bg-gray-100'>
                        6명 / 직책 : 팀장
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        프로젝트 목적
                        </th> 
                        <td className='w-[100px] text-center border-r-2 '>
                        소규모 농장의 번영과 소비자들의 건강한 식단을 위해, 신선한 식재료의 재배 과정을 직접 확인하며 구매할 수 있는 기회가 제공되고, 이를 통한 즐거움을 나누는 것을 목표로 합니다.
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        사용언어 및 개발환경
                        </th> 
                        <td className='w-[100px] text-center border-r-2 bg-gray-100'>
                        Axios, Redux Toolkit, HTML, CSS, Vanilla JS, React Router, KakaoMap, Google Mail, Kakao Login, JUnit, JSON, REST API
                        MySQL, Nginx, JWT (JSON Web Token), Lombok, Gradle, Spring Boot, Spring MVC, Spring Security, Spring Core, GitHub
                        DBeaver, Postman, IntelliJ, Visual Studio Code ,Eclipse

                        </td>              
                    </tr>
                </table>

            </div>



        </div>
    );
}
 
export default Team;