import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import GifItem from "./GifItem";

export function GifGrid({ category }) {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    const getGifs = async (category) => {
      const urlToFetch = `https://api.giphy.com/v1/gifs/search?api_key=lNVQ10SfaXu8e4HHWI5nXCKgSwFECFH7&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

      const res = await fetch(urlToFetch);
      const { data } = await res.json();

      const gifs = data.map((el) => {
        return {
          url: el.images.original.url,
          title: el.title,
          id: el.id,
        };
      });

      setImgList(gifs);
    };

    getGifs();
  }, [category]);

  return <GifItem imgList={imgList} category={category} />;
}

GifGrid.propTypes = {
  category: PropTypes.string,
  key: PropTypes.int,
};
