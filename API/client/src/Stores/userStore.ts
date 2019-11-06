import {action, computed, observable, runInAction} from "mobx";
import {IUser, IUserFormValues} from "../Models/user";
import agent from "../API/agent";
import {RootStore} from "./rootStore";
import {history} from "../index";

export default class UserStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
    }

    @observable user: IUser | null = null;
    @observable token: string | null = null;
    @observable cash: {amount: number} | null = null;

    @computed get isLoggedIn() {return !! this.user}

    @action login = async (values: IUserFormValues) => {
        try{
            const user = await agent.User.login(values);
            runInAction(() => {
                this.user = user;
                console.log(this.user);
                this.setToken(user.token);
            });
        }
        catch(error) {
            throw error;
        }
    };

    @action register = async (values: IUserFormValues) => {
        try{
            const user = await agent.User.register(values);
            runInAction(() => {
                this.user = user;
                this.setToken(user.token);
            });
        }
        catch(error){
            console.log(error);
        }
    };

    @action setToken = (token: string | null) => {
        window.localStorage.setItem('jwt', token!);
        this.token = token;
    };

    @action getCurrentUser = async () => {
        if(this.user){
            const user = await agent.User.current();
            runInAction(() => {
                this.user = user;
                this.setToken(user.token);
            })
        }
    };

    @action setCashAmount = async (value: number) => {
        runInAction(() => {
            this.cash = {amount: value}
        });
    };

    @action deposit = async () => {
        await agent.Funds.addCash(this.cash!);
        await this.getCurrentUser();
    };

    @action withdraw = async () => {
        await agent.Funds.withdrawCash(this.cash!);
        await this.getCurrentUser();
    };

    @action logout = () => {
        this.setToken(null);
        this.user = null;
        history.push('/');
        history.go(0);

    };
}