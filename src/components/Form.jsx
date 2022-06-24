import { useState, useEffect } from "react"
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
  &:hover{
    cursor: pointer;
    background-color: #e9a65a;
  }
  transition: background-color .3s ease;
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
  &:hover{
    cursor: pointer;
    background-color: #e9a65a;
  }
  transition: background-color .3s ease;
  @media (max-width: 992px){
    font-size: 2rem;
  }
`
// COMPONENT
const Form = ({currency, setCurrency, crypto, setCrypto, setCoins}) => {
  const [cryptoData, setCryptoData] = useState([])
  useEffect(() => {
    const request = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const search = await fetch(url)
      const result = await search.json()
      const data = result.Data.map(crypto => {
        const cryptos = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        }
        return cryptos
      })
      setCryptoData(data)
    }
    request()
  }, [])
  // HandleSubmit
  const handleSubmit = e => {
    e.preventDefault()
    setCoins({
      currency,
      crypto
    })
  }
  return (
    <Formm
    onSubmit={handleSubmit}>
      <Fieldset>
        <Label>Choose Currency</Label>
        <Pick
        onChange={e => {
          setCurrency(e.target.value)
        }}
        >
          <option value='EUR'>€ EUR</option>
          <option value='USD'>$ USD</option>
          <option value='GBP'>£ GBP</option>
          <option value='ARS'>$ ARS</option>
        </Pick>
      </Fieldset>
      <Fieldset>
        <Label>Choose Crypto</Label>
        <Pick
        onChange={e => {
          setCrypto(e.target.value)
        }}
        >
          {cryptoData.map(e => (
            <option key={e.id} value={e.id}>{e.name}</option>
          ))}
        </Pick>
      </Fieldset>
      <Input type='submit' value='Check'/>
    </Formm>
  )
}

export default Form