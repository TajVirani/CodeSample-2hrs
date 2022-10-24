import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import nextPackage from "next/package.json";
import { useForm } from "react-hook-form";

export default function Home({}) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

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
    </main>
    </div>
  );
}
