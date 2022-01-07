import { canvas, nodeMap, edgeMap } from './constants';
import { defaultNode, defaultEdge } from './utils';
import { select } from 'd3-selection';
import { slides } from './slides';

export let counter = 0;

export function render(): void {
  const root = select('body')
    .append('svg')
    .attr('width', canvas.width)
    .attr('height', canvas.height);

  const background = root.append('g')
    .attr('id', 'background');
  background.append('rect')
    .attr('x', '0px')
    .attr('y', '0px')
    .attr('width', canvas.width)
    .attr('height', canvas.height)
    .attr('fill', canvas.background);

  const graphLayer = root.append('g')
    .attr('id', 'graph');
  const edgeLayer = graphLayer.append('g')
    .attr('id', 'edges');
  const nodeLayer = graphLayer.append('g')
    .attr('id', 'nodes');

  const nodes = nodeLayer
    .selectAll('circle')
    .data(nodeMap)
      .join('circle')
      .each(defaultNode)

  const edges = edgeLayer
    .selectAll('line')
    .data(edgeMap)
      .join('line')
      .each(defaultEdge);

  root.on('click', () => {
    slides[counter]();
    counter = (counter + 1) % slides.length;
  });
}