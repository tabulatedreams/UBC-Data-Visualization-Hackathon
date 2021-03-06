import * as d3 from 'd3'
import * as util from './util'
import { margin, graphWidth, height, colour } from './constants'

const draw = (data) => {
console.log("test start")
    console.log(data)
//console.log("test end")
    const nodes = data
    
console.log("nodes inside draw function")
console.log(nodes)
    const curCourse = {
        courseName: ""
    }

    const svg = d3.select('#graph')
        .append('svg')
        .attr('style', 'display: block; margin: auto; margin-top: 30px;')
        .attr('width', '100%')
        .attr('height', height)
        .attr('viewBox', '0 0 ' + Math.min(graphWidth, height) + ' ' + 700)
        .attr('preserveAspectRatio', 'xMinYMin')

    const g = svg.append('g').attr("transform", "translate(" + margin.left + "," + (margin.top + 20) + ")")


    const tick = () => {
        circle
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    }

    const forceCollideBefore = d3.forceCollide()
        //.radius((d) => d.numberOfCourses + 10)
        .radius((d) => d.enrollment + 10)
        .iterations(1)

    const forceCollideAfter = d3.forceCollide()
        //.radius((d) => d.numberOfCourses + 10)
        .radius((d) => d.enrollment + 10)
        .iterations(1)

    const forceBefore = d3.forceSimulation()
        //.nodes(nodes.filter(d => d.time === 'before'))
        .nodes(nodes.filter(d => d.time === '1'))
        .force('X', d3.forceX(20).strength(1))
        .force('Y', (d) => { 
            return d3.forceY(-100).strength(1)
        })
        //.force('center', d3.forceCenter(graphWidth /2, height / 2))
        .force("charge", d3.forceManyBody().strength(0.3))
        .force("collide", forceCollideBefore)
        .on("tick", tick)
    
    const forceAfter = d3.forceSimulation()
        .nodes(nodes.filter(d => d.time === 'after'))
        .force('X', d3.forceX(graphWidth).strength(1))
        .force('Y', (d) => { 
            return d3.forceY(-100).strength(1)
        })
        //.force('center', d3.forceCenter(graphWidth /2, height / 2))
        .force("charge", d3.forceManyBody().strength(0.3))
        .force("collide", forceCollideAfter)
        .on("tick", tick)

    const forceCurrent = d3.forceSimulation()
        .nodes([curCourse])
        .force('center', d3.forceCenter(graphWidth /2, height / 2))
        .on("tick", tick)

    const circle = g.selectAll('circle')
        .data(nodes)
        .enter().append('circle')
        //.attr("r", (d) => Math.pow(Math.log(d.numberOfCourses*8), 3))
        .attr("r", (d) => Math.pow(Math.log(d.enrollment), 2.3))
        .style('fill', (d) => {
            //console.log(util.getFloorOfCourse(d.courseNumber))
            return colour[util.getFloorOfCourse(d.enrollment)]
        })
    
    // const curCourseCircle = g.selectAll('circle')
    //     .data([curCourse])
    //     .enter().append('circle')
    //     .attr('r', 10)

}

export default draw