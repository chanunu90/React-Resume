import { useState } from 'react';
import image from '../images/chaeunwoo.jpg';

const Sol = () => {
    return ( 
        <div>
            <div className='w-[1000px] m-auto mt-11'>
                
            <table>
                    <tr>
                      <th colspan="2" className='w-[1000px] col-span-ful text-center text-2xl'>
                      ◈ 프로젝트 제목 : 게시판(개인 프로젝트)
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
                        https://github.com/chanunu90/portfolio_todo_gogo.git
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        주요업무
                        및
                        상세역할
                        </th> 
                        <td className='w-[100px] text-center border-r-2 '>
                        HTML, CSS, Vanilla JavaScript, 그리고 Thymeleaf를 이용하여 화면전체을 구성하고, Spring Boot, Lombok, MySQL, MyBatis를 활용하여 기능전체을 구현하였습니다.  
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        작업 기간
                        </th> 
                        <td className='w-[100px] text-center border-r-2 bg-gray-100'>
                        2023.05 ~ 2023.06 
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        프로젝트 소개
                        </th> 
                        <td className='w-[100px] text-center border-r-2 '>
                        Spring Boot 서버와 MyBatis를 이용한 게시판
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        인원 구성
                        </th> 
                        <td className='w-[100px] text-center border-r-2 bg-gray-100'>
                        개인작업
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        프로젝트 목적
                        </th> 
                        <td className='w-[100px] text-center border-r-2 '>
                        게시판에 적용되는 기본 CRUD와 파일 업로드 및 댓글과 검색 기능을 구현하여 실력 향상
                        </td>              
                    </tr>
                    <tr className='h-10'>
                        <th className='w-[100px] text-center border-r-2 bg-gray-300 border-b-2'>
                        사용언어 및 개발환경
                        </th> 
                        <td className='w-[100px] text-center border-r-2 bg-gray-100'>
                        Spring Boot, Lombok, MySQL, MyBatis, Thymeleaf,
                        CSS, Vanilla JavaScript, Nginx 웹서버
                        </td>              
                    </tr>
                </table>

            </div>



        </div>
    );
}
 
export default Sol;