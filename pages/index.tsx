import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useLazyQuery, gql } from "@apollo/client";

const QUERY = gql`
query GET_TAGS($name: String) {
  tags(where: { name: { contains: $name }}) {
    id
   	name
    texts {
      id
      longName
      abbreviation
      description
    }
  }
}
`

export default function Home({}) {
  const [textDisplay, setTextDisplay] = useState([]);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [searchData, { loading, data }] = useLazyQuery(QUERY);

  const onSubmit = async (data) => {
      const {tag} = data;
      try {
        searchData({ variables: { name: tag } });
      } catch (err) {
        console.log(err);
      }
  };


  return (
    <div className={styles.container}>
      <header className={styles.header}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  
    <main className={styles.main}>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

    <div className="space-y-8 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
      <label htmlFor="email" className={` block text-sm font-medium text-gray-700`}>
        TAG
      </label>
      <input
        type="text"
        id="tag"
        className={`${styles.input} block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
        placeholder="Secure"
        {...register('tag')}
      />
    </div>
    </div>
    <div className="">
      
      <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Fetch
          </button>
        </div>
    </form>

    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Returned Text</h3>
      </div>
      <div className="border-t border-gray-200">
      {data ? data[0].texts.map((item) => (
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">ID</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{item.id}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">longName</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{item.longName}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">abbreviation</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{item.abbreviation}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{item.description}</dd>
          </div>
        </dl>
      )
      ) : <h3>No queried data.</h3>
      }

      </div>
      </div>
    </main>
    </div>
  );
}
