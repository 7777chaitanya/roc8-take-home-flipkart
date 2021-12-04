import React, {useRef, useState, useContext} from "react";
import { SortContext } from '../../contexts/SortContext';

const Sort = () => {
   const highToLow = useRef(null);
   const lowToHigh = useRef(null);
   const [highToLowState, setHighToLowState] = useState(null);
   const [lowToHighState, setLowToHighState] = useState(null);
   const  { productsToRenderAfterSort, handleSortChange } = useContext(SortContext);

   const handleCheckBoxChange = (e) => {
        // console.log(e.target);
        // console.log(highToLow.current);
        if(e.target === highToLow.current){
            setHighToLowState(p => true);
            setLowToHighState(p => false);
            handleSortChange("highToLow")
        }
        else{
            setHighToLowState(p => false);
            setLowToHighState(p => true);
            handleSortChange("lowToHigh");

        }

   }
  return (
    <div>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="High to Low" ref={highToLow} onChange={handleCheckBoxChange} checked={highToLowState}/>
      <label for="vehicle1">High to Low</label>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Low To High" ref={lowToHigh} onChange={handleCheckBoxChange} checked={lowToHighState}/>
      <label for="vehicle2">Low To High</label>
    </div>
  );
};

export default Sort;
