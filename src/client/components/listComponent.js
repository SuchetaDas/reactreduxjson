import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../common/checkbox';
import ImageComponent from '../common/image';

export const ListComponent = (props) =>{
        return (
            <div className = "col">
                    <div>
                    <header>
                        <CheckBox isSelected = {this.props.items.isActive}/>
                    </header>
                    <section>
                        <ImageComponent/>
                    </section>
                    <footer>
                        <i class = "fa fa-image-icon"></i>
                        <i class = "fa fa-info-circle"></i>
                    </footer>    
                    </div>
                 })}
            </div>
           
        );
}

export default ListComponent;