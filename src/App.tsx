import { Routes, Route } from 'react-router-dom';
import './globals.css';
import SignIn from './_auth/forms/SignIn';
import SignUp from './_auth/forms/SignUp';
import RootLayout from './_root/RootLayout';
import AuthLayout from './_auth/AuthLayout';
import {
  CreatePost,
  EditPost,
  Explore,
  Home,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from './_root/pages';
import { Toaster } from '@/components/ui/toaster';
import AllUsers from './_root/pages/AllUsers';
const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/*Private Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Route>
        {/*Public Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/all-users' element={<AllUsers />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:id' element={<EditPost />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/profile/:id/*' element={<Profile />} />
          <Route path='/update-profile/:id' element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
