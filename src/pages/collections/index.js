import React from 'react'
// import collections from '../../components/collections'
import './collections.scss';

import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionsPage = ({collection}) => {
  // console.log(collection)
  // check destructured collections, it seems not to highlight
return(
  
    <div className='collection-page'>
      <h2>Collection</h2>
      {/* collection */}
    </div>
  )
}



const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
    
  })

export default connect(mapStateToProps)(CollectionsPage);