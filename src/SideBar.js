import {BsPersonCircle, BsGlobe} from 'react-icons/bs';
import {FaGraduationCap, FaChessKnight,FaRegPlayCircle, FaProjectDiagram} from 'react-icons/fa';
import {MdOutlineWork, MdOutlineComputer} from 'react-icons/md';

const SideBar = () => {
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-white shadow">
            <SideBarIcon icon={<BsPersonCircle size="28"/>} text={"Basic Info"}/>
            <SideBarIcon icon={<FaGraduationCap size="28"/>} text={"Education"}/>
            <SideBarIcon icon={<MdOutlineWork size="28"/>} text={"Work"}/>
            <SideBarIcon icon={<MdOutlineComputer size="28"/>} text={"Programming Skills"}/>
            <SideBarIcon icon={<FaChessKnight size="28"/>} text={"Hobbies"}/>
            <SideBarIcon icon={<FaRegPlayCircle size="28"/>} text={"Favorite Media"}/>
            <SideBarIcon icon={<BsGlobe size="28"/>} text={"Favorite Website"}/>
            <SideBarIcon icon={<FaProjectDiagram size="28"/>} text={"Projects"}/>
        </div>
    );

};

const SideBarIcon = ({ icon, text = ''}) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);


export default SideBar;