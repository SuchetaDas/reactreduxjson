import React from 'react';

export const CheckBox = (props) =>{

    const isSelected = this.props.item.isActive;

    return(
        <div className = "flexItem">
            <input 
                type = "checkbox"
                checked = {isSelected}
            />   
        </div>    
    );
}

export default CheckBox;