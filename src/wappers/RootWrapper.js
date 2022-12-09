import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import HomePage from '../views/HomePage';
import PrivateProvider from './PrivateProvider';

export default function RootWrapper() {
  return (
    <React.Suspense fallback={null}>
      <Header />
      <Routes>
        <Route path="/*" element={<PrivateProvider />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </React.Suspense>
  );
}
