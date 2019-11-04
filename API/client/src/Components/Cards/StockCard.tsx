import React, {useContext, useEffect} from "react";
import {Form as FinalForm, Field} from "react-final-form";
import {Form} from "semantic-ui-react";
import {observer} from "mobx-react-lite";

import style from './Cards.module.css';
import StockSearch from "../StockSearch/StockSearch";
import RootStoreContext from "../../Stores/rootStore";

const StockCard: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const {loadStockHistory, loadQuerySymbol} = rootStore.stockStore;

  const handleChange = (event: any) => {
      const value = event.target.value;
      loadQuerySymbol(value);
  };

  return (
      <div className={style.stockCard}>
          <Form onSubmit={loadStockHistory} className={style.form}>
              <Form.Field>
                  <label >Stock Symbol</label>
                  <input onChange={handleChange} name="symbol" placeholder='Stock Symbol' />
              </Form.Field>
              <StockSearch />
          </Form>
      </div>
  );
};

export default observer(StockCard);