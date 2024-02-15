export default function NewFoodPage() {
  async function createFood(formData: FormData) {
    'use server';
  }
  return (
    <form action={createFood}>
      <div>
        <label htmlFor='brand'>Brand</label>
        <input type='text' name={'brand'} id={'brand'} />
      </div>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' name={'name'} id={'brand'} />
      </div>
      <div>
        <label htmlFor='servingSize'>Serving Size</label>
        <input type='text' name={'servingSize'} id={'servingSize'} />
      </div>
      <div>
        <label htmlFor='calories'>Calories</label>
        <input type='number' name='calories' id='calories' />
      </div>
      <div>
        <label htmlFor='fat'>Fat</label>
        <input type='number' name='fat' id='fat' />
      </div>
      <div>
        <label htmlFor='carbs'>Carbs</label>
        <input type='number' name='carbs' id='carbs' />
      </div>
      <div>
        <label htmlFor='protein'>Protein</label>
        <input type='number' name='protein' id='protein' />
      </div>
    </form>
  );
}
