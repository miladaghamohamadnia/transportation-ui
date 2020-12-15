import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import SlidingControls from './slidingcontrols'
import SlidingAbout from './slidingabout'
import { defaultTheme, ThemeProvider } from 'evergreen-ui'
import Legend from '../legend/legend'

const parentTheme = {
    ...defaultTheme,
}

  
const Wrapper = styled(motion.div)`
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    height: 0vh;
    width: 30vw;
    opacity: 0.8;
`

export default function SlidingMenu(props) {
    const modes = {
        vehicle:        props.mapColors.traffic.agentColors[0], 
        motorcycle:     props.mapColors.traffic.agentColors[1], 
        bus:            props.mapColors.traffic.agentColors[2], 
    }
    return (
        <ThemeProvider value={parentTheme}>
            <Wrapper>
                <Legend 
                    {...props}
                    modes = {modes}
                />
                <SlidingControls
                    {...props}
                />
                {/* <SlidingAbout
                    {...props}
                /> */}
            </Wrapper>
        </ThemeProvider>
    )
}

