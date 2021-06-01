import styled from 'styled-components'

const Styles = styled.div`

.App {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  padding-left: 20px;
  text-align: center;
  font-weight: 100;
  font-size: 70px;
  letter-spacing: 20px;
  text-transform: uppercase;
  color: #32a3b1;
  margin: 0;
}

.appInput {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  width: 275px;
  height: 40px;
  color: #32a3b1;
  background: #ebf5fc;
  border: none;
  outline: none;
  border-radius: 40px;
  margin-top: 50px;
  padding: 5px 30px 5px 20px;
  box-shadow: inset -2px -2px 6px #fff, inset 2px 2px 6px rgb(0 0 0 / 10%);
}
.appInput::placeholder {
  font-size: 16px;
  color: #bdcada;
}

.searchInput {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  width: 150px;
  height: 25px;
  color: #32a3b1;
  background: #ebf5fc;
  border: none;
  outline: none;
  margin-top: 15px;
  border-radius: 40px;
  padding: 5px 30px 5px 20px;
  box-shadow: inset -2px -2px 6px #fff, inset 2px 2px 6px rgb(0 0 0 / 10%);
}
.searchInput::placeholder {
  font-size: 16px;
  color: #bdcada;
}

.appForm {
  position: relative;
}

.fa-plus {
  position: absolute;
  right: 15px;
  top: 68px;
  cursor: pointer;
  color: #32a3b1;
}

.deleteAllBtn {
  font-family: "Poppins", sans-serif;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 40px;
  font-weight: 300;
  background: #ebf5fc;
  padding: 2px;
  width: 50%;
  height: 30px;
  font-size: 16px;
  margin: 15px auto 0px;
  box-shadow: -2px -2px 6px #fff, 2px 2px 6px rgb(0 0 0 / 10%);
  color: #bdcada;
}
.deleteAllBtn:active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 1),
    inset 2px 2px 6px rgba(0, 0, 0, 0.1);
}
.deleteAllBtn:hover {
    color: #f85149;
}

.todoList {
  width: 280px;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

.listItem {
  display: flex;
  color: #32a3b1;
  justify-content: space-between;
}
.listItem:not(:last-child) {
  margin-bottom: 10px;
}

.deleteBtn {
  cursor: pointer;
  display: flex;
  padding-top: 5px;
  color: #bdcada;
  align-items: flex-start;
  margin-left: 15px;
  min-height: 100%;
  right: 0;
}
.deleteBtn .fa-trash:hover {
  color: #f85149;
}
.deleteBtn .fa-trash {
  margin-left: 10px;
}

.deleteBtn .fa-pencil:hover {
  color: #32a3b1;
}
`

export default Styles;