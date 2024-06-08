"use client";

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ExcursionForm = () => {
  const [showMessage, setShowMessage] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      date: '',
      numberOfTravelers: '',
      price: '',
      distance: '',
      duration: '',
      availability: '',
      departureTime: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
      description: Yup.string()
        .min(10, 'Description must be at least 10 characters')
        .required('Description is required'),
      date: Yup.date()
        .required('Date is required')
        .nullable(),
      numberOfTravelers: Yup.number()
        .positive('Number of travelers must be a positive number')
        .integer('Number of travelers must be an integer')
        .required('Number of travelers is required'),
      price: Yup.number()
        .positive('Price must be a positive number')
        .required('Price is required'),
      distance: Yup.string()
        .required('Distance is required'),
      duration: Yup.string()
        .required('Duration is required'),
      availability: Yup.string()
        .required('Availability is required'),
      departureTime: Yup.string()
        .required('Departure time is required'),
    }),
    onSubmit: async (values) => {
      const response = await fetch('/api/excursions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          numberOfTravelers: parseInt(values.numberOfTravelers),
          price: parseFloat(values.price),
          date: new Date(values.date).toISOString(),
          availability: values.availability.split(',').map(day => day.trim()), // Split the string into an array
        }),
      });

      if (response.ok) {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          window.location.reload();
        }, 3000);
      } else {
        console.error('Failed to create excursion');
      }
    },
  });

  return (
    <div className="relative">
      {showMessage && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md">
          Excursion added successfully!
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 mb-2 w-full"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 mb-2 w-full"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500">{formik.errors.description}</div>
          ) : null}
        </div>
        <div>
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 mb-2 w-full"
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="text-red-500">{formik.errors.date}</div>
          ) : null}
        </div>
        <div>
          <input
            type="number"
            name="numberOfTravelers"
            placeholder="Number of Travelers"
            value={formik.values.numberOfTravelers}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 mb-2 w-full"
          />
          {formik.touched.numberOfTravelers && formik.errors.numberOfTravelers ? (
            <div className="text-red-500">{formik.errors.numberOfTravelers}</div>
          ) : null}
        </div>
        <div>
          <input
            type="number"
            step="0.01"
            name="price"
            placeholder="Price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 mb-2 w-full"
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-red-500">{formik.errors.price}</div>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            name="distance"
            placeholder="Distance"
            value={formik.values.distance}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 mb-2 w-full"
          />
          {formik.touched.distance && formik.errors.distance ? (
            <div className="text-red-500">{formik.errors.distance}</div>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={formik.values.duration}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 mb-2 w-full"
          />
          {formik.touched.duration && formik.errors.duration ? (
            <div className="text-red-500">{formik.errors.duration}</div>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            name="availability"
            placeholder="Availability (comma separated days)"
            value={formik.values.availability}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 mb-2 w-full"
          />
          {formik.touched.availability && formik.errors.availability ? (
            <div className="text-red-500">{formik.errors.availability}</div>
          ) : null}
        </div>
        <div>
          <input
            type="time"
            name="departureTime"
            placeholder="Departure Time"
            value={formik.values.departureTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border p-2 mb-2 w-full"
          />
          {formik.touched.departureTime && formik.errors.departureTime ? (
            <div className="text-red-500">{formik.errors.departureTime}</div>
          ) : null}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Excursion
        </button>
      </form>
    </div>
  );
};

export default ExcursionForm;
