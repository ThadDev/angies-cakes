
// import { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import ProductCard from "../components/ProductCard";

// export default function Products({limit,title}) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate();

//   // Read category & search from URL
//   const categoryQuery = searchParams.get("category") || "";
//   const searchQuery = searchParams.get("search") || "";

  

//   // Fetch products JSON
//   useEffect(() => {
//     fetch("/data/products.json")
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Failed to fetch products:", err);
//         setLoading(false);
//       });
//   }, []);

//   // Filter products
// const filteredProducts = limit ? products.slice(0, limit) : products;
//    products.filter(product => {
//     const matchesCategory = categoryQuery
//       ? product.category.toLowerCase().includes(categoryQuery.toLowerCase())
//       : true;

//     const matchesSearch = searchQuery
//       ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       : true;

//     return matchesCategory && matchesSearch;
//   });

//   // Handle search from nav/search icon
//   const handleSearch = (term) => {
//     // redirect to products page if not already there
//     if (window.location.pathname !== "/products") {
//       navigate(`/products?search=${term}`);
//     } else {
//       setSearchParams({ search: term });
//     }
//     handleSearch();
//   };

  
  
//   return (
//     <div className="p-5">
//         {<h1 className={`text-[1.5rem] text-center ${filteredProducts.length > 0 ? "block":"hidden" }`}>Enjoy!</h1>}
//      {/* Title Section */}
// {limit ? (
//   // HOME PAGE MODE
//   title && <h1 className="text-2xl font-bold mb-4">{title}</h1>
// ) : (
//   // FULL PRODUCTS PAGE MODE
//   <h1 className="text-2xl font-bold mb-4">
//     {categoryQuery
//       ? categoryQuery.charAt(0).toUpperCase() + categoryQuery.slice(1)
//       : searchQuery
//       ? `Results for: "${searchQuery}"`
//       : "All Products"}
//   </h1>
// )}


//       {loading ? (
//         <p>Loading products...</p>
//       ) : filteredProducts.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CathegoryFilter from "../components/BrowseCathegory";

export default function Products({ limit, title }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  // Read correct query names
  const categoryQuery = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";

  // Fetch products JSON
  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  // Apply search + category filter
  const filtered = products.filter(product => {
    const matchesCategory = categoryQuery
      ? product.category.toLowerCase() === categoryQuery.toLowerCase()
      : true;

    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  // Apply limit ONLY after filtering
  const finalProducts = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="p-5 flex flex-col bg-[var()] gap-6">
         {<h1 className={`text-[1.5rem] text-center ${finalProducts.length > 0 ? "block":"hidden" }`}>Enjoy!</h1>}
      {/* Title Section */}
      {limit ? (
        title && <h1 className="text-2xl text-center font-bold mb-4">{title}</h1>
      ) : (
        <h1 className="text-2xl font-bold mb-4 text-center">
          {categoryQuery
            ? categoryQuery.charAt(0).toUpperCase() + categoryQuery.slice(1)
            : searchQuery
            ? `Results for: "${searchQuery}"`
            : "All Products"}
        </h1>
      )}

      {loading ? (
        <p>Loading products...</p>
      ) : finalProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {finalProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {/* <CathegoryFilter/> */}
    </div>
  );
}
