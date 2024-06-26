import React from "react";
import { formatNumberWithCommas } from "../utils/NumberFormatter";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <section className={`relative overflow-x-auto w-full p-5 shadow-md sm:rounded-lg`}>

    <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400`}>
        <tr>
          <th className={`border border-slate-600 text-left p-3`}>
            Description
          </th>
          <th scope="col" className={`px-6 py-3`}>Amount</th>
          <th scope="col" className={`px-6 py-3`}>Category</th>
          <th scope="col" className={`px-6 py-3`}>Remove Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`} key={expense.id}>
            <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white`}>
              {expense.description}
            </th>
            <td className={`px-6 py-4`}>
              {formatNumberWithCommas(expense.amount)}
            </td>
            <td className={`px-6 py-4`}>
              {expense.category}
            </td>
            <td
              className={`px-6 py-4`}
            >
              <button
                type="button"
                className={`bg-red-600 hover:bg-red-300 px-6 py-2 rounded-md text-white `}
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="">
        <tr className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}>
          <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white`}>Total</th>
          <td className={`px-6 py-4`}>
            $
            {formatNumberWithCommas(
              expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)
            )}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
    </section>
  );
};

export default ExpenseList;
