
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ShimmerGrid from "../components/ShimmerGrid";

export default function Products({ limit, title }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  // Read correct query names
  const categoryQuery = searchParams.get("category") || "";
  const searchQuery = searchParams.get("search") || "";

  // Fetch products JSON
  useEffect(() => {
    setTimeout(() =>{
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });},1000)
  }, []);

  // Apply search + category filter
  const filtered = products.filter(product => {
  const name = product.name.toLowerCase();

  // Normalize category to always be an array
  const categories = Array.isArray(product.category)
    ? product.category.map(c => c.toLowerCase())
    : [product.category.toLowerCase()];

  const search = searchQuery?.toLowerCase() || "";
  const categoryFilter = categoryQuery?.toLowerCase() || "";

  // Category filter: check if product contains the selected category
  const matchesCategory = categoryFilter
    ? categories.includes(categoryFilter)
    : true;

  // Search filter: match name OR any category in the array
  const matchesSearch = search
    ? name.includes(search) || categories.some(c => c.includes(search))
    : true;

  return matchesCategory && matchesSearch;
});

//   const filtered = products.filter(product => {
//     const matchesCategory = categoryQuery
//       ? product.category.toLowerCase() === categoryQuery.toLowerCase()
//       : true;

//     const matchesSearch = searchQuery
//       ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase())
//       : true;

//     return matchesCategory && matchesSearch;
//   });

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
        <ShimmerGrid count={8} />
      ) : finalProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {finalProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {/* <CathegoryFilter/> */}
    </div>
  );
}
