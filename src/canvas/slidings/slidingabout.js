import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const Wrapper = styled(motion.div)`
    position: relative;
    display: block;
    margin: 2rem 0.2rem;
    padding: 0rem;
    max-width: 30vw;
    height: 200px;
    background-color: green;
`

const Attachedbutton = styled(motion.button)`
    position: absolute;
    display: block;
    right: 0rem;
    top: 50%;
    transform: translateY(-50%) translateX(100%) rotate(-180deg);
    margin: 0rem;
    padding: 0.3rem 0.2rem;
    font-size: .9rem;
    background-color: gray;
    color: white;
    writing-mode: tb-rl;
    text-align: center;
    border-radius: 0.7rem 0rem 0rem 0.7rem;
`

const SwitcheList = styled(motion.ul)`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    padding: 0rem;
    margin: 0.2rem;
    background-color: gray;
    text-align: center;
`

const Switch = styled(motion.li)`
    position: relative;
    display: block;
    list-style-type: none;
    margin: 5px;
`



export default function SlidingControls(props) {
    const [showAboutSlider, setshowAboutSlider] = props.aboutProps
    return (
        <Wrapper 
            // isActive={showCtrls}
            // initial='hidden' 
            animate={showAboutSlider ? 'hidden' : 'show'}  
            // exit='exit'
            variants={aboutSliderVariant}
        >
            <Attachedbutton
                onClick = {()=>setshowAboutSlider(!showAboutSlider)}
            >
                about
            </Attachedbutton>
            
        </Wrapper>
    )
}


//// animation settings ////
const aboutSliderVariant = {

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