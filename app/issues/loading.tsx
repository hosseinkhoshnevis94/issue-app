import Link from "next/link";
import React from "react";

const LoadingIssuePage = () => {
  const issues = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div>
      <button className="btn btn-neutral">
        {" "}
        <Link href={"./issues/new"}>New</Link>
      </button>
      <div className="mt-10">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Title</th>
              <th>Created at</th>
              <th>updated at</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[50vh]">
              <td colSpan={5} className="text-center">
                <span className="loading loading-spinner loading-lg"></span>
              </td>
            </tr>{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadingIssuePage;
