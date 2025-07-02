// import { useEffect, useState } from "react";
// import { ProductResultCard } from "./ProductResultCard";

// const LIMIT = 4;

// const SearchResults = (props) => {
//     const [results, setResults] = useState([]);
//     const [page, setPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     console.log("🟡 : page:", page);
//     const { searchQuery } = props; // a

//     const getSearchResults = async () => {
//         const response = await fetch(
//             `https://dummyjson.com/products/search?q=${searchQuery}&skip=${LIMIT * (page - 1)}&limit=${LIMIT}`
//         );
//         const data = await response.json();
//         console.log("🟡 : data:", data);

//         setResults(data.products);

//         setTotalPages(Math.ceil(data.total / LIMIT));
//     };

//     // you will have to revise useEffect (debouncing)
//     useEffect(() => {
//         console.log("---starting useEffect----");
//         const timeoutId = setTimeout(getSearchResults, 400);

//         return () => {
//             console.log("---cleaning-up useEffect----");
//             clearTimeout(timeoutId);
//         };
//     }, [page, searchQuery]); // dependency array: initial render only

//     useEffect(() => {
//         setPage(1);
//     }, [searchQuery]);

//     const dummyArray = new Array(totalPages).fill("hello");

//     return (
//         <div>
//             <h2>{searchQuery}</h2>
//             <div className="flex flex-col gap-6">
//                 {results.map((elem) => {
//                     // return <ProductResultCard key={elem.id} {...elem} />;
//                     return (
//                         <ProductResultCard
//                             key={elem.id} // help react to identify each card uniquely
//                             id={elem.id} // help react to identify each card uniquely
//                             title={elem.title}
//                             price={elem.price}
//                             rating={elem.rating}
//                             thumbnail={elem.thumbnail}
//                         />
//                     );
//                 })}
//             </div>
//             <div>
//                 <div className="p-4 flex gap-x-4 gap-y-2 items-center justify-center flex-wrap">
//                     {dummyArray.map((elem, idx) => {
//                         return (
//                             <button
//                                 key={idx}
//                                 onClick={() => {
//                                     setPage(idx + 1);
//                                 }}
//                                 className="px-2 py-1 bg-blue-600 text-white rounded-md text-sm cursor-pointer"
//                             >
//                                 {idx + 1}
//                             </button>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export { SearchResults };

import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const LIMIT = 4;

const SearchResults = (props) => {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const { searchQuery } = props;

    const getSearchResults = async () => {
        const response = await fetch(
            `https://dummyjson.com/products/search?q=${searchQuery}&skip=${LIMIT * (page - 1)}&limit=${LIMIT}`
        );
        const data = await response.json();

        setResults(data.products);
        setTotalPages(Math.ceil(data.total / LIMIT));
    };

    useEffect(() => {
        const timeoutId = setTimeout(getSearchResults, 400);
        return () => clearTimeout(timeoutId);
    }, [page, searchQuery]);

    useEffect(() => {
        setPage(1);
    }, [searchQuery]);

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">{searchQuery}</h2>

            <div className="flex flex-col gap-6">
                {results.map((elem) => (
                    <ProductResultCard
                        key={elem.id}
                        id={elem.id}
                        title={elem.title}
                        price={elem.price}
                        rating={elem.rating}
                        thumbnail={elem.thumbnail}
                    />
                ))}
            </div>

            {/* Pagination with symbols */}
            <div className="p-4 mt-6 flex gap-4 items-center justify-center">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="px-3 py-1 bg-gray-300 text-black rounded-md text-sm disabled:opacity-50"
                >
                    «
                </button>

                <span className="px-3 py-1 bg-black text-white rounded-md text-sm">
                    Page {page}
                </span>

                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    className="px-3 py-1 bg-gray-300 text-black rounded-md text-sm disabled:opacity-50"
                >
                    »
                </button>
            </div>
        </div>
    );
};

export { SearchResults };
