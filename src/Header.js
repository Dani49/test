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
            <Link to="/">Home</Link>
            <Link to="/products">Product</Link>
            <Link to="/About">About us</Link>
            <Link to="/Cart">Cart</Link>
            </div>
            </Toolbar>
    }

    return (
        <header>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    )
}