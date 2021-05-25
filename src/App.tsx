import React from 'react';
import AppHeader from './components/AppHeader/AppHeader'
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor'
import './App.css';


function App() {
  return (
    <div className="App">
      <>
        <AppHeader />
      </>
      <main className="main">
        <div className="container main__container pt-5">
          <h1 className="main__title text text_type_main-large mt-5 mb-5">Соберите бургер</h1>
          <div className="main__columns">
            <div className="main__column">              
              <BurgerIngredients />
            </div>
            <div className="main__column">
              <BurgerConstructor />
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;