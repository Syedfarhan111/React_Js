import React from 'react';

export const Emptable = ({item}) => {
    return (
        <div>
            <table>
         
                <tr>
                    <td>{item.name}</td>
                    <td>{item.place}</td>
                </tr>
            </table>
        </div>
    );
};