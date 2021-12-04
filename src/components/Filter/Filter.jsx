import React, {useContext} from 'react';
import useStyles from './styles';
import SizeFilter from './SizeFilter/SizeFilter';
import BrandFilter from './BrandFilter/BrandFilter';
import IdealForFilter from './IdealForFilter/IdealForFilter';
import { FilterStatesContext } from '../../contexts/FilterStatesContext';


const Filter = () => {
    const classes = useStyles();
    const { setSize, setBrand, setGender, productsToRender } =
    useContext(FilterStatesContext);
    return (
        <div className={classes.filterBody}>
           <SizeFilter />
           <BrandFilter />
           <IdealForFilter />
        </div>
    )
}

export default Filter
