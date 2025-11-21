import { Reducer } from 'react';
import { TodoActions, ActionTypes } from '@/store/actions/common';
import { TodoList } from '@/models/todoList';
import { TodoItem } from '@/models/todoItem';
import { listsReducer } from './listsReducer';
import { selectedListReducer } from './selectedListReducer';
import { selectedItemReducer } from './selectedItemReducer';

// Combine reducers
export interface ApplicationState {
  lists: TodoList[];
  selectedList?: TodoList;
  selectedItem?: TodoItem;
}

const reducers: Reducer<ApplicationState, TodoActions> = (state, action) => ({
  lists: listsReducer(state?.lists, action),
  selectedList: selectedListReducer(state?.selectedList, action),
  selectedItem: selectedItemReducer(state?.selectedItem, action),
});

export default reducers;