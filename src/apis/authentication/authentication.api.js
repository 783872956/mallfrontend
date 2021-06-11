import {post} from '../../utilities/httpHelper.util';
import {deleteRequest} from '../../utilities/httpHelper.util';

const baseUrl = `${window.location.protocol}//${window.location.host}/shoppingmall/api`;

export const getUser= (userName , password) => {
    return post(`${baseUrl}/register/getUser`, {userName,password});
};

export const login= (userName , password) => {
    return post(`${baseUrl}/user/login`, {userName,password});
};

//购物车删除商品
export const deleteProduct= (productID , userName) => {
    return deleteRequest(`${baseUrl}/dashboard/deleteProduct`,{productID,userName});
};

//从购物车购买成功后删除商品
export const deleteProductAfterPayment= (productList) => {
    return deleteRequest(`${baseUrl}/dashboard/deleteProductAfterPayment`,{productList});
};

