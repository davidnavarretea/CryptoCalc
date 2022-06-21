import styled from "styled-components"
// STYLED
const Formm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Fieldset = styled.fieldset`
border: none;
display: flex;
justify-content: center;
`
const Label = styled.label`
color: #feedb5;
font-size: 3rem;
margin-right: 1rem;
`
const Pick = styled.select`
  background-color: #e9ab64;
  color: #feedb5;
  border-color: #feedb5;
  border-radius: 2rem;
  padding: 0 1rem;
  text-align: center;
  @media (max-width: 992px){
    font-size: 2rem;
  }
`
const Input = styled.input`
  background-color: #e9ab64;
  color: #feedb5;
  border-color: #feedb5;
  padding: 1rem 0;
  border-radius: 2rem;
  width: 9rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  @media (max-width: 992px){
    font-size: 2rem;
  }
`
// Variables
const Form = ({setCurrency, setCrypto}) => {
  return (
    <Formm>
      <Fieldset>
        <Label>Choose Currency</Label>
        <Pick
        onChange={e => {
          setCurrency(e.target.value)
        }}
        >
          <option value='eur'>€ EUR</option>
          <option value='usd'>$ USD</option>
          <option value='gbp'>£ GBP</option>
          <option value='ars'>$ ARS</option>
        </Pick>
      </Fieldset>
      <Fieldset>
        <Label>Choose Crypto</Label>
        <Pick
        onChange={e => {
          setCrypto(e.target.value)
        }}
        >
          <option value='bitcoin'>Bitcoin</option>
          <option value='ethereum'>Ethereum</option>
          <option value='maker'>Maker</option>
          <option value='pax gold'>PAX Gold</option>
        </Pick>
      </Fieldset>
      <Input type='button' value='Check'/>
    </Formm>
  )
}

export default Form