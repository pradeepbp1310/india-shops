import React from 'react';
import SHOP_DATA from './shop.data';

export class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>Shop page</div>
        )
    }
}