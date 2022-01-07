export type Node = {
  id: string,
  cx: number,
  cy: number,
}

export type Edge = {
  id: string,
  nodeA: string,
  nodeB: string,
  yShift: number
}
