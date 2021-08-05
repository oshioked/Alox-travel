import React, {createContext, useState, useEffect} from 'react';


export const ThemeContext = createContext({
    currentTheme: 'light',
    toggleTheme: ()=>{}
})

const ThemeProvider = ({children}) =>{
    const [currentTheme, setCurrentTheme] = useState(
        Boolean(window.localStorage.getItem('currentTheme')) 
        ? window.localStorage.getItem('currentTheme')
        : 'light'
    );

    const toggleTheme = () =>{
        if(currentTheme === 'dark'){
            setCurrentTheme('light')
        }else{
            setCurrentTheme('dark')
        }
    }

    useEffect(()=>{
        window.localStorage.setItem('currentTheme', currentTheme);
    }, [currentTheme])

    return(
        <ThemeContext.Provider
            value = {{
                currentTheme,
                toggleTheme
            }}
        >{children}</ThemeContext.Provider>
    )
}

export default ThemeProvider;