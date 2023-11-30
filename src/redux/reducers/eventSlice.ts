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

    }
})


export const { addEvent } = eventSlice.actions



export const selectAllEvent = (state: RootState) => state.eventReducer

export default eventSlice
