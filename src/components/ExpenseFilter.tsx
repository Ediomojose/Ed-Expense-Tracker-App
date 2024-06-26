import React from 'react'
import { categories } from '../utils/Categories';


interface Props{
    onSelectCategory: (category:string) => void;
}

const ExpenseFilter = ({onSelectCategory}:Props) => {
  return (
    <select  name="" id="" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 ml-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} onChange={(event) => onSelectCategory(event.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpenseFilter