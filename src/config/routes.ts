import EmptyLayout from '@/components/layout/EmptyLayout'
import MainLayout from '@/components/layout/MainLayout'
import Auth from '@/pages/auth/Auth'
import UserBlogs from '@/pages/user/UserBlogs'
import UserProfile from '@/pages/user/UserProfile'
import { AUTH_PATH, USER_BLOGS_PATH, USER_PROFILE_PATH } from './constants'

export default [
    // {
    //   path: "/",
    //   Component: null,
    //   Layout: MainLayout,
    // },

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
]
