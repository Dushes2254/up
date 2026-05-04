import { PropsWithChildren, useEffect } from 'react';

import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

interface DynamicModuleLoaderProps {
  reducerKey: StateSchemaKey;
  reducer: Reducer;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: PropsWithChildren<DynamicModuleLoaderProps>) => {
  const {
    children, reducerKey, reducer, removeAfterUnmount,
  } = props;

  const store = useStore() as ReduxStoreWithManager;

  const dispatch = useDispatch();

  useEffect(() => {
    store.reducerManager.add(reducerKey, reducer);
    dispatch({ type: `@INIT ${reducerKey} reducer` });

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(reducerKey);
        dispatch({ type: `@DESTROY ${reducerKey} reducer` });
      }
    };
  }, []); // eslint-disable-line

  // TODO: remove this eslint-disable-next-line
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
