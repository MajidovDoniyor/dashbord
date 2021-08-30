import styled from "styled-components";

const Containt = styled.div`
  .h100 {
    height: 100px;
    transition: all 0.3s linear;
  }
  .h0 {
    height: 0;
    transition: all 0.3s linear;
  }
  .topW {
    background-color: #151515;
    transition: all 0.3s linear;
    a {
      color: #848d94;
      &:hover {
        background-color: #848d94;
        color: #151515;
      }
    }
  }
  .topD {
    background-color: #848d94;
    transition: all 0.3s linear;
    a {
      color: #151515;
      &:hover {
        background-color: #151515;
        color: #848d94;
      }
    }
  }
  .top_bar {
    overflow: hidden;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    transition: all 0.3s linear;
    a {
      transition: all 0.3s linear;
      width: 100%;
      font-size: 50px;
      text-decoration: none;
      height: 100%;
      display: grid;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        margin-left: 20px;
      }
    }
  }
  button {
    border-radius: 0;
    color: #848d94;
  }
`;
export default Containt;
