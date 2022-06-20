import styled from "styled-components"
const Pick = styled.select`
  background-color: #e9ab64;
  color: #feedb5;
`
const Select = () => {
  return (
    <>
      <Pick>
        <option>€ EUR</option>
        <option>$ USD</option>
        <option>€ GBP</option>
        <option>£ ARS</option>
      </Pick>
    </>
  )
}

export default Select