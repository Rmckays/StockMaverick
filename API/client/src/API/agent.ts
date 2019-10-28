import axios, {AxiosResponse} from 'axios';
import {IUser, IUserFormValues} from "../Models/user";
import {IStock} from "../Models/stockModel";

axios.defaults.baseURL = '/api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    loginUser: (url: string, body: {}) => axios.post(url).then(responseBody),
    getUser: (url: string) => axios.get(url).then(responseBody),
    createUser: (url: string, body: {}) => axios.post(url).then(responseBody),
    addUserFunds: (url: string, body: {}) => axios.post(url).then(responseBody),

    getStock: (url: string, body: {}) => axios.get(url).then(responseBody),
    getStockHistory: (url: string, body: {}) => axios.get(url).then(responseBody),
    buyStock: (url: string, body: {}) => axios.post(url).then(responseBody),
    sellStock: (url: string, body: {}) => axios.post(url).then(responseBody),
    getStocksByUser: (url: string) => axios.get(url).then(responseBody),

    getWalletTransactions: (url: string) => axios.get(url).then(responseBody),
    getStockTransactions: (url: string) => axios.get(url).then(responseBody),

};

const Stocks = {
    getStocksByUser: (): Promise<IStock> => requests.getStocksByUser('/stock/user/stock'),
    buy: (symbol: string, body : {}): Promise<IStock> => requests.buyStock(`/stock/buy/${symbol}`, body),
};

const User = {
    current: (): Promise<IUser> => requests.getUser('/user'),
    login: (user: IUserFormValues): Promise<IUser> => requests.loginUser(`/user/login`, user),
    register: (user: IUserFormValues): Promise<IUser> => requests.loginUser(`/user/register`, user),
};

export default {
    Stocks,
    User
};
