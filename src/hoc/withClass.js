import React from 'react';

const withClass = (WithClassComponent, className) => {
	return props => <WithClassComponent className={className} {...props} />

}

export default withClass

//use like this, in other class
//export defualt withClass(ClassName, style.name)