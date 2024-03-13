"use client";
import { Modal } from "@/app/components";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const DeleteIssueButton = ({ issueId }: { issueId: string }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [error, setError] = useState('');
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
      await axios.delete(`/api/issasdues/${id}`);
      setIsShowModal(false)
      router.push("/issues");
      router.refresh()
    }catch(error){
      setError('Somthig went wrong! please try again!')
    }
  };
  return (
    <>
      <button
        className="btn btn-error btn-sm hover:bg-red-500"
        onClick={() => setIsShowModal(true)}
      >
        <MdDelete /> delete
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
