import styles from './page.module.css';

export default function NewFoodPage() {
  async function createFood(formData: FormData) {
    'use server';
  }
  return (
    <form className={styles.createFoodForm} action={createFood}>
      <div className={styles.formField}>
        <label htmlFor='brand'>Brand</label>
        <input type='text' name={'brand'} id={'brand'} />
      </div>
      <div className={styles.formField}>
        <label htmlFor='name'>Name</label>
        <input type='text' name={'name'} id={'brand'} />
      </div>
      <div className={styles.formField}>
        <label htmlFor='servingSize'>Serving Size</label>
        <input type='text' name={'servingSize'} id={'servingSize'} />
      </div>
      <div className={styles.formField}>
        <label htmlFor='calories'>Calories</label>
        <input type='number' name='calories' id='calories' />
      </div>
      <div className={styles.formField}>
        <label htmlFor='fat'>Fat</label>
        <input type='number' name='fat' id='fat' />
      </div>
      <div className={styles.formField}>
        <label htmlFor='carbs'>Carbs</label>
        <input type='number' name='carbs' id='carbs' />
      </div>
      <div className={styles.formField}>
        <label htmlFor='protein'>Protein</label>
        <input type='number' name='protein' id='protein' />
      </div>
      <button type={'submit'} className={styles.submitButton}>
        Create Food!
      </button>
    </form>
  );
}
