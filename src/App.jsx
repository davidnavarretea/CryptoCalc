import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Form from './components/Form'
import CryptoImage from './img/crypto.webp'
/* STYLED */
// Wrapper
const Wrapper = styled.div`
@media (min-width: 992px){
  display: flex;
  height: 100vh;
  align-items: center;
}
`
// H1
const H1 = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #feedb5;
  text-align: center;
  font-size: 4.5rem;
  font-weight: 700;
  margin: 8rem 0 5rem 0;
  &::after {
    content: '';
    width: 15rem;
    height: 0.6rem;
    background-color: #feedb5;
    display: block;
    margin: 1rem auto 0 auto;
  }
`
// Container
const Container = styled.div`
  width: 90%;
  max-width: 90rem;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
// Image
const Image = styled.img`
  width: 75%;
  max-width: 40rem;
  margin: 2.3rem auto 0 auto;
  display: block;
`
/* HTML */
const App = () => {
/* USE STATES */
const [currency, setCurrency] = useState('EUR')
const [crypto, setCrypto] = useState('BTC')
const [coins, setCoins] = useState({})
const [result, setResult] = useState({})
// USE EFFECT
useEffect(() => {
  if(Object.keys(coins).length > 0){
    const consultCrypto = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coins.crypto}&tsyms=${coins.currency}`
      const search = await fetch(url)
      const result = await search.json()
      setResult(result.DISPLAY[crypto][currency])
    }
    consultCrypto()
  }
}, [coins])

  return (
    <Wrapper>
      <Container>
        <div>
          <H1>Check Crypto</H1>
          <Form
          currency = {currency}
          setCurrency = {setCurrency}
          crypto = {crypto}
          setCrypto = {setCrypto}
          setCoins = {setCoins}
          />
        </div>
        <Image
          src={CryptoImage}
          alt='Crypto'
        />
      </Container>
    </Wrapper>
  )
}

export default App