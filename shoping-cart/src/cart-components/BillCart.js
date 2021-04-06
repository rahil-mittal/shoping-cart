import React, { Component } from 'react';
import './../style.css';

class BillCart extends Component
{
    constructor(props)
    {
        super(props);
        this.state={netQuant:0,netPrice:0};
    }
    
    render()
    {
        
        let totalQ=(this.props.mainData.forEach((item) => {
            let p=0;
            p=p+item.quantity;
            return p;
        }));

        let totalP=(this.props.mainData.forEach((item) => {
            let p=0;
            p=p+(item.quantity*item.price);
            return p;
        }));
        
        return(
            <div>
               <div className="bill">
        <div className="billItem">
            <div>NET QUANTITY</div>
                <div id="displayNetQuan">
                    {totalQ}
                </div>
            <div>NET COST</div>
              <div id="displayTotal">
                    {totalP}
              </div>
        </div>
        </div>
            </div>
        );
    }
}

export default BillCart;