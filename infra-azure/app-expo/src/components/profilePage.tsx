// src/app-expo/components/profilerPage.tsx
import React, { FC, ReactElement, useRef, useState, useContext, useMemo } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Appbar } from 'react-native-paper';
import { TodoContext } from './todoContext';
import { CardScreen } from './cardScreen';
import { bindActionCreators } from '@/data/store/actions/actionCreators';
import * as listActions from '@/data/store/actions/listActions';
import { ListActions } from '@/data/store/actions/listActions';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const appContext = useContext(TodoContext)!;


interface ProfilePageProps {
    todoLists: typeof appContext.state.lists | [] | undefined;
}

const ProfilePage: FC<ProfilePageProps> = ({ todoLists }): ReactElement => {
    const pagerRef = useRef<ScrollView>(null);
    const [pageIndex, setPageIndex] = useState(0);

   
    const actions = useMemo(() => ({
        lists: bindActionCreators(listActions, appContext.dispatch) as unknown as ListActions,
    }), [appContext.dispatch]);

    const goToPage = (index: number) => {
        if (index < 0 || index >= (todoLists?.length || 0) || todoLists === undefined) return;
        pagerRef.current?.scrollTo({ x: index * SCREEN_WIDTH, animated: true });
        setPageIndex(index);
    };

    return (
        <View style={styles.container}>
            <Appbar.Header elevated>
                <Appbar.Action icon="chevron-left" onPress={() => goToPage(pageIndex - 1)} />
                <Appbar.Content title={`Profile: List ${pageIndex + 1}`} />
                <Appbar.Action icon="chevron-right" onPress={() => goToPage(pageIndex + 1)} />
            </Appbar.Header>

            <ScrollView
                horizontal
                pagingEnabled
                ref={pagerRef}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={e => {
                    const newIndex = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
                    setPageIndex(newIndex);
                }}
            >
                {todoLists?.map(list => (
                    <View key={list.id} style={styles.page}>
                        {list?.items?.map(item => (
                            <CardScreen
                                key={item.id}
                                title={item.name || ''}
                                dueInDays={item.dueInDays || -1}
                                progress={item.progress || 0}
                            />
                        ))}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
    },
    page: {
        width: SCREEN_WIDTH,
        padding: 16,
    },
});

export default ProfilePage;