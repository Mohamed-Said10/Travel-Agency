// src/pages/api/admin/excursions/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'POST') {
    try {
      const { name, description, price, date, numberOfTravelers, distance, duration, availability, departureTime } = req.body;

      const newExcursion = await prisma.excursion.create({
        data: {
          name,
          description,
          date,
          numberOfTravelers,
          price,
          distance,
          duration,
          availability,
          departureTime,
        }
      });

      res.status(200).json(newExcursion);
    } catch (error) {
      console.error('Error creating excursion:', error);
      res.status(500).json({ error: 'Error creating excursion' });
    }
  } else if (method === 'GET') {
    try {
      const excursions = await prisma.excursion.findMany();
      res.status(200).json(excursions);
    } catch (error) {
      console.error('Error fetching excursions:', error);
      res.status(500).json({ error: 'Error fetching excursions' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
