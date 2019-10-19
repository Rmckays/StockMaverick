import React from "react";
import {Form} from "semantic-ui-react";
import style from './Cards.module.css';
import StockSearch from "../StockSearch/StockSearch";

const StockCard = () => {
  return (
    <div className={style.stockCard}>
        <Form className={style.form}>
            <Form.Field>
                <label >Stock Symbol</label>
                <input placeholder='Stock Symbol' />
            </Form.Field>
            <StockSearch />
        </Form>
    </div>
  );
};

export default StockCard;