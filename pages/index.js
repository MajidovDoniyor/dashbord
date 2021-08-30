import React, { useState } from "react";
import Dashbords from "../containers/Dashbords";
import styled from "styled-components";

const index = () => {
  const [count, setcount] = useState([{ num: 2 }]);
  function Plus() {
    setcount(count[0].num + 1);
  }
  function Minus() {
    let plus = [...count, count[0].num - 1];
    setcount(plus);
  }
  return (
    <Dashbords>
      <Obshe>
        <div className="d-flex mb-2 justify-content-between">
          <button className="btn btn-primary text-white">prev</button>
          <h1>10</h1>
        </div>
        <PlusMinus>
          <button onClick={Minus} className="btn btn-danger">
            <h1>-</h1>
          </button>
          <h1>{count[0].num}</h1>
          <button onClick={Plus} className="btn btn-success">
            <h1>+</h1>
          </button>
        </PlusMinus>
        <button className="btn btn-warning text-white mt-2 w-100">
          Add...
        </button>
      </Obshe>
    </Dashbords>
  );
};

const Obshe = styled.div`
  padding-top: 20px;
  width: 35%;
  margin: auto;
`;

const PlusMinus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 60px;
  }
`;

export default index;
