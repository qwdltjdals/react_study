import { CiEdit } from "react-icons/ci";
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

];