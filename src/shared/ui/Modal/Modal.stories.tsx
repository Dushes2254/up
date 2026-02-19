import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Modal',
  isOpen: true,
  onClose: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
  children: 'Modal',
  isOpen: true,
  onClose: () => {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
