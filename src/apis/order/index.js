import {post} from '../../utilities/httpHelper.util';
const baseUrl = `${window.location.protocol}//${window.location.host}/shoppingmall/api`;

// 购买
export const createOrder= params => {
    return post(`${baseUrl}/dashboard/InsertOrder`, params);
};

//加入购物车
export const insertShoppingCart= params => {
    return post(`${baseUrl}/dashboard/InsertShopCart`, params);
};
