import reducer from '../src/tvshow/reducers/TvShowReducer';
import TvShowsActionConstants from '../src/tvshow/actions/TvShowActionConstants';

describe("Testing reducers", () => {

  const tvShowReducer = reducer.data;
  const tvShowReducerError = reducer.error;
  const mockData = {
    "id": 1,
    "title": "show"
  }
  const mockError = "Error occured";

  it('should return the initial state', () => {
    expect(tvShowReducer({}, {})).toEqual({});
  });

  //   it('it should handle post request', () => {
  //     const successAction = {
  //       type: TvShowsActionConstants.FETCH_TV_SHOW_LIST_DATA,
  //       value: mockData
  //     };

  //     expect(tvShowReducer({}, successAction)).toEqual({ "tvShowList": mockData });
  //   })

  //   it('it handles when payload data is empty', () => {
  //     const successAction = {
  //       type: TvShowsActionConstants.FETCH_TV_SHOW_LIST_DATA,
  //     };

  //     expect(tvShowReducer({}, successAction)).toEqual({ "tvShowList": {} });
  //   })

  //   it('it handles when error occurs during data fetch', () => {
  //     const ErrorAction = {
  //       type: TvShowsActionConstants.FETCH_TV_SHOW_LIST_ERROR,
  //       value: mockError
  //     };

  //     expect(tvShowReducerError({}, ErrorAction)).toEqual({ "tvShowListError": mockError });
  //   })

});