import { useEffect, useState } from "react";
import DataTableHeader from "../../DataTableHeader/DataTAbleHeader";
import DataTableBody from "../DataTableBody/DataTableBody";
import "./Style.css";
import { SAMPLE_PRODICTS } from "../../constants/sampleProducts";

function DataTable() {
    const [isLoad, setLoad] = useState(false);
    const [mode, setMode] = useState(0); // 0 = 조회. 1 = 추가, 2 = 수정, 3 = 삭제
    const [products, setProducts] = useState([...SAMPLE_PRODICTS]);
    const [isDeleting, setDeleting] = useState(false);
    const [editProductId, setEditProductId] = useState(0);

    useEffect(() => {
        const lsProducts = localStorage.getItem("products");
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts));
        setLoad(true);
    }, []); // 맨처음에 동작할 때 디펜던시를 비워주기 / 로컬스토리지에 있는것들을 추가해주고

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return (
        <div className="table-main-container">
            <DataTableHeader
                mode={mode}
                setMode={setMode}
                products={products}
                setProducts={setProducts}
                setDeleting={setDeleting}
                editProductId={editProductId}
            />
            <DataTableBody
                mode={mode}
                setMode={setMode}
                products={products}
                setProducts={setProducts}
                isDeleting={isDeleting}
                setDeleting={setDeleting}
                setEditProductId={setEditProductId}
            />
        </div>
    );
}

export default DataTable;
