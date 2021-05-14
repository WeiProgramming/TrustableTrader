import React from 'react'
import styled from 'styled-components'
import tradeBg from '../../assets/images/background/trade-table-bg.jpg'

const DashboardComponent = () => {
  return (
    <Dashboard>
      <Row>
        <WatchContainer>
          <Header>WatchList</Header>
          <WatchList></WatchList>
        </WatchContainer>
        <TradesContainer>
          <Header>TradeList</Header>
          <TradeList></TradeList>
        </TradesContainer>
      </Row>
      <Row>
        <AllTradeContainer>
          <Header>All Active Trades</Header>
          <AllTradeList></AllTradeList>
        </AllTradeContainer>
      </Row>
    </Dashboard>
  )
}

export default DashboardComponent

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Row = styled.div`
  display: flex;
  flex-wrap: no-wrap;

  > * {
    flex: 1;
    margin: 20px;
  }
`

const Header = styled.div`
  color: #000;
  text-align: center;
  padding: 15px 0;
  font-size: 24px;
`

const WatchContainer = styled.div`
  height: 600px;
`

const WatchList = styled.div`
  background-color: #b2beb5;
  background: url(${tradeBg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 80%;
`

const TradesContainer = styled.div`
  height: 600px;
`
const TradeList = styled.div`
  background-color: #b2beb5;
  background: url(${tradeBg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 80%;
`

const AllTradeContainer = styled.div`
  height: 600px;
`

const AllTradeList = styled.div`
  background-color: #b2beb5;
  background: url(${tradeBg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 80%;
`
