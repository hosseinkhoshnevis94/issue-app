"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
interface NewIssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [count, setCount] = useState(5);
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isLoading, errors, isSubmitting },
  } = useForm<NewIssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccessAlert) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      if (count === 0) {
        setShowSuccessAlert(false);
        clearInterval(timer);
        router.push("/issues");
      }
    }

    return () => clearInterval(timer);
  }, [count, router, showSuccessAlert]);

  const onSubmit = async (data: NewIssueForm) => {
    try {
      await axios.post("/api/issues", data);
      setShowSuccessAlert(true);
      reset();
    } catch (error) {
      setError("Somthing went wrong, Try again");
    }
  };


  if(error) return <ErrorMessage>{error}</ErrorMessage>
  return (
    <>
      <form
        className="flex flex-col align-middle justify-center gap-3  max-w-md m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="font-semibold py-10 text-lg	">Create a new issue:</h3>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full "
          {...register("title")}
        />
        {<ErrorMessage>{errors.title?.message}</ErrorMessage>}

        <textarea
          className="textarea textarea-bordered min-h-[200px]"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {<ErrorMessage>{errors.description?.message}</ErrorMessage>}

        <button
          disabled={isSubmitting}
          className={`btn btn-neutral self-start`}
          >
          {!isSubmitting ? "Submit" : <Spinner />}
        </button>
            
      </form>
      {showSuccessAlert && (
        <div className="alert alert-success position h-10 fixed bottom-4 w-1/3 text-center py-2 bg-green-400 text-zinc">
          Success! Redirecting to issues in {count} seconds...
          <button
            className="underline"
            onClick={() => {setShowSuccessAlert(false),setCount(5)}}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default NewIssuePage;
