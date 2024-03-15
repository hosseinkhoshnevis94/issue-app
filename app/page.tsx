
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className=" flex justify-evenly relative items-center mb-20">
        <h1 className=" text-violet-800 text-center text-4xl font-bold mb-8">Issue Tracking App</h1>
            <img src="/banner.jpg" alt="Issue Tracking Image" className="w-[350px] md:max-w-xl rounded-lg "/>
        </div>
     <div className="container mx-auto py-8 flex flex-col gap-20">
        <div className="bg-white flex justify-evenly relative p-16  border  border-cyan-200 border-l-0">
            <h2 className="text-2xl font-semibold z-10 mb-4">How It Works</h2>
            <ol className="list-decimal pl-6 mb-4">
                <li className="mb-2">Create an account or sign in if you already have one.</li>
                <li className="mb-2">Add new issues to track.</li>
                <li className="mb-2">Update the status of each issue as it progresses.</li>
                <li className="mb-2">View and manage your issues from the dashboard.</li>
            </ol>
        </div>
        <div  className="bg-white flex justify-evenly relative p-16  border  border-fuchsia-500 border-r-0">
            <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><strong>Total Issues:</strong> 50</li>
                <li className="mb-2"><strong>Open Issues:</strong> 20</li>
                <li className="mb-2"><strong>Closed Issues:</strong> 30</li>
                <li className="mb-2"><strong>Recent Issues:</strong>
                    <ul className="list-disc pl-6">
                        <li>Issue 1: Bug in login functionality</li>
                        <li>Issue 2: UI alignment issue on dashboard</li>
                        <li>Issue 3: Performance degradation on server</li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Useful Data</h2>
        </div>
        <div  className="bg-white flex justify-evenly relative p-16  border  border-red-600 border-y-4 border-r-0">
            <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><strong>Total Issues:</strong> 50</li>
                <li className="mb-2"><strong>Open Issues:</strong> 20</li>
                <li className="mb-2"><strong>Closed Issues:</strong> 30</li>
                <li className="mb-2"><strong>Recent Issues:</strong>
                    <ul className="list-disc pl-6">
                        <li>Issue 1: Bug in login functionality</li>
                        <li>Issue 2: UI alignment issue on dashboard</li>
                        <li>Issue 3: Performance degradation on server</li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Useful Data</h2>
        </div>
        <div  className="bg-white flex justify-evenly relative p-16  border  border-orange-300 border-t-0">
            <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><strong>Total Issues:</strong> 50</li>
                <li className="mb-2"><strong>Open Issues:</strong> 20</li>
                <li className="mb-2"><strong>Closed Issues:</strong> 30</li>
                <li className="mb-2"><strong>Recent Issues:</strong>
                    <ul className="list-disc pl-6">
                        <li>Issue 1: Bug in login functionality</li>
                        <li>Issue 2: UI alignment issue on dashboard</li>
                        <li>Issue 3: Performance degradation on server</li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Useful Data</h2>
        </div>
    </div>
    </main>

  );
}
