import EmptyLayout from '@/layout/EmptyLayout';
import MainLayout from '@/layout/MainLayout';
import Auth from '@/pages/auth/Auth';
import UserBlogs from '@/pages/user/UserBlogs';
import UserProfile from '@/pages/user/UserProfile';
import Home from '@/pages/home/Home';
import { AUTH_PATH, BASE_PATH, USER_BLOGS_PATH, USER_PROFILE_PATH } from '.';

export const routes = [
    {
        path: BASE_PATH,
        Component: Home,
        Layout: MainLayout,
    },

    {
        path: AUTH_PATH,
        Component: Auth,
        Layout: EmptyLayout,
    },

    {
        path: USER_PROFILE_PATH,
        Component: UserProfile,
        Layout: MainLayout,
    },

    {
        path: USER_BLOGS_PATH,
        Component: UserBlogs,
        Layout: MainLayout,
    },
];
