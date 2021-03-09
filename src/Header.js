import React from "react"
import {AppBar, Toolbar, makeStyles} from "@material-ui/core"
import {Link} from "react-router-dom"

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#bfd1d9"
    },

    menulink: {
        paddingRight: "20px",
        paddingLeft: "20px"
    },

    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    }
}))

export default function Header(){
    const {header, menulink, toolbar} = useStyles();
    const displayDesktop = () => {
        return <Toolbar className={toolbar}>
            <div>
            <Link className={menulink} to="/">Home</Link>
            <Link className={menulink} to="/products">Product</Link>
            <Link className={menulink} to="/About">About us</Link>
            <Link className={menulink} to="/Cart">Cart</Link>
            </div>
            </Toolbar>
    }

    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    )
}