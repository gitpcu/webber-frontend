import withSplitting from 'lib/withSplitting';

export const Intro = withSplitting(() => import('./Intro'));
export const Login = withSplitting(() => import('./Login'));
export const Editor = withSplitting(() => import('./Editor'));
export const Template = withSplitting(() => import('./Template'));
export const Community = withSplitting(() => import('./Community'));
export const PostView = withSplitting(() => import('./PostView'));
export const Admin = withSplitting(() => import('./Admin'));
export const ManageUser = withSplitting(() => import('./ManageUser'));
export const ManageBoard = withSplitting(() => import('./ManageBoard'));
export const Analytics = withSplitting(() => import('./Analytics'));
