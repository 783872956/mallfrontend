import {get} from '../../utilities/httpHelper.util';
const baseUrl = `${window.location.protocol}//${window.location.host}/shoppingmall/api`;

export const getCommodities = () => {
    return get(`${baseUrl}/dashboard/getCommonidities`);
};

export const productAutoComplete = searchKeyword => {
    return get(`${baseUrl}/dashboard/searchProductAutoComplete?searchKeyword=${searchKeyword}`);
};

export const selectEachProduct = productID=> {
    return get(`${baseUrl}/dashboard/selectEachProduct?productID=${productID}`);
};

//通过用户名查找本人的购物车信息
export const selectVeryProduct = userName=> {
    return get(`${baseUrl}/dashboard/selectVeryProduct?userName=${userName}`);
};


