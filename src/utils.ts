import { scale, nodeMap, nodeStyle, edgeStyle } from './constants';
import type { Node, Edge } from './types';
import * as d3 from 'd3';

export function defaultNode<T extends d3.BaseType>(this: T, datum: [string, Node], index: number, groups: T[] | ArrayLike<T>): void {
  const [id, node] = datum;
  d3.select(this)
    .attr('id', id)
    .attr('cx', scale.x(node.cx))
    .attr('cy', scale.y(node.cy))
    .attr('r', scale.x(nodeStyle.radius))
    .attr('stroke-width', nodeStyle.weight)
    .attr('stroke', nodeStyle.stroke)
    .attr('fill', nodeStyle.fill);
}

export function defaultEdge<T extends d3.BaseType>(this: T, datum: [string, Edge], index: number, groups: T[] | ArrayLike<T>): void {
  const [id, edge] = datum;
  const nodeA = nodeMap.get(edge.nodeA)!;
  const nodeB = nodeMap.get(edge.nodeB)!;
  d3.select(this)
    .attr('id', id)
    .attr('x1', scale.x(nodeA.cx))
    .attr('y1', scale.y(nodeA.cy - edge.yShift * edgeStyle.separation))
    .attr('x2', scale.x(nodeB.cx))
    .attr('y2', scale.y(nodeB.cy - edge.yShift * edgeStyle.separation))
    .attr('stroke-width', edgeStyle.weight)
    .attr('stroke', edgeStyle.stroke);
}

export function animatePath(ids: string[], color: string, reset: boolean = true): void {
  const duration = 500;
  const delay = 300;
  for (let i = 0; i < ids.length; i++) {
    d3.select(`#${ids[i]}`)
      .transition()
      .duration(duration)
      .delay(delay * i)
      .attr('stroke', color)
      .call(function (transition) {
        if (reset) {
          transition.transition()
            .duration(duration)
            .attr('stroke', nodeStyle.stroke);
        }
      });
  }
}

export function animateFill(ids: string[], color: string, reset: boolean = true): void {
  const duration = 500;
  const delay = 300;
  for (let i = 0; i < ids.length; i++) {
    d3.select(`#${ids[i]}`)
      .transition()
      .duration(duration)
      .delay(delay * i)
      .attr('fill', color)
      .call(function (transition) {
      if (reset) {
        transition.transition()
          .duration(duration)
          .attr('stroke', nodeStyle.stroke);
      }
    });
  }
}
