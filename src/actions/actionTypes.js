import * as CONST from '../constants';

export const updateCells = (desiredCellState, coordinateList) => ({
  type: CONST.UPDATE_CELLS,
  desiredCellState,
  coordinateList,
});

export const stepGeneration = () => ({
  type: CONST.STEP_GENERATION,
});

export const toggleSimulation = () => ({
  type: CONST.TOGGLE_SIMULATION,
});

export const clearBoard = () => ({
  type: CONST.CLEAR_BOARD,
});
