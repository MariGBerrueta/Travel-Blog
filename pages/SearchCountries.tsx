import Head from "next/head";
import Link from "next/link";
import countries from "../public/data/countries";

const SearchCountries: React.FC = () => {
  let allCountries: { name: string, key: number }[] = countries.countries

  return (
    <div>
      <Head>
        <title>Countries</title>
      </Head>

      <section className="bg-yellow-400 min-h-screen pt-16 flex justify-center items-center">
        <div className="h-1/2 w-screen bg-yellow-200 bg-opacity-50">
          <ul className="text-gray-900 font-bold text-xl py-8 text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {allCountries.map((country) => {
              return (
                <Link key={country.key} passHref href={`/Country/${country.name}`}>
                  <li className="p-2 cursor-pointer hover:bg-gray-900 hover:text-white">
                    {country.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SearchCountries
