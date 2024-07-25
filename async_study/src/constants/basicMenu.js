import { CiEdit } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoCreateOutline, IoSearchSharp, IoRemoveCircleOutline  } from "react-icons/io5";

export const BASIC_MENU = [
    {
        id: 1,
        name: "POST요청",
        path: "/anync/basic/post",
        icon: <IoCreateOutline />
    },
    {
        id: 2,
        name: "GET요청",
        path: "/anync/basic/get",
        icon: <IoSearchSharp />
    },
    {
        id: 3,
        name: "PUT요청",
        path: "/anync/basic/put",
        icon: <CiEdit />
    },
    {
        id: 4,
        name: "DELETE요청",
        path: "/anync/basic/delete",
        icon: <IoRemoveCircleOutline />
    },
    {
        id: 5,
        name: "POST2요청",
        path: "/anync/basic/post2",
        icon: <IoCreateOutline />
    },
    {
        id: 6,
        name: "Promise학습",
        path: "/anync/basic/promise",
        icon: <IoCreateOutline />
    },
    {
        id: 7,
        name: "사이즈 등록",
        path: "/anync/basic/size/register",
        icon: <IoCreateOutline />
    },
    {
        id: 8,
        name: "컬러 등록",
        path: "/anync/basic/color/register",
        icon: <IoCreateOutline />
    },
    {
        id: 9,
        name: "컴퓨터",
        path: "/computer",
        icon: <RiComputerLine />
    },

];