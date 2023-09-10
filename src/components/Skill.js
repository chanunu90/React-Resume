import image from '../images/chaeunwoo.jpg';

const Skill = () => {
    return ( 
        <div>
           <div className='w-[1000px] m-auto mt-11'>
                <table>
                    <tr>
                      <th colspan="4" className='w-[1000px] col-span-ful text-center text-2xl'>
                        2023.03 ~ 2023.08(6개월)  React.js와 Springboot를 활용한 자바 풀스택 개발자
                        <br></br>
                        하이미디어아카데미 인재개발원
                      </th> 
                    </tr>
                    <tr className='h-5'>
                        <td></td>
                    </tr>
                    <tr>
                        <th className='w-[100px] bg-gray-300 text-center border-r-2'>
                            보유능력
                        </th> 
                        <th className='w-[400px] bg-gray-300 text-center'>
                            상세내용
                        </th>
                    </tr>
                    <tr className='h-10'>
                        <td className='w-[100px] bg-gray-100 text-center border-r-2'>
                        Language
                        </td> 
                        <td className='w-[400px] bg-gray-100 text-center'>
                        Java, Javascript, SQL
                        </td>                        
                    </tr>
                    <tr className='h-10'>
                        <td className='w-[100px] text-center border-r-2'>
                        Front-End
                        </td> 
                        <td className='w-[400px] text-center'>
                        HTML, CSS, jQuery, React
                        </td>                        
                    </tr>
                    <tr className='h-10'>
                        <td className='w-[100px] bg-gray-100 text-center border-r-2'>
                        Backe-End
                        </td> 
                        <td className='w-[400px] bg-gray-100 text-center'>
                        Spring, MyBatis, Apache Tomcat, Spring Boot, Spring Data JPA, JPA
                        </td>                        
                    </tr>
                    <tr className='h-10'>
                        <td className='w-[100px] text-center border-r-2'>
                        DB
                        </td> 
                        <td className='w-[400px] text-center'>
                        Oracle, MySQL
                        </td>                        
                    </tr>
                    <tr className='h-10'>
                        <td className='w-[100px] bg-gray-100 text-center border-r-2'>
                        Tool
                        </td> 
                        <td className='w-[400px] bg-gray-100 text-center'>
                        Eclipse, VS Code, IntelliJ, DBeaver, SourceTree
                        </td>                        
                    </tr>

                </table>

            </div>



        </div>
    );
}
 
export default Skill;