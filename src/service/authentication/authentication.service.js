import _ from 'lodash';
import * as registerApi from '../../apis/authentication/authentication.api';

export const getUser = async (userName,password) => {
    const result = await registerApi.getUser(userName,password);
    return _.get(result, 'data');
};

export const login = async (userName,password) => {
    const result = await registerApi.login(userName,password);
    return _.get(result, 'data');
};

export const deleteProduct = async (productID,userName) => {
    const result = await registerApi.deleteProduct(productID,userName);
    return _.get(result, 'data');
};

export const deleteProductAfterPayment = async (productList) => {
    const result = await registerApi.deleteProductAfterPayment(productList);
    return _.get(result, 'data');
};
