export type AppState = {
  isRodoVisible: boolean;
};

export const initState = Object.freeze<AppState>({
  isRodoVisible: false,
});

const actions = {
  OPEN_RODO: (state: AppState): AppState => ({ ...state, isRodoVisible: true }),
  CLOSE_RODO: (state: AppState): AppState => ({
    ...state,
    isRodoVisible: false,
  }),
};

export type Actions = keyof typeof actions;

const reducer = (state: AppState, action: { type: Actions }) =>
  actions[action.type](state);

export default reducer;
