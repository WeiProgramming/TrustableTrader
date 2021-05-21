import React from 'react'
import styled from 'styled-components'
import bgTable from '../../assets/images/background/trade-table-bg.jpg'

import { AiOutlineSearch } from 'react-icons/ai'

// Express
import { tryGetCardsByFuzzyName } from '../../shared/services/express/express-api'

const CardSearchModal = ({ showModal, closeModal }) => {
  if (showModal) {
    return (
      <Modal>
        <CardSearchContainer>
          <SearchInputContainer>
            <label for="seach-input">Search</label>
            <input type="text" placeholder="" name="search-input" />
            <span class="search-icon-container">
              <AiOutlineSearch></AiOutlineSearch>
            </span>
          </SearchInputContainer>
          <Row>
            <CardTable>Test</CardTable>
            <CardResults>

              <div>
                <label>Card Set</label>
                <select>
                  <option>Set</option>
                </select>
              </div>
              <div>
                <label>Edition</label>
                <select>
                  <option>Edition</option>
                </select>
              </div>
              <div>
                <label>Condition</label>
                <select>
                  <option>Condition</option>
                </select>
              </div>
            </CardResults>
          </Row>

          <CloseBtn onClick={() => closeModal()}>Close</CloseBtn>
        </CardSearchContainer>
      </Modal>
    )
  } else {
    return <></>
  }
}

export default CardSearchModal

const CardSearchContainer = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  padding: 15px;
  height: 800px;
  width: 700px;
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 10%;
`

const CardDisplay = styled.div`
  
`

const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`
const CloseBtn = styled.a`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background-color: green;
  position: absolute;
  top: 15px;
  right: 15px;
`

const SearchInputContainer = styled.div`
  width: fit-content;
  margin-bottom: 55px;
`
const CardTable = styled.div`
  height: 700px;
  width: 60%;
  background-image: url(${bgTable});
`

const CardResults = styled.div`
  width: 30%;
  label {
    text-align: center;
  }
  select {
    width: 100%;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
`
