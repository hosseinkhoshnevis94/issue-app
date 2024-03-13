'use client'
import React, { useState } from 'react';

interface ModalProps {
  title: string;
  buttonText: string;
  onClose?:()=>void;
  onClick?:(id?:any)=> void,
  error?:string,

}

const Modal: React.FC<ModalProps> = ({ title, buttonText,onClick,onClose ,error}) => {

  return (
    <>
        <dialog className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-14">{!error ? title : error}</h3>
            <div className='flex justify-start items-center gap-4'>
              <button className="btn btn-error " disabled={Boolean(error)} onClick={onClick}>{buttonText}</button>
              <button className="btn " onClick={onClose}>cancel</button>
            </div>
          </div>
        </dialog>
      
    </>
  );
};

export default Modal;
