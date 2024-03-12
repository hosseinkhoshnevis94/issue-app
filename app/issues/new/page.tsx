import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='flex flex-col align-middle justify-center gap-3  max-w-md m-auto'>
        <h3 className='font-semibold py-10 text-lg	'>Create a new issue:</h3>
        <input type="text" placeholder="Title" className="input input-bordered w-full " />
        <textarea className="textarea textarea-bordered min-h-[200px]" placeholder="Description"></textarea>
        <button className="btn btn-neutral self-start">Submit</button>

    </div>
  )
}

export default NewIssuePage