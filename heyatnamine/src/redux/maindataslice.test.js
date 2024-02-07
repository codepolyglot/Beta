import { createEntityAdapter } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mainDataSlice } from './mainDataSlice';

const mockStore = configureStore([]);

describe('Main Data Slice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      mainData: mainDataSlice.reducer(undefined, {}),
    });
  });

  test('should handle mainDataReceived action', () => {
    const mainData = [
      { id: 1, title: 'Title 1' },
      { id: 2, title: 'Title 2' },
    ];

    store.dispatch(mainDataSlice.actions.mainDataReceived(mainData));

    const state = store.getState().mainData;

    expect(state.entities).toEqual({
      1: { id: 1, title: 'Title 1' },
      2: { id: 2, title: 'Title 2' },
    });
    expect(state.ids).toEqual([1, 2]);
  });

  test('should handle mainDataByIdReceived action', () => {
    const mainData = { id: 1, title: 'Title 1' };

    store.dispatch(mainDataSlice.actions.mainDataByIdReceived(mainData));

    const state = store.getState().mainData;

    expect(state.entities).toEqual({
      1: { id: 1, title: 'Title 1' },
    });
    expect(state.ids).toEqual([1]);
  });

  test('should handle mainDataBySlugReceived action', () => {
    const mainData = { id: 1, title: 'Title 1' };

    store.dispatch(mainDataSlice.actions.mainDataBySlugReceived(mainData));

    const state = store.getState().mainData;

    expect(state.entities).toEqual({
      1: { id: 1, title: 'Title 1' },
    });
    expect(state.ids).toEqual([1]);
  });

  test('should select all main data', () => {
    const mainData = [
      { id: 1, title: 'Title 1' },
      { id: 2, title: 'Title 2' },
    ];

    store.dispatch(mainDataSlice.actions.mainDataReceived(mainData));

    render(
      <Provider store={store}>
        <MainDataComponent />
      </Provider>
    );

    const mainDataElements = screen.getAllByRole('main-data');

    expect(mainDataElements).toHaveLength(2);
  });
});

// Mock MainDataComponent
const MainDataComponent = () => {
  const mainData = useSelector(selectAllMainData);

  return (
    <div>
      {mainData.map((data) => (
        <div key={data.id} role="main-data">
          {data.title}
        </div>
      ))}
    </div>
  );
};