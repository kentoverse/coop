import { Reducer } from 'react';
import { TodoItem } from '@/models/todoItem';
import { TodoActions, ActionTypes } from '@/store/actions/common';

export const selectedItemReducer: Reducer<TodoItem | undefined, TodoActions> = (
  state = undefined, // default undefined
  action
) => {
  switch (action.type) {
    case ActionTypes.SELECT_TODO_ITEM:
      return action.payload;
    default:
      return state;
  }
};