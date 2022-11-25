import { configureStore} from '@reduxjs/toolkit';
import theaterReducer from './theaterSlice';

export default configureStore({
    reducer: {
        theater: theaterReducer,
    },
});