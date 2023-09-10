import image from '../images/chaeunwoo.jpg';

const Career = () => {
    return ( 
        <div>

            <div className='w-[1000px] m-auto mt-11'>
                <div className='flex w-[700px] m-auto mt-11 mb-8'>
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
                
                <table>
                    <tr>
                        <th className='w-[100px] bg-gray-300 text-center border-r-2'>
                        근무 기간
                        </th> 
                        <th className='w-[100px] bg-gray-300 text-center border-r-2'>
                        회사명
                        </th>
                        <th className='w-[600px] bg-gray-300 text-center border-r-2'>
                        업무 상세 내용
                        </th> 
                        <th className='w-[100px] bg-gray-300 text-center border-r-2'>
                        직급
                        </th>
                        <th className='w-[100px] bg-gray-300 text-center border-r-2'>
                        퇴사사유
                        </th> 
                    </tr>
                    <tr className='h-10'>
                        <td className='w-[100px] text-center border-r-2'>
                        3년6개월
                        </td> 
                        <td className='w-[100px] text-center border-r-2'>
                        베이직팩토리
                        </td>
                        <td className='w-[600px] text-center border-r-2'>
                        운영 중인 쇼핑몰의 홈페이지를 더욱 발전시키기 위해 디자인과 기능을 개선하고 새로운 기능을 추가하는 업무를 담당했습니다. 또한 상품 기획과 상세페이지 디자인을 조율하여 최종 컨셉을 결정하고, 영업 지원 업무와 고객 서비스도 함께 수행했습니다.
                        </td>  
                        <td className='w-[100px] text-center border-r-2'>
                        대리
                        </td>  
                        <td className='w-[100px] text-center border-r-2'>
                        웹개발자 능력 향상을 위한 퇴사
                        </td>                  
                    </tr>
                    <tr className='h-10'>
                        <td className='w-[100px] bg-gray-100 text-center border-r-2'>
                        1년 2개월
                        </td> 
                        <td className='w-[100px] bg-gray-100 text-center border-r-2'>
                        에스앤디소프트
                        </td>
                        <td className='w-[600px] bg-gray-100 text-center border-r-2'>
                        국립중앙도서관의 중앙관리시스템인 KOLIS2 개발에 참여하였으며, 서지정보 및 사서들의 열람 부분, 그리고 외부 하드웨어 업체와의 협업을 담당하였습니다. 사서들의 업무를 깊이 이해하고 효율적으로 지원하기 위해 메타데이터에 대한 숙지를 신속하게 이루었습니다. 더불어 국립어린이청소년도서관의 시스템과의 연동 작업을 성공적으로 수행하였습니다. 이러한 경험을 통해 도서관 관리 시스템 개발에 큰 기여를 하였습니다.
                        </td>  
                        <td className='w-[100px] bg-gray-100 text-center border-r-2'>
                        사원
                        </td>  
                        <td className='w-[100px] bg-gray-100 text-center border-r-2'>
                        부모님 사업 지원으로 인한 퇴사
                        </td>                            
                    </tr>
                </table>

            </div>



        </div>
    );
}
 
export default Career;