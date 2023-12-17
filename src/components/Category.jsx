import React from 'react'

function Category() {
  return (
 
    <div className="w-1/5 p-4 bg-gray-100">
      <h1 className="text-lg font-bold mb-4">Category</h1>
      <div className="flex items-center mb-2">
        <input type="checkbox" className="mr-2" />
        <p>furniture</p>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" className="mr-2" />
        <p>cloth</p>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" className="mr-2" />
        <p>stationary</p>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" className="mr-2" />
        <p>electronics</p>
      </div>
      <div className="flex items-center mb-2">
        <input type="checkbox" className="mr-2" />
        <p>house utility</p>
      </div>
    </div>
  );
}

export default Category
