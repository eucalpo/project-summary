import type { Node, Edge } from './types';
import { scaleLinear } from 'd3-scale';

export const canvas = {
  width: '600px',
  height: '600px',
  background: 'whitesmoke'
};

export const scale = {
  x: scaleLinear<string>()
    .range(['0px', canvas.width]),
  y: scaleLinear<string>()
    .range([canvas.height, '0px'])
};

export const nodeStyle = {
  radius: 1/36,
  fill: 'whitesmoke',
  stroke: 'hsl(0, 0%, 30%)',
  weight: '0.8ex'
};

export const edgeStyle = {
  weight: nodeStyle.weight,
  stroke: nodeStyle.stroke,
  separation: 5 * nodeStyle.radius / 6
};

export const nodeMap = new Map<string, Node>([
  ['A', { id: 'A', cx: 1/7, cy: 1/2}],
  ['X', { id: 'X', cx: 1/7 + 1/16, cy: 1/2 - 1/7}],
  ['B', { id: 'B', cx: 2/7, cy: 1/2}],
  ['C', { id: 'C', cx: 3/7, cy: 1/2}],
  ['D', { id: 'D', cx: 4/7, cy: 1/2}],
  ['E', { id: 'E', cx: 5/7, cy: 1/2}],
  ['Y', { id: 'Y', cx: 5/7 - 1/16, cy: 1/2 + 1/7}],
  ['F', { id: 'F', cx: 6/7, cy: 1/2}],
] as [string, Node][]);

export const edgeMap = new Map<string, Edge>([
  ['A-B0', { id: 'A-B0', nodeA: 'A', nodeB: 'B', yShift: -1/2 }],
  ['A-B1', { id: 'A-B1', nodeA: 'A', nodeB: 'B', yShift: +1/2 }],
  ['X-B0', { id: 'X-B0', nodeA: 'X', nodeB: 'B', yShift: +0/2 }],
  ['B-C0', { id: 'B-C1', nodeA: 'B', nodeB: 'C', yShift: +0/1 }],
  ['C-D0', { id: 'C-D1', nodeA: 'C', nodeB: 'D', yShift: +0/1 }],
  ['D-Y0', { id: 'D-Y0', nodeA: 'D', nodeB: 'Y', yShift: +0/2 }],
  ['D-E0', { id: 'D-E1', nodeA: 'D', nodeB: 'E', yShift: +0/1 }],
  ['E-F0', { id: 'E-F1', nodeA: 'E', nodeB: 'F', yShift: -1/2 }],
  ['E-F1', { id: 'E-F1', nodeA: 'E', nodeB: 'F', yShift: +1/2 }],
] as [string, Edge][]);
