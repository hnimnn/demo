import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { EventType, events } from '../../utils/data'
import { RootState } from '../store'


const intialState: EventType[] = events


const eventSlice = createSlice({
    name: 'event',
    initialState: intialState,
    reducers: {
        addEvent: (state: EventType[], action: PayloadAction<EventType>) => {
            state.push(action.payload)
        },
        updateEvent: (state: EventType[], action: PayloadAction<EventType>) => {
            const index = state.findIndex(e => e.id === action.payload.id);
            state[index] = action.payload;
        },
        deleteEvent: (state: EventType[], action: PayloadAction<number>) => {
            const index = state.findIndex(e => e.id === action.payload);
            state.splice(index, 1)
        }

    }
})


export const { addEvent, updateEvent, deleteEvent } = eventSlice.actions



export const selectAllEvent = (state: RootState) => state.eventReducer

export default eventSlice
