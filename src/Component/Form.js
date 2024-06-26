<form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold mb-4">Simple Form</h2>
    <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="input1">
      Name
        </label>
        <input
            type="text"
            id="input1"
            className="w-full p-2 border border-gray-300 rounded-md"
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="input2">
      Email
        </label>
        <input
            type="text"
            id="input2"
            className="w-full p-2 border border-gray-300 rounded-md"
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="input3">
      Address
        </label>
        <input
            type="text"
            id="input3"
            className="w-full p-2 border border-gray-300 rounded-md"
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="input4">
      Input 4
        </label>
        <input
            type="text"
            id="input4"
            className="w-full p-2 border border-gray-300 rounded-md"
        />
    </div>
    <div className="flex space-x-4">
        <button
            type="button"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
      Show
        </button>
        <button
            type="button"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
      Add
        </button>
        <button
            type="button"
            className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
      Update
        </button>
        <button
            type="button"
            className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
      Delete
        </button>
    </div>
</form>;
