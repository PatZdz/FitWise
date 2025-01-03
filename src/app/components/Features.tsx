"use client";
import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Dlaczego warto wybrać FitWise?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Poznaj kluczowe funkcjonalności naszej aplikacji, które usprawnią
          zarządzanie obiektami sportowymi.
        </p>

        {/* Grid 2-kolumnowy na szerokich ekranach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div
            className="bg-[#eaf1f7] rounded-lg shadow-sm flex flex-col"
            role="region"
            aria-labelledby="feature-1-title"
          >
            {/* Górna część: tytuł + opis z wewnętrznym paddingiem */}
            <div className="p-6" /* p-6 tylko na górnej sekcji */>
              <h3 id="feature-1-title" className="font-semibold text-xl mb-2">
                Szybkie tworzenie zajęć
              </h3>
              <p className="text-gray-600">
                Błyskawicznie stwórz dowolne zajęcia, dodaj klientów i przydziel trenera.
              </p>
            </div>

            {/* Dolna część: obrazek bez bocznego paddingu i większa wysokość */}
            <div className="relative w-full h-80 overflow-hidden rounded-b-lg">
              <Image
                src="/images/feature_1.png"
                alt="Zarządzanie rezerwacjami"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="bg-[#eaf1f7] rounded-lg shadow-sm flex flex-col"
            role="region"
            aria-labelledby="feature-2-title"
          >
            <div className="p-6">
              <h3 id="feature-2-title" className="font-semibold text-xl mb-2">
                Łatwe sprawdzanie obecności
              </h3>
              <p className="text-gray-600">
                Koniec z choasem i zapisywaniem w notatniku. Sprawdź obecność w ciągu kilku sekund.
              </p>
            </div>
            <div className="relative w-full h-80 overflow-hidden rounded-b-lg">
              <Image
                src="/images/feature_2.png"
                alt="Zarządzanie członkostwami"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="bg-[#eaf1f7] rounded-lg shadow-sm flex flex-col"
            role="region"
            aria-labelledby="feature-3-title"
          >
            <div className="p-6">
              <h3 id="feature-3-title" className="font-semibold text-xl mb-2">
                Zarządzaj pracownikami i klientami
              </h3>
              <p className="text-gray-600">
                Wszystko widoczne, w jednym miejscu. Dodawaj uprawnienia, rozliczaj i śledź ich ilości zajęć.
              </p>
            </div>
            <div className="relative w-full h-80 overflow-hidden rounded-b-lg">
              <Image
                src="/images/feature_3.png"
                alt="Raporty i analizy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Feature 4 */}
          <div
            className="bg-[#eaf1f7] rounded-lg shadow-sm flex flex-col"
            role="region"
            aria-labelledby="feature-4-title"
          >
            <div className="p-6">
              <h3 id="feature-4-title" className="font-semibold text-xl mb-2">
                Przejrzysty kalendarz
              </h3>
              <p className="text-gray-600">
                Trzymaj rękę na pulsie i twórz zajęcia z wyprzedzeniem w kilka kliknięć.
              </p>
            </div>
            <div className="relative w-full h-80 overflow-hidden rounded-b-lg">
              <Image
                src="/images/feature_4.png"
                alt="Automatyzacja obiektów"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}