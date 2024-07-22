import { useEffect, useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";

function DataTableHeader({ mode, setMode, products, setProducts, setDeleting, editProductId }) {

    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    };

    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    }

    const [inputData, setInputData] = useState({ ...emptyProduct });

    useEffect(() => {
        const [product] = products.filter(product => product.id === editProductId); // 비구조할당
        setInputData(!product ? { ...emptyProduct } : { ...product }) // inputData에 product를 넣어줌(수정할거)

    }, [editProductId])

    const handleInputChange = (e) => { // (객체) / {함수의 몸체}
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value // name을 키값으로 value를 상태변화
        }));
    }

    const handleInputKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (e.target.name === "productName") {
                inputRef.size.current.focus();
            }
            if (e.target.name === "size") {
                inputRef.color.current.focus();
            }
            if (e.target.name === "color") {
                inputRef.price.current.focus();
            }
            if (e.target.name === "price") {
                handleSubmitClick();
                inputRef.productName.current.focus();
            }
        }
    }

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if (mode === 1) {
            setProducts(products => {
                const productIds = products.map(product => product.id);
                const maxId =
                    productIds.length === 0
                        ? 0
                        : Math.max.apply(null, productIds);
                return [...products, { ...inputData, id: maxId + 1 }]
            });
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 500
            });
            resetMode();
        }
        if (mode === 2) {
            Swal.fire({
                title: "상품 정보 수정",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소"
            }).then((result) => {
                if (result.isConfirmed) {
                    setProducts(products => [
                        ...products.map(product => {
                            if (product.id === editProductId) {
                                const { id, ...rest } = inputData; // 인풋 데이터에 아이디를 제외(아이디는 되도록 안바꾸는게 좋음)하고 나머지를 레스트(변수)에 넣음
                                return {
                                    ...product,
                                    ...rest // 기존의 프로덕트에 rest를 넣음(id제외)
                                }
                            }
                            return product;
                        })
                    ]);
                    resetMode();
                }
            });
        }
        if (mode === 3) {
            Swal.fire({
                title: "상품 정보 삭제",
                text: "정말로 삭제 하시겠습니까?",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "Red",
                cancelButtonText: "취소"
            }).then(result => {
                if (result.isConfirmed) {
                    setDeleting(true);
                }
            });
        }
    }

    const handleCencelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct })
    }

    return (
        <header className="table-header">
            <div className="input-group">
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="productName"
                    value={inputData.productName}
                    autoFocus
                    placeholder="상품명"
                    ref={inputRef.productName}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="size"
                    value={inputData.size}
                    placeholder="사이즈"
                    ref={inputRef.size}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="color"
                    value={inputData.color}
                    placeholder="색상"
                    ref={inputRef.color}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="price"
                    value={inputData.price}
                    placeholder="가격"
                    ref={inputRef.price}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
            </div>
            <div>
                {
                    !mode && (

                        <div className="button-group">
                            <button onClick={handleChangeModeClick} value={1}>추가</button>
                            <button onClick={handleChangeModeClick} value={2}>수정</button>
                            <button onClick={handleChangeModeClick} value={3}>삭제</button>
                        </div>
                    )
                }
                {
                    !!mode && (

                        <div className="button-group">
                            <button onClick={handleSubmitClick}>확인</button>
                            <button onClick={handleCencelClick}>취소</button>
                        </div>
                    )
                }
            </div>
        </header>
    );
}

export default DataTableHeader;