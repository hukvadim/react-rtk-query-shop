import React from 'react';

const Image = ({src, w = '', h = '', alt='Картинка', className='' }) => {
	return (
		<img src={src} alt={alt} className={className} width={w} height={h} />
	);
}

export default Image;
