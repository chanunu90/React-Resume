import { Outlet } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";


const MainPage = () => {

    return ( 
        <div className="container m-auto">
            <div className="">
                <BasicLayout>
                    <div className="bg-white">
                        <Outlet></Outlet>
                    </div>
                </BasicLayout>
            </div>
        </div>
    );
}
 
export default MainPage;