import { Pane } from 'evergreen-ui'
import React from 'react'
import {Spinner} from 'evergreen-ui'


export default function LoadingSpinner() {
    return (
        <Pane 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            height={400}  
        >
                Loading
                <Spinner delay={1000} size={'5rem'}/>
        </Pane>
    )
}
