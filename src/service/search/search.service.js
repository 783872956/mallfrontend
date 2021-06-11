import _ from 'lodash';
import * as searchApi from '../../apis/search/search.api';

export const getCommodities = async () => {
    const result = await searchApi.getCommodities();
    return _.get(result, 'data');
};

export const productAutoComplete = async searchKeyword => {
    const result = await searchApi.productAutoComplete(searchKeyword);
    return _.get(result, 'data');
};

export const selectEachProduct = async productID => {
    const result = await searchApi.selectEachProduct(productID);
    return _.get(result, 'data');
};

export const selectVeryProduct = async userName => {
    const result = await searchApi.selectVeryProduct(userName);
    return _.get(result, 'data');
};
