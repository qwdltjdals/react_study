import { useEffect, useState, useRef } from "react";
import "./style.css";

function DataTableBody({ mode, setMode, products, setProducts, isDeleting, setDeleting, setEditProductId }) {
    const [viewProducts, setViewProducts] = useState([]);
    const [checkedAll, setCheckedAll] = useState(false);

    useEffect(() => {
        if (mode === 0) {
            resetViewProducts();
            setCheckedAll(false);
        }
    }, [products, mode]); // products가 변하는걸 체크함 mode 가 수정 / 삭제 등으로 변하면 확인

    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked); // map을 돌려서 checked만 가져옴(체크박스 속성)
        if (checkStates.includes(false)) { //하나라도 체크가 false면
            setCheckedAll(false); // 전체 선택 박스 false
        } else {
            setCheckedAll(true);// 전체 선택 박스 true
        }
    }, [viewProducts]);

    useEffect(() => {
        if (isDeleting) {
            setProducts([...viewProducts
                .filter(viewProduct => viewProduct.isChecked === false)
                .map(viewProduct => {
                    const { isChecked, ...product } = viewProduct;
                    return product;
                })
            ]);
            setMode(0);
            setDeleting(false);
        }
    }, [isDeleting]);

    useEffect(() => {
        if (mode === 2) {
            const [selectedProduct] = viewProducts.filter(product => product.isChecked) // [첫번째 요소] = 뷰프ㄹ덕트에서  필터(프로덕트 => 프로덕트가 체크면)
            setEditProductId(!selectedProduct ? 0 : selectedProduct.id); //체크된게 있으면 프로덕트 아이디 넘겨줌
        }
    }, [viewProducts])

    const resetViewProducts = () => {
        setViewProducts([...products.map(product => ({ ...product, isChecked: false }))])
    }

    const handlecheckedAllChange = (e) => {
        setCheckedAll(checked => {
            if (!checked) {
                setViewProducts([...products.map(product => ({ ...product, isChecked: true }))])
            } else { // useEffect에서의 return : 언마운트기 때문에 else사용
                resetViewProducts();
            }
            return !checked;
        });
    }

    const handleCheckedChange = (e) => {
        if (mode === 2) {
            setViewProducts(viewProducts => [
                ...viewProducts.map(product => {
                    if (product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return {
                        ...product,
                        isChecked: false
                    }
                })
            ]);
        }
        if (mode === 3) {
            setViewProducts(viewProducts => {
                return [...viewProducts.map(product => {
                    if (product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return product;
                })]
            });
        }
    }

    return (
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                disabled={mode !== 3}
                                onChange={handlecheckedAllChange}
                                checked={checkedAll}
                            />
                        </th>
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewProducts.map(product => (
                            <tr key={product.id}>
                                <th>
                                    <input type="checkbox"
                                        disabled={mode === 0 || mode === 1}
                                        checked={product.isChecked}
                                        onChange={handleCheckedChange}
                                        value={product.id}
                                    />
                                </th>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.size}</td>
                                <td>{product.color}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DataTableBody;