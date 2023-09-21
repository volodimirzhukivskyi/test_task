import { useState } from 'react';
import { generateDynamicId } from '../../helpers/rendom_id';
import Title from '../Title/Title';
import Form from '../wrappers/Form/Form';
import FormWrapper from '../wrappers/FormWrapper/FormWrapper';
import styles from './FormComments.module.css';
const FormComments = ({ items, setItems, selectItems }) => {
  const [commentValue, setCommentValue] = useState('');
  const [selectedColor, setSelectedColor] = useState('#000000');
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleComment = (event) => {
    setCommentValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!commentValue) return;
    setItems((prev) =>
      prev.map((item) =>
        item.id === selectItems
          ? { ...item, comments: [...item.comments, { id: generateDynamicId(), value: commentValue, blockColor: selectedColor }] }
          : item
      )
    );
    setCommentValue('');
  };

  return (
    <FormWrapper>
      <Title color={'#8889'}>{`Comments #${selectItems && selectItems}`}</Title>
      <ul className={styles.list}>
        {selectItems &&
          items
            .find((item) => item.id === selectItems)
            ?.comments.map((item) => {
              const blockBackground = {
                backgroundColor: item.blockColor,
                width: '50px',
                height: '50px',
              };
              return (
                <li className={styles.item} key={generateDynamicId()}>
                  <div style={blockBackground}></div>
                  <p>{item.value}</p>
                </li>
              );
            })}
      </ul>

      <Form submit={handleSubmit}>
        <input className={styles.colorPicker} type="color" value={selectedColor} onChange={handleColorChange} />

        <label className="label">
          <textarea
            className={styles.textInput}
            placeholder="Введіть коментар"
            type="text"
            onChange={handleComment}
            value={commentValue}
            name="name"
          />
        </label>
        <input className={styles.submit} type="submit" value="Отправить" />
      </Form>
    </FormWrapper>
  );
};
export default FormComments;
