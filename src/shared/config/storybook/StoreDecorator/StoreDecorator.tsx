import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { ComponentType } from 'react';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (Story: ComponentType) => (
  <StoreProvider initialState={initialState as StateSchema}>
    <Story />
  </StoreProvider>
);
