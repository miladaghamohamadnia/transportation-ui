import React from 'react'
import { Button, TickCircleIcon, BanCircleIcon, defaultTheme, ThemeProvider } from 'evergreen-ui'



export default function SwitchButton(props) {
  const {text, stateVal, setStateVal, iconBefore} = props;
  return (
    <ThemeProvider value={defaultTheme}>
      <Button 
        intent={stateVal ? 'success' : 'danger'}
        onClick={()=>setStateVal(!stateVal)}
        height={22}
        width={'6rem'}
        borderRadius={5}
        
        iconBefore={stateVal ? TickCircleIcon : BanCircleIcon}
      >{text}</Button>
    </ThemeProvider>
  )
}
