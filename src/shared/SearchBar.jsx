import React, {useRef} from "react";
import "./searchbar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BiSolidMap } from "react-icons/bi";
import { RiMapPinTimeFill } from "react-icons/ri";
import { BiSolidGroup } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {

  const locationRef = useRef('')
  const distanceRef = useRef(0)
  const maxGroupSizeRef = useRef(0)

  const searchHandler = () => {
    const location = locationRef.current.value 
    const distance = distanceRef.current.value 
    const maxGroupSize = maxGroupSizeRef.current.value 

    if(location ==="" || distance ==="" || maxGroupSize ==="") {
      return alert('Tất cả các lĩnh vực!')
    }
  }

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form>
          <FormGroup className="form__group form__group-fast">
            <div>
              <span className="form__group-box">
                <BiSolidMap className="form__icons" />
                <h6>Địa chỉ</h6>
              </span>
            </div>
            <div>
              <input type="text" placeholder="Bạn muốn đi đâu?" ref={locationRef}/>
            </div>
          </FormGroup>

          <FormGroup className="form__group form__group-fast">
            <div>
              <span className="form__group-box">
                <RiMapPinTimeFill className="form__icons" />
                <h6>Quãng đường</h6>
              </span>
            </div>
            <div>
              <input type="number" placeholder="Khoảng cách km" ref={distanceRef}/>
            </div>
          </FormGroup>

          <FormGroup className=" form__group form__group-last">
            <div>
              <span className="form__group-box">
                <BiSolidGroup className="form__icons" />
                <h6>Số lượng</h6>
              </span>
            </div>
            <div>
              <input type="number" placeholder="0" ref={maxGroupSizeRef}/>
            </div>
          </FormGroup>

          <span type='submit' onClick={searchHandler}>
          <FiSearch className="search__icon"/>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
