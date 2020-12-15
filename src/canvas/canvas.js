import React, {useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import SideBox from './slidings/sidebox'
import InfoBox from './welcome/infobox'
import SlidingMenu from './slidings/slidingmenu'
import Map from './map/map'
import LoadingSpinner from './loading/loadingspinner'


const CanvasStyle = styled.div`
    position: relative;
`
 
// const initialMapParams = {
//     basemap: 'dark',
// }

const mapColors = {
    traffic:{
        agentColors: [
        [200, 200, 0, 255],
        [0, 200, 200, 255],
        [200, 0, 200, 255],]
    },
    buildings: {

    }

}

export default function Canvas() {
    const [showCtrlsSlider, setShowCtrlsSlider] = useState(false)
    const [showAboutSlider, setshowAboutSlider] = useState(false)
    const [showBldgs, setshowBldgs] = useState(false)
    const [showVhls, setshowVhls] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <CanvasStyle>
            <InfoBox/>
            <Map 
                buildingsShowProps={[showBldgs, setshowBldgs]} 
                vehiclesShowProps={[showVhls, setshowVhls]}
                loadingProps={[isLoading, setIsLoading]}
                mapColors = {mapColors}
            />
            <SlidingMenu
                buildingsShowProps={[showBldgs, setshowBldgs]} 
                vehiclesShowProps={[showVhls, setshowVhls]}
                controlProps={[showCtrlsSlider, setShowCtrlsSlider]}
                aboutProps={[showAboutSlider, setshowAboutSlider]}
                mapColors={mapColors}
            />
            {/* <SideBox/> */}
            {/* <Metrics/> */}
            {/* <Controls/> */}
            {/* <Credits/> */}
            {isLoading && <LoadingSpinner/>}
        </CanvasStyle>
    )
}

