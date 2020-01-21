import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectShopSection } from '../../redux/shop/shop.selector'
// import { selectCollection } from '../../redux/shop/shop.selector'
import './collections.scss';

import CollectionPreview from '../../components/CollectionPreview/collectionPreview';


const CollectionsOverview = ({shop}) =>  {
   
  return (
    
      <div className='shop-page'>
          {shop.map(({id, ...otherCollections}) => (
              <CollectionPreview key={id} {...otherCollections}/>
          ))}
      </div>
  )

}

const mapStateToProps = createStructuredSelector({
  shop: SelectShopSection,
})
export default connect(mapStateToProps)(CollectionsOverview);