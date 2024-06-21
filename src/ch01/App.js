import Hello from "./components/Hello";

/*
  컴포넌트 -> 함수 -> html 태그를 리턴하는 함수
  컴포넌트 = 파일 생성할 때 대문자로

  JSX = return 안에 있는거?
  1. 태그를 열었으면 닫아야 한다. <></> / < />
  2. 여러 태그를 리턴해야 하는 경우에는 하나로 묶어야 한다.
  3. JSX 안에 값 또는 변수를 사용하려면 {}표현식을 사용해야 한다.
*/
import "./App.css";
import CustomInput from "./components/CustomInput";
import Box from "./components/Box";

function App() {
  const name = "김준일";
  const frontColorRed = {
    color: "red"
  };

  const age = <h2>{31}</h2>;

  return <>
    <div>
      <Hello></Hello>
    </div>
    <div>
      <Hello></Hello>
    </div>
    <h1 style={frontColorRed} className={"fs-20 itelic"}>{name}</h1>
    <CustomInput ph={"이름"} disabled={true} value={"김준일"} />
    <CustomInput ph={"나이"} disabled={false} />
    <CustomInput ph={"연락처"} disabled={true} />
    <Box name={"김준일"} isShow={true}>
      {age}
      <h2>{31}</h2>
      <h2>{31}</h2>
    </Box>
  </>
}

export default App;
