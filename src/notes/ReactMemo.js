import "./styles.css";
import React, { useState } from "react";



// rect memo ethukaga use panrom na nambe click function la click panumbothu irukkara ella functionum ovvoru thadavayum render aagum apdi render aaga kudathunu thaan reatemo use panrom
//usecallback ethukaga na reactmemo use pannumbothu prop aa ulla kudukumbothu marubadiyum ellamum render agum atha control panna ithu use aguthu

//ithu marubadiyum pakkumbothu puriyala na record la paathukoo
//additional session la redux day-2 la 30 mins ku appram irukum

export default function Reactmemo() {
      const [data, setData] = useState(0);
      const [cart, setCart] = useState(0);
    
      const [num, setNum] = useState(2);
    
      const bigLoop = () => {
        console.log("rendering bigloop.....");
        let cacl = 1;
        for (let i = 0; i < 1000; i++) {
          cacl *= num;
        }
        return cacl;
      };
    
      const bigdata = useMemo(() => bigLoop(), [num]);
    
      const changeData = useCallback(() => {
        setCart(cart + 2);
      }, [cart]);
      return (
        <div className="App">
          {data}
          <button onClick={() => setData(data + 1)}>black and white</button>
    
          <div>Cart data : {cart}</div>
          <Cart changeData={changeData} />
          <Cart2 />
          <h2>Big data : {bigdata}</h2>
          <button onClick={() => setNum(num+0.00001)}>change</button>
        </div>
      );
    }
    
    const Cart = React.memo(({ changeData }) => {
      console.log("rendering cart  1");
      return (
        <div>
          Cart 1<button onClick={changeData}>add cart</button>
        </div>
      );
    });
    
    const Cart2 = React.memo(() => {
      console.log("redering cart 2");
      return <div>Cart 2</div>;
    });
  