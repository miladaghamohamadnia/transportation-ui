import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const Wrapper = styled(motion.div)`
    position: absolute;
    border-radius: .5rem;
    display: flex;
    flex-direction: row;
    width:0;
    width:min-content;
    top: 0;
    left: 0;
    margin: .2rem;
    padding: 0.2rem;
    background-color: rgba(22, 60, 74, 255);
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color: rgba(235, 239, 242, 255);
`

const LegendItem = styled(motion.div)`
    display: block;
    margin: 0rem 1rem;
    div {
        width: 30px;
        height: 10px;
        background-color: ${ props => props.color };
        border: none;
        border-radius: 3px;
    }
    span {
        font-size: 1rem;
        font-weight: 200;
    }
`

function arrayToRgbaStr(arr){
    return "rgba(" + arr.join(" , ") + ")"
}

export default function legend(props) {
    const modes = props.modes;
    const show = props.vehiclesShowProps[0]
    return (
        <Wrapper
            variants={legendVariant}
            animate={show ? 'show' : 'hidden'}
        >
            {Object.keys(modes).map(function(keyName, keyIndex) {
                return(
                <LegendItem key={keyName} color={arrayToRgbaStr(modes[keyName])}>
                    <div/>
                    <span>{keyName}</span>
                </LegendItem>
                )
            })}
        </Wrapper>
    )
}

const legendVariant = {
    show: {
        x: 0,
        opacity: 0.99,
    },
    hidden: {
        x: -200,
        opacity: 0.0,
    }
}