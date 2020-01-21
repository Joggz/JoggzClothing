import { createSelector } from 'reselect';
const COLLECTION_ID_MAP = {
  hat: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}
const selectShop = state => state.shop;

export const SelectShopSection = createSelector(
  [selectShop],
  (shop) => shop.SHOP_DATA
)

export const selectCollection = collectURLparams => createSelector(
  [SelectShopSection],
 (SHOP_DATA) => SHOP_DATA.find(SHOP_DATA.id === COLLECTION_ID_MAP[collectURLparams])
)