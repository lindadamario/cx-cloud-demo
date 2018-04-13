import React from 'react';
import 'bulma/css/bulma.css';
import { 
  Column,
  Columns,
  Section,
  Icon
} from 'bloomer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/fontawesome-free-solid';


const Footer = (props) => {
    return(
        <Section className="section-3">
            <Columns>
                <Column hasTextAlign='centered'>
                    
                </Column>
                <Column hasTextAlign='centered'>
                    <p>CopyRight 2018</p>
                </Column>
                <Column className="socialIcons" hasTextAlign='centered'>
                    <FontAwesomeIcon color="gold" size="2x" icon={faBeer} />
                    <FontAwesomeIcon color="gold" size="2x" icon={faBeer} />
                    <FontAwesomeIcon color="gold" size="2x" icon={faBeer} />
                    <FontAwesomeIcon color="gold" size="2x" icon={faBeer} />
                    <FontAwesomeIcon color="gold" size="2x" icon={faBeer} />
                </Column>
            </Columns>
        </Section>
    );
}

export default Footer;