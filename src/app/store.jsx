import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './slice/mainSlice';
import toDoSlice from './slice/toDoSlice';
import rankingSlice from './slice/rankingSlice';
import mySlice from './slice/mySlice';
import timeTimerSlice from './slice/timeTimerSlice';
import dDaySlice from './slice/DdaySlice';
import calenderSlice from './slice/calenderSlice';
import joinSlice from './slice/joinSlice';
import profileSlice from './slice/profileSlice';
import colorSlice from './slice/layoutColorSlice';

export const store = configureStore({
    reducer: {
        main: mainSlice.reducer,
        toDo: toDoSlice.reducer,
        ranking: rankingSlice.reducer,
        my: mySlice.reducer,
        timer: timeTimerSlice.reducer,
        calender: calenderSlice.reducer,
        dDay: dDaySlice.reducer,
        join: joinSlice.reducer,
        profile: profileSlice.reducer,
        color: colorSlice.reducer,
    },
});
