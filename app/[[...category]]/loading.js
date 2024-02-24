import FeaturedMovieLoading from "@/components/featured-movie/loading";
import CategoriesLoading from "../../components/categories/loading";
import React from "react";
import MovieSectionLoading from "@/components/movie-section/loading";

const loading = () => {
  return (
    <div>
      <FeaturedMovieLoading />
      <CategoriesLoading />
      <MovieSectionLoading />
      <MovieSectionLoading />
    </div>
  );
};

export default loading;
