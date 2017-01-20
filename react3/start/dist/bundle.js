'use strict';

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


var style = {
	backgroundColor: 'orange',
	color: 'white',
	fontFamily: 'verdana'
};

// lets create element (3 arguments)
var title = createElement(
//what we want create
'h1',
//any properties
{ id: 'title', className: 'header', style: style },
//what to display
'Hello World');

// now we need to rended created element (2 arguments)
render(React.createElement(
	'h1',
	{ id: 'title',
		className: 'header',
		style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' } },
	'Hello World suka'
), document.getElementById('react-container'));
