import React from 'react';

export const ImageComponent =(props) =>{
    return(
        <figure>
            <img src = {process.env.PUBLIC_URL + 'selectedImg'} width='100' height='100' alt='test'/>
            <figcaption>{this.props.imageTitle}</figcaption>
        </figure>    
    );
}

export default ImageComponent;