import { useEffect, useState } from 'react';
import { generateDynamicId } from '../../helpers/rendom_id';
import Title from '../Title/Title';
import Form from '../wrappers/Form/Form';
import FormWrapper from '../wrappers/FormWrapper/FormWrapper';
import styles from './FormItems.module.css';
const FormItems = ({ items, setItems, selectItems, setSelectItems }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    const id = generateDynamicId();
    if (!items.length) {
      setSelectItems(id);
    }
    setItems((prev) => {
      return [...prev, { id, value: inputValue, comments: [] }];
    });

    setInputValue('');
  };

  const choiseItem = (id) => {
    setSelectItems(id);
  };
  const deleteItem = (id) => {
    setItems((prev) => {
      const newArray = prev.filter((item) => item.id !== id);
      return [...newArray];
    });
  };
  useEffect(() => {
    const item = items.find((item) => item.id === selectItems);
    if (!item && items.length) {
      setSelectItems(items[0].id);
    }
  }, [deleteItem]);
  return (
    <FormWrapper>
      <Title color={'black'}>Items</Title>
      <Form submit={handleSubmit}>
        <label className="label">
          <input
            className={styles.input}
            type="text"
            placeholder="Введіть назву ітема"
            onChange={handleChange}
            value={inputValue}
            name="item"
          />
        </label>
        <input className={styles.submit} type="submit" value="Отправить" />
      </Form>

      <ul className={styles.list}>
        {items.map((item) => {
          const itemStyle = {
            borderLeft: selectItems === item.id ? '4px solid red' : '',
          };
          return (
            <li className={styles.item} onClick={() => choiseItem(item.id)} style={itemStyle} key={item.id}>
              <p className={styles.text}>{item.value}</p>
              <span className={styles.counter}>{item.comments.length} </span>
              <button className={styles.button} onClick={() => deleteItem(item.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </FormWrapper>
  );
};
export default FormItems;
