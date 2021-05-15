import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { Images } from '../../assets';
import  closeIcon from '../../assets/common/titlebar_icons-01.svg';
import  minimizeIcon from '../../assets/common/titlebar_icons-02.svg';
import  restoreDefault from '../../assets/common/titlebar_icons-03.svg';
import  maximizeIcon from '../../assets/common/titlebar_icons-04.svg';
import './index.scss';


const AppTitleBar = (props)  =>{
    const [isMaximize , setIsMaximize] = useState(false);

    useEffect(() => {
        ipcRenderer.on('titleBarStatus:restored' , () =>{
            setIsMaximize(false); 
        })
        ipcRenderer.on('titleBarStatus:maximized' , () =>{
            setIsMaximize(true); 
        })
    },[ipcRenderer])

    

    const handleClose = () =>{
        ipcRenderer.send('titleBarAction:close')
    }
    const handleMinimize = () =>{
        ipcRenderer.send('titleBarAction:minimize')
    }
    const handleMaximizeAndRestore = () =>{
        ipcRenderer.send('titleBarAction:maximizeOrRestore');
        // 
    }

    return(
        <header className="appTitleBar">
            <div className="appTitleBar__main">
            </div>
            <div className="appTitleBar__utility">
                <button className="appTitleBar__utility--minimize"  onClick={handleMinimize}>
                     <img src={minimizeIcon} alt="x"/>
                </button>
                <button className="appTitleBar__utility--maximize"  onClick={handleMaximizeAndRestore}>
                    <img src={ isMaximize ? restoreDefault : maximizeIcon } alt="x"/>
                </button>
                <button className="appTitleBar__utility--close"  onClick={handleClose}>
                     <img src={closeIcon} alt="x"/>
                </button>
            </div>
        </header>
    )
}

export default AppTitleBar;