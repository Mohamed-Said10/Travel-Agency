// src/pages/api/excursions/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    res.status(400).json({ error: 'Invalid ID' });
    return;
  }

  if (req.method === 'PUT') {
    try {
      const { name, description, price, date, numberOfTravelers, distance, duration, availability, departureTime } = req.body;

      const updatedExcursion = await prisma.excursion.update({
        where: { id: parseInt(id, 10) },
        data: {
          name,
          description,
          price: parseFloat(price),
          date,
          numberOfTravelers,
          distance,
          duration,
          availability,
          departureTime
        },
      });

      res.status(200).json(updatedExcursion);
    } catch (error) {
      console.error('Error updating excursion:', error);
      res.status(500).json({ error: 'Error updating excursion' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.excursion.delete({
        where: { id: parseInt(id, 10) },
      });
      res.status(200).json({ message: 'Excursion deleted' });
    } catch (error) {
      console.error('Error deleting excursion:', error);
      res.status(500).json({ error: 'Error deleting excursion' });
    }
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
