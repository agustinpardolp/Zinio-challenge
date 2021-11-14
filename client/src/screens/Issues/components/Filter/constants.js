import { types } from "../../constants";

export const typeOptions = [
  { key: 0, label: types.all, value: types.all },
  { key: 1, label: types.advanced, value: types.advanced },
  { key: 2, label: types.simple, value: types.simple },
  { key: 3, label: types.custom, value: types.custom },
];

export const queryKeys = {
  earthDate: 'earthDate',
  sol: 'sol',
  camera: 'camera',
  pagination: 'pagination',
};
