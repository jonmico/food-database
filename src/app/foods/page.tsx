import { db } from '@/db';
import Link from 'next/link';

export default async function FoodsPage() {
  const foods = await db.food.findMany();

  const foodsList = foods.map((f) => (
    <div key={f.id}>
      <Link href={`/foods/${f.id}`}>{f.name}</Link>
    </div>
  ));

  return <div>{foodsList}</div>;
}
