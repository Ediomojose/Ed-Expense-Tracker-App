import React from "react";
import { categories } from "../utils/Categories";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least three characters" })
    .max(50),
  amount: z
    .number()
    .min(0.01, { message: "Amount field cannot be empty" })
    .max(100_00),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })} className={`p-5`}
    >
      <div className="">
        <label htmlFor="description" className={`block mb-2 text-sm font-medium text-grey-200`}>
          Description
        </label>
        <input type="text" id="description" {...register("description")} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}/>
        {errors.description && <p className={``}>{errors.description.message}</p>}
      </div>

      <div className="">
        <label htmlFor="amount" className={`block mb-2 text-sm font-medium text-gray-900`}>
          Amount
        </label>
        <input type="number" id="amount" aria-describedby="helper-text-explanation" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} {...register("amount", {valueAsNumber: true})} />
        {errors.amount && <p className={``}>{errors.amount.message}</p>}
      </div>

      <div className="">
        <label htmlFor="category" className={`block mb-2 text-sm font-medium text-gray-900`}>
          Category
        </label>
        <select id="category" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} {...register(`category`)}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className={``}>{errors.category.message}</p>}
      </div>
      <button
        className={`bg-green-500 hover:bg-green-300 px-6 py-2 rounded-md text-white mt-5`}
      >
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
