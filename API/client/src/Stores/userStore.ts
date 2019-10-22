import {createContext} from "react";
import {observable} from "mobx";

class UserStore {
    @observable username: string = '';
    @observable userToken: string = '';
    @observable userDisplayName: string = '';
    @observable userPassword: string = '';
    @observable userEmail: string = '';
    @observable walletFunds: number = 0;
    @observable depositAmount: number = 0;
}

export default createContext(new UserStore());