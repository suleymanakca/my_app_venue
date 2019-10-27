import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


const SideDrawer = (props) => {
    return (
        <SwipeableDrawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
            >
            <List component="nav">
                <ListItem button onClick={() => console.log("featured")}>
                    Event starts in
                </ListItem>
                <ListItem button onClick={() => console.log("Venue NFO")}>
                    Venue NFO
                </ListItem>
                <ListItem button onClick={() => console.log("Highlights")}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => console.log("Pricing")}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => console.log("Location")}>
                    Location
                </ListItem>
            </List>
        </SwipeableDrawer>
    )
}

export default SideDrawer
