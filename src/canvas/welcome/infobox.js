import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components'
import {Enter} from '@styled-icons/ionicons-outline/Enter'


//// component styling ////
const InfoBoxStyle = styled(motion.div)`
    position: fixed;
    display: block;
    margin: auto;
    top: 60px;
    bottom: 40px;
    left: 10px;
    right: 10px;
    max-width: 450px;
    padding: 30px;
    background-color: #1f2933;
    border-radius: 20px;
    border: none;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, .8);
    z-index: 1000;
    font-size: 1rem;
`

const InfoBoxHeader = styled.h2`
    padding: 1rem 0rem;
    font-size: ${(props)=>(props.size)}rem;
    color: #a6c1d2;
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
`

const InfoBoxText = styled.h1`
    padding: 1rem;
    margin: 1rem;
    font-size: ${(props)=>(props.size)}rem;
    color: #a6c1d2;
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
`

const CloseInfoBoxButton = styled(motion.button)`
    left:0;
    right:0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    bottom: 10%;
    padding-right: 15px;
    padding-bottom: 0.5rem;
    width: 7rem;
    border: none;
    border-radius: 2rem;
    background-color: #1f2933;
    &: hover {
        background-color: #364759;
    }
`

const CloseInfoBoxIcon = styled(Enter)`
    ${'' /* position: absolute; */}
    color: #a6c1d2;
    width: 4rem;
    font-weight: bolder;
`

const CloseInfoBoxText = styled.h4`
    font-size: 1.2rem;
    color: #a6c1d2;
    margin: 0;
    margin-left: 5px;
    font-family: Helvetica, Arial, sans-serif;
`

//// animation settings ////
const InfoBoxVariant = {
    hidden: {
        y: -800,
        opacity: 1.0,
        scale: 0.0,
    },
    animate: {
        y: 0,
        opacity: .9,
        scale: .8,
        transition: {
            delay: 3,
            type: "spring",
            bounceDamping: 20,
            stiffness: 100,
            // ease: "easeInOut", 
            duration: .5,
        }
    },
    exit: {
        scale: .0,
        y: [-200, 800],
        transition: {
            type: "spring",
            bounceDamping: 20,
            stiffness: 100,
            ease: "easeInOut", 
            duration: .5,
        }
    },
}

const InfoBoxButtonVariant = {
    whileHover: {
        opacity: .9,
        scale: 1.1,
        transition: { 
            duration: .1,
        },
    },
    whileTap: {
        scale: .95
    }
}

const Curtain = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    z-index: 999;
`

//// JSX ////
export default function InfoBox() {
    const [showResults, setShowResults] = React.useState(true)
    const onClick = () => setShowResults(false)

    return (
    <AnimatePresence>
        {showResults && (
            <>
                <Curtain/>
                <InfoBoxStyle 
                    initial='hidden' 
                    animate='animate'  
                    exit='exit'
                    variants={InfoBoxVariant}
                >
                    <InfoBoxHeader size={1.4}>
                        Welcome
                    </InfoBoxHeader>
                    <InfoBoxHeader size={2.}>
                        Montreal Traffic Simulation
                    </InfoBoxHeader>
                    <InfoBoxText size={1.}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales ut etiam sit amet nisl. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Turpis massa sed elementum tempus egestas. Vitae nunc sed velit dignissim sodales ut eu sem integer. Cursus in hac habitasse platea dictumst quisque. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. 
                    </InfoBoxText>
                    <InfoBoxText size={1.}>
                    Scelerisque purus semper eget duis. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Purus faucibus ornare suspendisse sed nisi lacus sed. Egestas dui id ornare arcu odio ut. Erat velit scelerisque in dictum. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Porta nibh venenatis cras sed felis eget. Pellentesque dignissim enim sit amet. Nunc consequat interdum varius sit amet mattis vulputate enim. 
                    </InfoBoxText>
                    <CloseInfoBoxButton 
                        whileHover='whileHover' 
                        whileTap='whileTap'
                        variants={InfoBoxButtonVariant}
                        onClick={onClick}
                    >
                        <CloseInfoBoxIcon/>
                        <CloseInfoBoxText> ENTER </CloseInfoBoxText>
                    </CloseInfoBoxButton>
                </InfoBoxStyle>
            </>
        )}
    </AnimatePresence>
    )
}
