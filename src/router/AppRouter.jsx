import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { Navbar } from '../ui';

import { DcPage, HeroesRoutes, MarvelPage } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
    
        {/* <Navbar /> */}
        <Routes >

            <Route path='login' element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />
            {/* <Route path='login' element={<LoginPage />} /> */}
            
            <Route path='/*' element={  
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute>
            } />

        </Routes>

    </>
  )
}
