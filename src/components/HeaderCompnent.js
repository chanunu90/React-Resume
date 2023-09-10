import { Link } from "react-router-dom";

const HeaderCompnent = () => {
    return ( 
        <div className="text-1xl font-bold mb-4">
            <div className="w-[1200px] flex justify-center m-auto h-28">

                <div className="m-5 mb-3 mt-auto hover:text-gray-400">
                    <Link to={"/"}>차은우 소개</Link>
                </div>

                <div className="m-5 ml-20 mb-3 mt-auto hover:text-gray-400">
                    <Link to={"/skill"}>보유기술 및 교육이수</Link>
                </div>

                <div className="m-5 ml-20 mb-3 mt-auto hover:text-gray-400">
                    <Link to={"/project"}>프로젝트</Link>
                </div>

                <div className="m-5 ml-20 mb-3 mt-auto hover:text-gray-400">
                    <Link to={"/career"}>경력 사항</Link>
                </div>

                <div className="m-5 ml-20 mb-3 mt-auto hover:text-gray-400">
                    <Link to={"/certificate"}>학력 및 자격증</Link>
                </div>

                <div className="m-5 ml-20 mb-3 mt-auto hover:text-gray-400">
                    <Link to={"/selfIntroduction"}>자기소개서</Link>
                </div>

            </div>
        </div>
    );
}
 
export default HeaderCompnent;