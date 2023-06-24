import { reducer } from './notifications';

describe(MARK_AS_READ, () => {
  it('should mark the notification as read', () => {
    const state = {
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };
    const newState = reducer(state, action);
    expect(newState.notifications[2].isRead).toBe(true);
  });
});

describe('SET_TYPE_FILTER', () => {
  it('should set the filter to the specified value', () => {
    const state = {
      notifications: [],
      filter: 'all',
    };
    const action = {
      type: 'SET_TYPE_FILTER',
      filter: 'urgent',
    };
    const newState = reducer(state, action);
    expect(newState.filter).toBe('urgent');
  });
});
