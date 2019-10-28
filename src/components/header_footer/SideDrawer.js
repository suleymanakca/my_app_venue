import React from 'react';
import {scroller} from 'react-scroll';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


const SideDrawer = (props) => {

    const scrollToElement= (element) =>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth: true,
            offset: -130
        });
        props.onClose(false)
    }


    return (
        <SwipeableDrawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
            >
            <List component="nav">
                <ListItem button onClick={() => scrollToElement('featured')}>
                    Event starts in
                </ListItem>
                <ListItem button onClick={() => scrollToElement('venuenfo')}>
                    Venue NFO
                </ListItem>
                <ListItem button onClick={() => scrollToElement('highlights')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => scrollToElement('pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => scrollToElement('location')}>
                    Location
                </ListItem>
            </List>
        </SwipeableDrawer>
    )
}

export default SideDrawer
