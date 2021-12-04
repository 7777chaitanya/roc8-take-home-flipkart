import React from 'react';
import useStyles from './styles';
import SizeFilter from './SizeFilter/SizeFilter';
import BrandFilter from './BrandFilter/BrandFilter';
import IdealForFilter from './IdealForFilter/IdealForFilter';


const Filter = () => {
    const classes = useStyles();
    return (
        <div className={classes.filterBody}>
           <SizeFilter />
           <BrandFilter />
           <IdealForFilter />
        </div>
    )
}

export default Filter
