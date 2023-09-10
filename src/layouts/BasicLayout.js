import Footer from "../components/Footer";
import HeaderCompnent from "../components/HeaderCompnent";

const BasicLayout = ({children}) => {
    return ( 
     <div className="container m-auto ">

        <div className="">
            <HeaderCompnent></HeaderCompnent>
        </div>

        <div className="border-black border-2" style={{height:"600px"}}>
            {children}
        </div>

        <div className="">
            <Footer></Footer>
        </div>      
     </div>
    );
}
 
export default BasicLayout;