import React from 'react';

import {Card} from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    /* Ovde je vec kao props definisan onaj niz monsters */
    <div className='card-list'>
        {/* svaki clan monsters niza ce se definisati kao objekat pod imenom monster - ja zamenio sa cudo */}
        {props.monsters.map(cudo => (<Card key={cudo.id} cudo={cudo}/>))}
    </div>
);