import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import SwitchButton from './switchbutton'
import { Button, CaretRightIcon, CaretLeftIcon, defaultTheme, ThemeProvider } from 'evergreen-ui'


const Wrapper = styled(motion.div)`
    position: relative;
    display: block;
    margin: 2rem 0.2rem;
    padding: 0rem;
    max-width: 30vw;
    height: 200px;
    background-color: rgba(31, 41, 51, 255);
`

const Attachedbutton = styled.div`
    position: absolute;
    display: block;
    right: 0rem;
    top: 50%;
    transform: translateY(-50%) translateX(100%) rotate(0deg);
    margin: 0rem;
    padding: 0.0rem 0.0rem;
    writing-mode: tb-rl;
    text-align: center;
    opacity: 0.6;
    &:hover{
        opacity: 0.99;
    }
`

const SwitchList = styled(motion.ul)`
    position: absolute;
    display: flex;
    flex-direction: column;
    width:0;
    width:min-content;
    top: 0;
    left: 0;
    padding: 0rem;
    padding: 0.2rem;
    margin-top: 0.2rem;
    background-color: rgba(45, 60, 74, 255);
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color: rgba(235, 239, 242, 255);
`

const Switch = styled(motion.li)`
    position: relative;
    display: block;
    list-style-type: none;
    margin: 5px;
`



export default function SlidingControls(props) {
    const [showCtrlsSlider, setShowCtrlsSlider] = props.controlProps
    return (
        <Wrapper 
            animate={showCtrlsSlider ? 'show' : 'hidden'}  
            // exit='exit'
            variants={ctrlSliderVariant}
        >
            <Attachedbutton
                onClick = {()=>setShowCtrlsSlider(!showCtrlsSlider)}
            >
            <Button 
                height={'auto'} 
                paddingTop={'.3rem'} 
                paddingRight={'.3rem'} 
                paddingLeft={'.3rem'} 
                appearance={showCtrlsSlider ? 'primary' : 'secondary'}
            >
                controls
                {showCtrlsSlider ? 
                    <CaretRightIcon color="danger" size={'1.5rem'} marginBottom={'.1rem'}/> : 
                    <CaretLeftIcon color="danger" size={'1.5rem'} marginBottom={'.1rem'}/>}
            </Button>
                {/* controls */}
            </Attachedbutton>
            
            <SwitchList>
                show/hide layers 
                <Switch>
                    <SwitchButton 
                        stateVal = {props.buildingsShowProps[0]}
                        setStateVal = {props.buildingsShowProps[1]}
                        text='buildings'
                    />
                </Switch>
                <Switch>
                    <SwitchButton 
                        stateVal = {props.vehiclesShowProps[0]}
                        setStateVal = {props.vehiclesShowProps[1]}
                        text='vehicles'
                    />
                </Switch>
            </SwitchList>
        </Wrapper>
    )
}


//// animation settings ////
const ctrlSliderVariant = {

    show: {
        x: 0,
        opacity: 0.99,
        transition: {}
    },
    hidden: {
        x: '-30vw',
        opacity: 0.7,
        transition: {}
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