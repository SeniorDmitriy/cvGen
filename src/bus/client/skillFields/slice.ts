// Core
import { uniqueId } from 'lodash';

// Slice
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

export const initialState = [
    {
        id:    uniqueId(),
        skill: 'HTML',
    },
    {
        id:    uniqueId(),
        skill: 'CSS',
    },
    {
        id:    uniqueId(),
        skill: 'JS',
    },
    {
        id:    uniqueId(),
        skill: 'React',
    },
    {
        id:    uniqueId(),
        skill: 'Redux',
    },
    {
        id:    uniqueId(),
        skill: 'TypeScript',
    },
];

export const skillsSlice = createSlice<types.SkillsState, typeof reducers>({
    name: 'skills',
    initialState,
    reducers,
});

export const sliceName = skillsSlice.name;
export const skillsActions = skillsSlice.actions;
export default skillsSlice.reducer;
