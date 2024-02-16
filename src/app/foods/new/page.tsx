import { db } from '@/db';
import styles from './page.module.css';
import { redirect } from 'next/navigation';

export default function NewFoodPage() {
  async function createFood(formData: FormData) {
    'use server';

    const brand = formData.get('brand') as string;
    const name = formData.get('name') as string;
    const servingSize = formData.get('servingSize') as string;
    const calories = formData.get('calories') as string;
    const fat = formData.get('fat') as string;
    const carbs = formData.get('carbs') as string;
    const protein = formData.get('protein') as string;

    const food = await db.food.create({
      data: {
        brand,
        name,
        servingSize,
        calories: parseInt(calories),
        fat: parseInt(fat),
        carbs: parseInt(carbs),
        protein: parseInt(protein),
      },
    });

    redirect(`/foods/${food.id}`);
  }

  return (
    <form className={styles.createFoodForm} action={createFood}>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor='brand'>
          Brand
        </label>
        <input
          className={styles.formInput}
          required
          type='text'
          name={'brand'}
          id={'brand'}
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor='name'>
          Name
        </label>
        <input
          className={styles.formInput}
          required
          type='text'
          name={'name'}
          id={'brand'}
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor='servingSize'>
          Serving Size
        </label>
        <input
          className={styles.formInput}
          required
          type='text'
          name={'servingSize'}
          id={'servingSize'}
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor='calories'>
          Calories
        </label>
        <input
          className={styles.formInput}
          required
          type='number'
          name='calories'
          id='calories'
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor='fat'>
          Fat
        </label>
        <input
          className={styles.formInput}
          required
          type='number'
          name='fat'
          id='fat'
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor='carbs'>
          Carbs
        </label>
        <input
          className={styles.formInput}
          required
          type='number'
          name='carbs'
          id='carbs'
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor='protein'>
          Protein
        </label>
        <input
          className={styles.formInput}
          required
          type='number'
          name='protein'
          id='protein'
        />
      </div>
      <button type={'submit'} className={styles.submitButton}>
        Create Food!
      </button>
    </form>
  );
}
