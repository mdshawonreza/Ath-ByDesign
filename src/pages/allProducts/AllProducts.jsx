import React, { useContext } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import useDocTitle from "../../hooks/useDocTitle";
import FilterBar from "../../components/filters/FilterBar";
import ProductCard from "../../components/product/ProductCard";
import Services from "../../components/common/Services";
import filtersContext from "../../contexts/filters/filtersContext";
import EmptyView from "../../components/common/EmptyView";

const AllProducts = () => {
  useDocTitle("All Products");

  const { allProducts } = useContext(filtersContext);

  return (
    <>
      {/* ===== All Products Section ===== */}
      <section className="pt-32 pb-20 px-4 lg:px-6 bg-black">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* ===== Filter Sidebar ===== */}
          <aside className="w-full lg:w-60 sticky top-32 self-start">
            <FilterBar />
          </aside>

          {/* ===== Products Grid ===== */}
          <main className="flex-1">
            {allProducts.length ? (
              <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {allProducts.map((item) => (
                  <ProductCard key={item.id} {...item} />
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center h-96">
                <EmptyView
                  icon={<BsExclamationCircle className="text-4xl text-gray-400" />}
                  msg="No Results Found"
                />
              </div>
            )}
          </main>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      {/* <Services /> */}
    </>
  );
};

export default AllProducts;
