"use client";
import { Modal, Spinner } from "@/app/components";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const DeleteIssueButton = ({ issueId }: { issueId: string }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [error, setError] = useState('');
  const [isDeleting,setIsDeleting]=useState(false)
  const router = useRouter();
  const handleClose = () => {
    setError('')
    setIsShowModal(false);
  };
  // const handleDelete = async (id:number) =>{
  //   await axios.delete(`/api/isseus/${id}`)
  //   router.push('/issues');
  // }
  const handleDelete = async (id: number) => {
    try{
      setIsDeleting(true)
      await axios.delete(`/api/issues/${id}`);
      setIsShowModal(false)
      router.push("/issues");
      router.refresh()
    }catch(error){
      setError('Somthig went wrong! please try again!')
    }
    finally{
      setIsDeleting(true)
    }
  };
  return (
    <>
      <button
        className="btn btn-error btn-sm hover:bg-red-500"
        onClick={() => setIsShowModal(true)}
        disabled={isDeleting}
      >
        {!isDeleting ? (<> <MdDelete />delete</>) : <Spinner></Spinner> }
      </button>
      {isShowModal && (
        <Modal
          onClose={handleClose}
          onClick={async () => {
            await handleDelete(parseInt(issueId));
          }}
          buttonText="delete"
          title="Are you sure?"
          error={error}
        />
      )}
    </>
  );
};

export default DeleteIssueButton;
