import React from 'react'
import styled from 'styled-components';

const TradeComponent = () => {
    return (
        <Trade>
            <Row>
                <TradeContainer>Test</TradeContainer>
                <TradeContainer>Test</TradeContainer>
            </Row>
            <Row>
                <TradeContainer>Test</TradeContainer>
            </Row>
        </Trade>
    )
}

export default TradeComponent;

const Trade = styled.div`
    min-height: 80vh;
    width: 100%;

`

const TradeContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: red;
    height: 500px;
    width: 100%;
    margin: 10% 5%;
`

const Row = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: no-wrap;
    > * {
        flex: 1;
    }
`

const Form = styled.div`

`
