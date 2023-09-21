import { useEffect, useState } from 'react';
import styles from './App.module.css';

import FormComments from './components/FormComments/FormCommetns';
import FormItems from './components/FormItems/FormItems';
function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [selectItems, setSelectItems] = useState('');
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  return (
    <div className={styles.wrapper}>
      <FormItems items={items} setItems={setItems} selectItems={selectItems} setSelectItems={setSelectItems} />
      <FormComments items={items} setItems={setItems} selectItems={selectItems} />
    </div>
  );
}

export default App;
