import { db } from '@/db';
import { notFound } from 'next/navigation';

interface FoodPageProps {
  params: {
    id: string;
  };
}

export default async function FoodPage(props: FoodPageProps) {
  const food = await db.food.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!food) {
    notFound();
  }

  return <div>{food.name}</div>;
}
