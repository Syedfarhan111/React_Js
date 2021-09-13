import React from 'react';
import { Emptable } from './Emptable';
import { EmpReducer } from '../Reducers/EmpReducer';
export const EmptableList = () => {
    return (
        <div>
            <table>       <tr>
                    <th>Name</th>
                    <th>Place</th>
                </tr></table>
            {EmpReducer.data.map((item)=>(
            
                <Emptable item={item}/>
            )
            )}
        </div>
    );
};