"use client";
import FeaturedMovie from "@/components/featured-movie";
import React from "react";
import Movies from "../../mocks/movies.json";
import Genres from "../../mocks/genres.json";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movie-section";
const HomeContainer = ({ selectedCategory }) => {
  const category = Genres.genres.find(
    (genre) => `${genre.id}` === selectedCategory.id
  );

  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={category?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection
        title="Popular Films"
        movies={Movies.results.slice(0, 7)}
      />
      <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  );
};

export default HomeContainer;
