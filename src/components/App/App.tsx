import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { Category } from '../../pages/Category';
import { Ingredients } from '../../pages/Ingredients';
import { RecipeDetails } from '../../pages/RecipeDetails';
import { Recipes } from '../../pages/Recipes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
          <Route path="area/:name" element={<Recipes />} />
          <Route path="category" element={<Category />} />
          <Route path="category/:name" element={<Recipes />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="ingredients/:name" element={<Recipes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
