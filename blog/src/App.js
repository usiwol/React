/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //이것도 컴포넌트
  let post = "역삼 우동 맛집"; //변수 : let, const, var // 자료 잠깐 저장할 땐 변수
  //방법1.
  //let [글제목, b] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]); //state문법
  //방법2.
  // let [글제목1, b] = useState("남자코트 추천"); //state문법
  // let [글제목2, h] = useState("강남 우동맛집"); //state문법
  // let [글제목3, d] = useState("파이썬독학"); //state문법
  // let [logo, setLogo] = useState("ReactBlog"); //state문법

  let num = [1, 2]; //destructuring문법 : 여기 있던 변수를 빼는것
  // let a = num[0]; // a == 1
  // let c = num[1]; // a == 2
  let [a, c] = [1, 2]; //destructuring문법

  let [따봉, 따봉변경] = useState(0);
  let [제목, 제목변경] = useState(0);
  //let [따봉, 따봉변경] = useState('안녕');

  // function 함수() {
  //   //긴 코드를 한 단어로 묶어주는 문법
  //   console.log(1);
  // }

  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  return (
    // jsx
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>

        <button //글제목 가나다순정렬하기
          onClick={() => {
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy);
          }}
        >
          가나다순정렬
        </button>

        <button
          onClick={() => {
            //글제목 변경하기
            // 글제목[0] = 글제목;
            let copy = [...글제목];
            copy[0] = "여자코트 추천";
            console.log(copy == 글제목);
            글제목변경(copy);
          }}
        >
          글수정
        </button>

        {/* <h4 id={post}>블로그임</h4> */}
      </div>
      <div className="list">
        {/* <h4>{글제목1}</h4> */}
        <h4>
          {글제목[0]}
          {/* <span onClick={함수}> 👍 </span> {따봉} */}
          <span
            onClick={() => {
              //state 변경하는 법
              따봉변경(따봉 + 1);
              //따봉변경('반가워');
            }}
          >
            👍{" "}
          </span>{" "}
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        {/* <h4>{글제목2}</h4> */}
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        {/* <h4>{글제목3}</h4> */}
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {/* <h4>{post}</h4> */}

      <Modal></Modal>
      <Test></Test>
    </div>
  );
}

// const Modal = () => {
//   return <div></div>;
// };

function Modal() {
  return (
    <div className="madal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

function Test() {
  return (
    <div className="madal">
      <h4>React</h4>
      <p>Study hard 😎</p>
      <p>cheer up!</p>
    </div>
  );
}
//컴포넌트 만드는법<Modal></Modal>
//function만들기
//return()안에 html담기
//<함수명></함수명>Tmrl
//어떤걸 컴포넌트로 만들면 좋은가
//1.반복적인 html축약할때
//2.큰 페이지들
//3.자주 변경되는 것들
//단점 : state가져다쓸 때 문제생김(a함수를 b함수에 가져다 쓸 수 없음)

export default App;

//state문법 사용하는 이유 : html이 자동렌더링이 됨(변수와의 차이점)
//변동시 자동으로 html에 반영되게 만들고 싶으면 state를 쓰면 된다
//자주 변경될거 같은 html부분은 state로 만들어 놓기!
//아무거나 state문법을 사용하면 안된다!
