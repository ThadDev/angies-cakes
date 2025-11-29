import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
       <>
  <div className="flex flex-col items-center justify-center h-[90vh] text-white text-center bg-black">
    <div>
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-gray-300 mt-2">The page you are looking for cannot be found</p>

      <Link to={'/'}>
        <p className="mt-4 hover:text-blue-600 cursor-pointer">
          Back to home <i className="fa-solid fa-arrow-right"></i>
        </p>
      </Link>
    </div>
  </div>
</>

     );
}
 
export default NotFound;