import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { Home } from '../../pages/Home';
import { Recipe } from '../../pages/Recipe';
import { NotFound } from '../../pages/NotFound';
import { Category } from '../../pages/Category';
import { Ingredients } from '../../pages/Ingredients';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipe/:id" element={<Recipe />} />
          <Route path="category" element={<Category />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
