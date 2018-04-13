import React from 'react';
import '../App.css';
import {Collapsible, CollapsibleItem} from 'react-materialize';

const Menu = (props) => {
    return(
        <Collapsible className='Menu' accordion defaultActiveKey={1}>
            <h3>Menu</h3>
            <CollapsibleItem header='First'>
                One
            </CollapsibleItem>
            <CollapsibleItem header='Second'>
                Two
            </CollapsibleItem>
            <CollapsibleItem header='Third'>
                Three
            </CollapsibleItem>
            <CollapsibleItem header='Fourth'>
                Four
            </CollapsibleItem>
            <CollapsibleItem header='Fifth'>
                Five
            </CollapsibleItem>
            <CollapsibleItem header='Six'>
                Six
            </CollapsibleItem>
        </Collapsible> 
    );
}
export default Menu;
