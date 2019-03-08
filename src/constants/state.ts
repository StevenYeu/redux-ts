export interface ITodos {
  id: number;
  text: string;
  completed: boolean;
}

export interface AppState {
  todo: ITodos[];
  visibilityFilter: string;
}

export const initialAppState = {
  todo: [],
  visibilityFilter: 'SHOW_ALL'
};
