import httpGetRequest from './httpGetRequest'
import controller from './viz1/controller'
import controller2 from './viz2/controller'
import { initSelector, initEventListener } from './viz1/setup'
import { getCourseNames } from './viz1/util'
import { selectAll } from 'd3'

$(document).ready(function() {
    document.getElementById('viz1').onclick = function() {
        httpGetRequest('http://localhost:4000/' + 'viz1', (data) => {
            selectAll('svg').remove()
            Object.freeze(data)
            //console.log(data)
            // create the dropdown selector
            initSelector(getCourseNames(data))

            initEventListener(data)

            // call controller, which handles the initial drawing
            controller(data)
        })
    }
    document.getElementById('viz2').onclick = function() {
        httpGetRequest('http://localhost:4000/' + 'viz2', (data) => {
            selectAll('svg').remove()
            Object.freeze(data)
            //console.log(data)
            // create the dropdown selector
            //initSelector(getCourseNames(data))

            //initEventListener(data)

            // call controller, which handles the initial drawing
            controller2(data)
        })
    }
})