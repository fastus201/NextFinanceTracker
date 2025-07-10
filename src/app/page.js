
export default function Home() {
  return (
    <div className="p-8 space-y-6 bg-gray-100 min-h-screen">

      {/* Box 1: Sfondo blu con testo bianco */}
      <div className="bg-blue-600 text-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold">Box Blu</h2>
        <p>Testo bianco su sfondo blu.</p>
      </div>

      {/* Box 2: Card bianca con bordo e ombra */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-bold mb-2">Card Bianca</h2>
        <p>Con bordo grigio e ombra.</p>
      </div>

      {/* Box 3: Box rosso con padding e margin */}
      <div className="bg-red-500 text-white p-3 m-4 rounded">
        <p>Box rosso con padding e margin.</p>
      </div>

      {/* Box 4: Flexbox con spazio tra elementi */}
      <div className="flex space-x-4">
        <div className="bg-green-400 p-4 rounded text-white flex-1 text-center">Flex 1</div>
        <div className="bg-green-600 p-4 rounded text-white flex-1 text-center">Flex 2</div>
        <div className="bg-green-800 p-4 rounded text-white flex-1 text-center">Flex 3</div>
      </div>

      {/* Box 5: Box con testo centrato e font grande */}
      <div className="bg-yellow-300 text-center p-6 rounded text-2xl font-extrabold">
        Testo grande e centrato
      </div>

    </div>
  );
}
