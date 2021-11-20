import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];//for it to be an array we use spread operator


function App() {
  const [menuItems, setMenuItems]=useState(items);
  const[categories, setCategories]=useState(allCategories);
  const [subcategories, setSubCategories] = useState([]);

  const filterItems = (category)=>{
    if(category==='all'){
      setMenuItems(items)
      return;
    }
    const newItems=items.filter((item)=>item.category===category)
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our offerings</h2>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
