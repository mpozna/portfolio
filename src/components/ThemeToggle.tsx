import React, { ChangeEvent, createContext, useEffect, useState } from 'react'
import { Theme } from '../types'
import { Switch } from '@mui/material'

const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme>('light')

    const handleChange = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
        document.getElementById('root')?.setAttribute('color-scheme', 'dark')
    }

    return (
        <div>
            <label className="switch">
                <Switch value="checkedA"
                    inputProps={{ 'aria-label': 'Switch A' }}
                    onChange={handleChange}
                    checked={theme === 'dark'}
                />
            </label>
        </div>
    )
}

export default ThemeToggle