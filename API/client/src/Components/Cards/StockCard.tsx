import React, {useContext, useState} from "react";
import {Form} from "semantic-ui-react";
import {observer} from "mobx-react-lite";

import style from './Cards.module.css';
import StockSearch from "../StockSearch/StockSearch";
import RootStoreContext from "../../Stores/rootStore";

const StockCard: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const {loadStockHistory, loadQuerySymbol} = rootStore.stockStore;
  const [invalid, setValid] = useState(true);


  const handleChange = (event: any) => {
      const value = event.target.value;
      handleQuery(value);
      loadQuerySymbol(value);
  };

  const handleQuery = (value: string) => {
      if(value.length > 2){
          setValid(false);
      } else {
          setValid(true);
      }
  };

  const validInput = (!invalid) ? <input onChange={handleChange} name="symbol" placeholder='Stock Symbol' /> :
      <input className={style.invalidInput} onChange={handleChange} name="symbol" placeholder='Stock Symbol' /> ;

  return (
      <div className={style.stockCard}>
          <Form onSubmit={loadStockHistory} className={style.form}>
              <Form.Field>
                  <label >Stock Symbol</label>
                  {validInput}
              </Form.Field>
              <StockSearch queryDisabled={invalid} />
          </Form>
      </div>
  );
};

export default observer(StockCard);