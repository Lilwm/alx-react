import { initialState, uiReducer } from './uiReducer';
import { Map } from 'immutable';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(initialState, null);
    expect(state).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const action = {
      type: 'SELECT_COURSE',
    };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(initialState.toJS());
  });

  it('should change the isNotificationDrawerVisible property to true when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = {
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    };
    const state = uiReducer(initialState, action);
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    expect(state.toJS()).toEqual(expectedState);
  });
});
