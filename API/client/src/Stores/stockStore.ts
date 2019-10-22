import {createContext} from "react";
import {observable} from "mobx";

class stockStore {
    @observable title = "Hello from MobX";
}

export default createContext(stockStore);