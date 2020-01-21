import React from 'react';
import './shopPage.style.scss';

import { Route } from 'react-router-dom';

import CollectionsPage from '../../pages/collections/index';
import CollectionsOverview from '../../components/collections/index'
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { SelectShopSection } from '../../redux/shop/shop.selector';

// import CollectionPreview from '../../components/CollectionPreview/collectionPreview';


const ShopPage = ({match}) => {
//    console.log(match.path.categoryID)
        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
            </div>
        )

}


export default ShopPage;
// const mapStateToProps = createStructuredSelector({
//     shop: SelectShopSection,
// })
// export default connect(mapStateToProps)(ShopPage);