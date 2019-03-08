import React from 'react';
import SuperMarketTempalte from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

const SuperMarket = () => {
    return <SuperMarketTempalte items={<ShopItemList />} basket={<BasketItemList />} total={<TotalPrice />} />;
};

export default SuperMarket;