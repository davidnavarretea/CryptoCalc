import styled from "styled-components"
import Select from "./Select"
// STYLED
const Fieldset = styled.fieldset`
border: none;
display: flex;
justify-content: center;
`
const Label = styled.label`
color: #feedb5;
`
const Form = () => {
  return (
    <>
      <Fieldset>
        <Label>Choose Currency</Label>
        <Select/>
      </Fieldset>
    </>
  )
}

export default Form