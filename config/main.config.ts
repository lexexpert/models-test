import { Breakpoint } from '@mui/system';

type MainConfigType = {
  appName: string;
  maxContainerWidth: Breakpoint;
};

export const mainConfig: MainConfigType = {
  appName: 'OnlyModels',
  maxContainerWidth: 'xl',
};
