import React, { useState } from 'react';
import './Booking.css';
import { Link } from 'react-router-dom';

const Booking = () => {
  // 예약객실수 체크
  const [bookingRooms, setBookingRooms] = useState(1);

  const onClinkMinustBookingRooms = (e) => {
    e.preventDefault();
    bookingRooms > 1 ? setBookingRooms(bookingRooms - 1) : setBookingRooms(1);
  };
  const onClinkPlustBookingRooms = (e) => {
    e.preventDefault();
    setBookingRooms(bookingRooms + 1);
  };

  // 투숙객수 체크
  // const [adults, setAdults] = useState(2);

  // const onClinkMinustAdults = (e) => {
  //   e.preventDefault();
  //   adults > 1 ? setAdults(adults - 1) : setAdults(1);
  // };
  // const onClinkPlustAdults = (e) => {
  //   e.preventDefault();
  //   setAdults(adults + 1);
  // };

  // const [kids, setKids] = useState(0);
  // const onClinkMinustKids = (e) => {
  //   e.preventDefault();
  //   kids > 0 ? setKids(kids - 1) : setKids(0);
  // };
  // const onClinkPlustKids = (e) => {
  //   e.preventDefault();
  //   setKids(kids + 1);
  // };

  // 필수동의
  // const [checkedItems, setCheckedItems] = useState([]);

  // const handleCheck = (checked, value) => {
  //   if (checked) {
  //     setCheckedItems([...checkedItems, value]);
  //   } else if (!checked && checkedItems.includes(value)) {
  //     setCheckedItems(checkedItems.filter((el) => el !== value));
  //   }
  // };

  return (
    <div className="wholeWrapMyReservation">
      <div className="titlePayment">상품정보</div>
      <div className="productInfoPayment">
        <div className="productNamePayment">캠핑장</div>
        <div className="reservationDatePayment">2023.01.11 / 2023.01.12</div>
        <div className="bookingRoomsBox">
          <label className="researchNameLeft">예약객실수</label>
          <div className="rowFlexBoxBookingRoom">
            <label className="researchShortName">객실수</label>
            <button className="peopleHandlerButton" onClick={onClinkMinustBookingRooms}>
              -
            </button>
            <h3 className="peopleResearch">{bookingRooms}</h3>
            <button className="peopleHandlerButton" onClick={onClinkPlustBookingRooms}>
              +
            </button>
          </div>
        </div>
        {/* <div className="bookingRoomsBox">
          <label className="researchNameLeft">투숙객수</label>
          <div className="rowFlexBox ">
            <label className="researchShortName">성인</label>
            <button className="peopleHandlerButton" onClick={onClinkMinustAdults}>
              -
            </button>
            <h3 className="peopleResearch">{adults}</h3>
            <button className="peopleHandlerButton" onClick={onClinkPlustAdults}>
              +
            </button>
            <div className="spacing"></div>
            <label className="researchShortName">아동</label>
            <button className="peopleHandlerButton" onClick={onClinkMinustKids}>
              -
            </button>

            <h3 className="peopleResearch">{kids}</h3>
            <button className="peopleHandlerButton" onClick={onClinkPlustKids}>
              +
            </button>
          </div>
        </div> */}
      </div>
      <div className="titlePayment">예약자 정보</div>
      <div className="peopleInfoBooking">
        <div className="peopleInfoBox">
          <label className="bookingLabel">이름</label>
          <input className="bookingInput" type="text" placeholder="이름을 입력하세요."></input>
        </div>
        <div className="peopleInfoBox">
          <label className="bookingLabel">연락처</label>
          <input className="bookingInput" type="text" placeholder="연락처를 입력하세요."></input>
        </div>
        <div className="peopleInfoBox">
          <label className="bookingLabel">이메일</label>
          <input className="bookingInput" type="text" placeholder="이메일을 입력하세요."></input>
        </div>
        <div className="peopleInfoBox">
          <label className="bookingLabel">요청사항</label>
          <textarea className="bookingInput bookingTextArea" placeholder="여기에 입력하세요."></textarea>
        </div>
      </div>
      <div className="bookingAgreeBox">
        <div className="bookingCheckBox">
          <input
            className="checkBoxBorder"
            type="checkbox"
            // name="privacy"
            // onChange={handleCheck}
            // checked={checkedItems.includes("privacy") ? true : false}
          />
          약관 동의(필수)
        </div>
      </div>
      <div className="buttonBoxPayment">
        <Link to="/payment">
          <button className="buttonPayment">예약하기</button>
        </Link>
      </div>
    </div>
  );
};

export default Booking;
