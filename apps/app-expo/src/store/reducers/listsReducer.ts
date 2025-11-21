import { Reducer } from 'react';
import { TodoList } from '@/models/todoList';
import { TodoActions, ActionTypes } from '@/store/actions/common';

export const listsReducer: Reducer<TodoList[], TodoActions> = (
  state = [], // default empty array
  action
) => {
  switch (action.type) {
    case ActionTypes.LOAD_TODO_LISTS:
      return [...action.payload];
    case ActionTypes.SAVE_TODO_LIST:
      return [...state, action.payload];
    case ActionTypes.DELETE_TODO_LIST:
      return state.filter(list => list.id !== action.payload);
    default:
      return state; // fallback returns current state
  }
};