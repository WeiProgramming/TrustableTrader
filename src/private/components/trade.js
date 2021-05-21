import React, {useState} from 'react'
import styled from 'styled-components';
import CardSearchModal from '../modal/card-search';

const TradeComponent = () => {
    let [showSearchModal, setShowSearchModal] = useState(false);

    const onClickShowModal = () => {
        setShowSearchModal(true);
    }
    const onClickCloseModal = () => {
        setShowSearchModal(false);
    }
    return (
        <Trade>
            <CardSearchModal showModal={showSearchModal} closeModal={onClickCloseModal}></CardSearchModal>
            <Row>
                <TradeContainer>
                    <SubmitBtn onClick={(e) => onClickShowModal()}>Show modal</SubmitBtn>
                </TradeContainer>
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
    margin: 3% 2%;
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

const SubmitBtn = styled.a`
    width: 100px;
    height: 50px;
    border-radius: 5px;
    background-color: green;
`
