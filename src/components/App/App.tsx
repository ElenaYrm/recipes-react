import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { NotFound } from '../../pages/NotFound';
import { Loader } from '../shared/Loader';

const Home = React.lazy(() => import('pages/Home/Home'));
const RecipeDetails = React.lazy(() => import('pages/RecipeDetails/RecipeDetails'));
const Category = React.lazy(() => import('pages/Category/Category'));
const Ingredients = React.lazy(() => import('pages/Ingredients/Ingredients'));
const Recipes = React.lazy(() => import('pages/Recipes/Recipes'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Loader />}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="recipe/:id"
            element={
              <React.Suspense fallback={<Loader />}>
                <RecipeDetails />
              </React.Suspense>
            }
          />
          <Route
            path="category"
            element={
              <React.Suspense fallback={<Loader />}>
                <Category />
              </React.Suspense>
            }
          />
          <Route
            path="ingredients"
            element={
              <React.Suspense fallback={<Loader />}>
                <Ingredients />
              </React.Suspense>
            }
          />

          <Route
            path="area/:name"
            element={
              <React.Suspense fallback={<Loader />}>
                <Recipes />
              </React.Suspense>
            }
          />
          <Route
            path="category/:name"
            element={
              <React.Suspense fallback={<Loader />}>
                <Recipes />
              </React.Suspense>
            }
          />
          <Route
            path="ingredients/:name"
            element={
              <React.Suspense fallback={<Loader />}>
                <Recipes />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
