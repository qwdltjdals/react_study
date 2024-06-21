import { useCallback, useState } from "react";
import DataTableHeader from "../../DataTableHeader/DataTAbleHeader";
import DataTableBody from "../DataTableBody/DataTableBody";
import "./Style.css";

function DataTable() {
    const [ mode, setMode ] = useState(0); // 0 = 조회. 1 = 추가, 2 = 수정, 3 = 삭제
    const [products, setProducts] = useState([]);
    return ( 
        <div className="table-main-container">
            <DataTableHeader mode={mode} setMode={setMode}/>
            <DataTableBody mode={mode}/>
        </div>
     );
}

export default DataTable;