import React, { useEffect, useState } from 'react';
import { COLOR_OPTIONS, SIZE_OPTIONS } from '../../constants/productOptions';
import axios from 'axios';
import { Await } from 'react-router-dom';

function PostPage2(props) {
    const [ product, setProduct ] = useState({
        productName: "",
        price: "",
        sizeId: "",
        colorId: ""
    });

    const [ sizeOptions, setSizeOptions ] = useState([]);
    const [ colorOptions, setColorOptions ] = useState([]);


    useEffect(() => {  // 페이지가 로드 되었을 때
        const getSizes = async() => {
            const response = await axios.get("http://localhost:8080/api/v1/sizes")
            setSizeOptions(response.data);
            setProduct(product => ({
                ...product,
                sizeId: response.data[0].sizeId
            }));
        }
        const getColors = async() => {
            const response = await axios.get("http://localhost:8080/api/v1/colors")
            setColorOptions(response.data);
            setProduct(product => ({
                ...product,
                colorId: response.data[0].colorId
            }));
        }
        getSizes();
        getColors();
        
    }, []); // 배열을 비워두면 초기에 한번만 들고오기

    const handleInputChange = (e) => {
        setProduct(product => {
            return {
                ...product,
                [e.target.name] : e.target.value
            }
        })
    }
    const handleSubmitClick = async () =>{
        try { // await은 promise앞에만 달 수 있음(비동기를 기다려라 서버에 다녀올 때 까지)
        const response = await axios.post("http://localhost:8080/api/v1/product", product); // 서버에 product객체를 요청날려라
        console.log(response);
        } catch (error) { // reject 동작
            console.error(error);
        }
    }
    return (
        <>
            <header>
                <h1>비동기 데이터 통신(POST2)</h1>
            </header>
            <main>
                <h3>상품등록</h3>
                <p>
                    <label htmlFor="">상품명</label>
                    <input type="text"
                        name='productName'
                        onChange={handleInputChange}
                    />
                </p>
                <p>
                    <label htmlFor="">가격</label>
                    <input type="text"
                        name='price'
                        onChange={handleInputChange}
                    />
                </p>
                <p>
                    <label htmlFor="">사이즈</label>
                    <select name='sizeId' onChange={handleInputChange} value={product.sizeId}>
                        {
                            sizeOptions.map(size =>
                            <option kay={size.sizeId} value={size.sizeId}>{size.sizeName}</option>) // optionTag 반복 돌려서 만들어줌 value = DB에서 정규화 할거니까 id = value기도 함
                        }
                    </select>
                </p>
                <p>
                    <label htmlFor="">색상</label>
                    <select name='colorId' onChange={handleInputChange} value={product.colorId}>
                        {
                            colorOptions.map(color =>
                            <option key={color.colorId} value={color.colorId}>{color.colorName}</option>)
                        }
                    </select>
                </p>
                <p>
                    <button onClick={handleSubmitClick}>등록하기</button>
                </p>
            </main>
        </>
    );
}

export default PostPage2;