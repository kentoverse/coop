import { Dispatch } from "react";
import { ItemActions } from '@/store/actions/itemActions';
import { TodoItem } from "./todoItem";
import { TodoList } from "./todoList";

export interface AppContext {
    state: ApplicationState;
    dispatch: Dispatch<ItemActions>;
}

export interface ApplicationState {
    lists: TodoList[];
    selectedList?: TodoList;
    selectedItem?: TodoItem;
}

// Default state
export const getDefaultState = (): ApplicationState => {
    return {
        lists: [],           // ✅ empty array, not undefined
        selectedList: undefined,
        selectedItem: undefined
    };
};