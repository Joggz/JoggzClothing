import React from 'react';
import './shopPage.style.scss';

import  SHOP_DATA from "./Shop_data";
import CollectionPreview from '../../components/CollectionPreview/collectionPreview';
class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({id, ...otherCollections}) => (
                    <CollectionPreview key={id} {...otherCollections}/>
                ))}
            </div>
        )
    }
}

export default ShopPage;