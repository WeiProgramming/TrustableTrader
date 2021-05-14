import React from 'react'
import styled from 'styled-components';
import herobg from '../../assets/images/hero/ygo-bg-home.jpg';
import {googleProvider, auth} from '../../firebase';

// Redux
import {useDispatch} from 'react-redux';

// Redux actions
import {setUserLogin} from '../../features/user/userSlice'


const HomeComponent = () => {
    const dispatch = useDispatch();

    const handleOnLoginClick = (e) => {
        auth.signInWithPopup(googleProvider).then(res => {
            console.log(res.user);
            let user = res.user;
            dispatch(setUserLogin({
                username: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))

        })
    }

    return (
        <Home>
            {/* Hero */}
             <Hero>
                 <HeroOverlay></HeroOverlay>
                 <HeroInfoContainer>
                    <h1>Trade How You Want</h1>
                    <p>All the power in your hands</p>
                    <WhiteBtn onClick={() => handleOnLoginClick()}>
                        <p>Login</p>
                    </WhiteBtn>
                 </HeroInfoContainer>
                
             </Hero>
        </Home>
    )
}

export default HomeComponent;

const Home = styled.div`
    background-color: #F5F5F5;
`

const Hero = styled.div`
    background-image: url(${herobg});
    min-height: 40vh;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    position: relative;
`
const HeroOverlay = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,.3);
    width: 100%;
    height: 100%;
`

const HeroInfoContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 5;

    h1 {
        color: #fff;
        margin: 0;
    }

    p {
        color: #fff;
    }
`

const WhiteBtn = styled.div`
    background-color: #fff;
    height: 40px;
    width: 90px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p {
        color: #000;
    }
`