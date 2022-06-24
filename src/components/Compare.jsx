import styled from "styled-components"
const Div = styled.div`
    color: #feedb5;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const P = styled.p`
    font-size: 1.6rem;
    margin: 2rem 0 0 0;
    span {
        font-weight: 700;
    }
`
const Price = styled.p`
    font-size: 3rem;
    margin: 1rem 0 0 0;
    span {
        font-weight: 700;
    }
`
const Img = styled.img`
    width: 5rem;
    margin: 2rem 0 0 0;
`
const Compare = ({result}) => {
  const { PRICE, HIGHDAY, LOWDAY, HIGHHOUR, LOWHOUR, IMAGEURL} = result
  return (
    <Div>
        <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt='CryptoImg'/>
        <Price>Price: <span>{PRICE}</span></Price>
        <P>Highest price of the hour: <span>{HIGHHOUR}</span></P>
        <P>Lowest price of the hour: <span>{LOWHOUR}</span></P>
        <P>Highest price of the day: <span>{HIGHDAY}</span></P>
        <P>Lowest price of the day: <span>{LOWDAY}</span></P>
    </Div>
  )
}

export default Compare