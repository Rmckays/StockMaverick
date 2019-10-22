import {createContext} from "react";
import {observable} from "mobx";

class UserStore {
    @observable username: string = '';
    @observable userToken: string = '';
    @observable userDisplayName: string = '';
    @observable userPassword: string = '';
    @observable userEmail: string = '';
    @observable userAuthenticated = false;
    @observable walletFunds = 0;
    @observable depositAmount = 0;
}

export default createContext(new UserStore());