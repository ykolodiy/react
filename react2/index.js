
const { createElement } = React
const { render } = ReactDOM


const style = { 
backgroundColor: 'orange',
color: 'white',
fontFamily: 'verdana'
}


// lets create element (3 arguments)
const title = createElement (
//what we want create
'h1',
//any properties
{id:'title', className: 'header', style: style}, 
//what to display
'Hello World'
)








// now we need to rended created element (2 arguments)
render (
	//what to render
title,

//where to render
document.getElementById('react-container')
	)
