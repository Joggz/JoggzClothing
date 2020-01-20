import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const SelectShopSection = createSelector(
  [selectShop],
  (shop) => shop.SHOP_DATA
)