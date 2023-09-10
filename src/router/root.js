import { createBrowserRouter } from"react-router-dom";

import MainPage from "../pages/MainPage";
import ContainnerComponent from "../components/ContainnerComponent";
import Project from "../components/Project";
import Skill from "../components/Skill";
import Career from "../components/Career";
import Certificate from "../components/Certificate";
import SelfIntroduction from "../components/SelfIntroduction";

const router = createBrowserRouter([
    
    {
        path: "",
        element: <MainPage></MainPage>,
        children: [
            {
                path: "",
                element:  <ContainnerComponent></ContainnerComponent>             
            },
            {
                path: "/skill",
                element: <Skill></Skill>    
            },
            {
                path: "/project",
                element: <Project></Project>    
            },
            {
                path: "/career",
                element: <Career></Career>    
            },
            {
                path: "/certificate",
                element: <Certificate></Certificate>    
            },
            {
                path: "/selfIntroduction",
                element: <SelfIntroduction></SelfIntroduction>    
            },
        ]
    },
]);

export default router;