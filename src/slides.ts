import { animatePath, animateFill } from "./utils";
import { nodeStyle } from "./constants";

const train0 = {
  route: [
    'A',
    'A-B0', 'B',
    'B-C0', 'C',
    'C-D0', 'D',
    'D-E0', 'E',
    'E-F0', 'F',
  ],
  color: 'hsl(0, 50%, 50%)'
};
const train1 = {
  route: [
    'X',
    'X-B0', 'B',
    'B-C0', 'C',
    'C-D0', 'D',
    'D-E0', 'E',
    'E-F0', 'F',
  ],
  color: 'hsl(50, 50%, 50%)'
}
const train2 = {
  route: [
    'F', 'E-F1',
    'E', 'D-E0',
    'D', 'C-D0',
    'C', 'B-C0',
    'B', 'A-B1',
    'A',
  ],
  color: 'hsl(150, 50%, 50%)'
};
const train3 = {
  route: [
    'Y', 'D-Y0',
    'D', 'C-D0',
    'C', 'B-C0',
    'B', 'X-B0',
    'X',
  ],
  color: 'hsl(200, 50%, 50%)'
};

export const slides = [
  function showTrain0 () {
    animatePath(train0.route, train0.color);
  },
  function showTrain1 () {
    animatePath(train1.route, train1.color);
  },
  function showTrain2 () {
    animatePath(train2.route, train2.color);
  },
  function showTrain3 () {
    animatePath(train3.route, train3.color);
  },
  function showDelayRoute () {
    animatePath(train0.route, train0.color, false);
  },
  function showSingleTrackSegment() {
    animatePath(train0.route.slice(0, 2), nodeStyle.stroke, false)
    animatePath(train0.route.slice(-2), nodeStyle.stroke, false)
  },
  function showConflictTrain1 () {
    animatePath(train1.route.slice(0, 2), train1.color, false);
    setTimeout(() => {
      animateFill(train1.route.slice(2, 3), train1.color, false);
    }, 600);
  },
  // train 2 conflict
  function showConflictTrain2 () {
    // reset
    animatePath(train1.route.slice(0, 2), nodeStyle.stroke, false);
    animatePath(train1.route.slice(3, 4), train0.color, false);
    // train 2
    animatePath(train2.route.slice(0, 2), train2.color, false);
    setTimeout(() => {
      animateFill(train2.route.slice(2, train2.route.length - 2), train2.color, false)
    }, 600);
  },
  // train 3 conflict
  function showConflictTrain3 () {
    // reset
    animatePath(['E-F0'].concat(train2.route.slice(0, 4)), nodeStyle.stroke, false);
    setTimeout(() => {
      animateFill(train2.route.slice(0, 4), nodeStyle.fill, false)
    }, 600);
    // train 3
    animatePath(train3.route.slice(0, 2), train3.color, false);
    setTimeout(() => {
      animateFill(train3.route.slice(2, train3.route.length - 2), train3.color, false)
    }, 600);
  },
  function reset() {
    const trains = [train0, train1, train2, train3];
    for (const train of trains) {
      animatePath(train.route, nodeStyle.stroke, false);
      setTimeout(() => {
        animateFill(train.route, nodeStyle.fill, false);
      }, 600);
    }
  }
] as Function[];
