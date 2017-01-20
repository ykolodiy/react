import React from 'react'
import {render} from 'react-dom'
import {hello, goodbye} from './lib'





// now we need to rended created element (2 arguments)
render (
	
<div> {hello}{goodbye}</div>,

document.getElementById('react-container')
	)