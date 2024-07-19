import React, { useState, useRef } from 'react';
import Barcode from 'react-barcode';

const BarcodeGenerator = () => {
  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Barcode Generator</h1>
        <div className="mb-4">
          <label className="block mb-2 font-medium">ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border p-2 w-full rounded"
          />
        </div>
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition duration-200"
        >
          Print Barcodes
        </button>
        <div className="mt-6" ref={printRef}>
          {Array.from({ length: quantity }).map((_, index) => (
            <Barcode key={index} value={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarcodeGenerator;
