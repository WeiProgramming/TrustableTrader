import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

//firebase
import { auth, googleProvider } from '../../firebase'
import { setUserDetails } from '../../shared/services/firebase/firebase-db'

//Redux
import { useSelector, useDispatch } from 'react-redux'

// Redux Userslice
import {
  selectUserName,
  selectPhoto,
  setUserLogout,
  setUserLogin,
} from '../../features/user/userSlice'

const NavigationComponent = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const username = useSelector(selectUserName)
  const userImage = useSelector(selectPhoto)

  useEffect(async () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUserLogin({
            username: user.displayName,
            email: user.email,
            photo: user.photoURL,
          }),
        )
        history.push('/dashboard')
      }
    })
  }, [])

  const handleOnLoginClick = (e) => {
    auth.signInWithPopup(googleProvider).then((res) => {
      let user = res.user
      setUserDetails(user.uid)
      dispatch(
        setUserLogin({
          username: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }),
      )
      history.push('/')
    })
  }

  const handleOnLogoutClick = (e) => {
    auth.signOut().then(() => {
      dispatch(setUserLogout())
      history.push('/')
    })
  }

  return (
    <Nav>
      <NavListContainer>
        {username ? (
          <>
            <NavListItem>
              <NavProfilePhoto>
                Welcome, <img src={userImage} />
              </NavProfilePhoto>
              {username}!
            </NavListItem>
            <NavListItem>
              <Link to="/">Home</Link>
            </NavListItem>
            <NavListItem>
              <Link to="/dashboard">Dashboard</Link>
            </NavListItem>
            <NavListItem>
              <Link to="/trade">Trade</Link>
            </NavListItem>
            <NavListItem>
              <Link to="/account">Account</Link>
            </NavListItem>
            <NavListItem onClick={() => handleOnLogoutClick()}>
              <Link to="/trade">Logout</Link>
            </NavListItem>
          </>
        ) : (
          <>
            <NavListItem>
              <Link to="/">Home</Link>
            </NavListItem>
            <NavListItem onClick={() => handleOnLoginClick()}>
              <Link to="/login">Login</Link>
            </NavListItem>
          </>
        )}
      </NavListContainer>
    </Nav>
  )
}

export default NavigationComponent

const Nav = styled.div`
  width: 100%;
  height: 75px;
  background-color: #e2e5de;
  -webkit-box-shadow: 0px 10px 4px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 4px -2px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: flex-end;
  z-index: 5;
  position: relative;
`

const NavProfilePhoto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 25px;
    margin-left: 5px;
    max-width: 30%;
    height: auto;
  }
`

const NavListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`

const NavListItem = styled.div`
  height: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #e2e5de;

    > * {
      color: #676767;
    }
  }
  a {
    text-decoration: none;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`
