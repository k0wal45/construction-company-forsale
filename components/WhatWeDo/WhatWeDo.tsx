const WhatWeDo = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-6">
          Co Robimy
        </h1>
        <p className="text-lg lg:text-xl text-center text-gray-600 mb-8">
          Nasza firma specjalizuje się w kompleksowej realizacji projektów
          budowlanych, od planowania po finalizację. Oferujemy szeroki zakres
          usług dostosowanych do potrzeb naszych klientów.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Budowa Domów Jednorodzinnych
              </h2>
              <p className="text-gray-700">
                Kompleksowa realizacja budowy domów jednorodzinnych od
                fundamentów aż po wykończenie wnętrz, z uwzględnieniem
                indywidualnych potrzeb i preferencji klientów.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Budowa Obiektów Komercyjnych
              </h2>
              <p className="text-gray-700">
                Profesjonalne usługi w zakresie budowy obiektów komercyjnych,
                takich jak biurowce, centra handlowe, hotele i magazyny, z
                zastosowaniem najnowszych technologii i materiałów.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Remonty i Modernizacje
              </h2>
              <p className="text-gray-700">
                Przeprowadzanie remontów i modernizacji istniejących budynków,
                mające na celu poprawę funkcjonalności, estetyki oraz
                efektywności energetycznej.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
