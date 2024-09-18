import PropTypes from 'prop-types'

export default function GifItem({ category, imgList }) {

  console.log("imglist",imgList)

  return (
    <div className="category-list">
      <h2>&quot;{category}&quot;</h2>
      {imgList.map((val, key) => {
        return (
          <div key={key} className="listed-images">
            <span key={key}>{val.title}</span>
            <img src={val.url} alt="" key={key} height={100} />
          </div>
        );
      })}
    </div>
  );
}

GifItem.propTypes = {
  category: PropTypes.string.isRequired,
  imgList: PropTypes.array.isRequired,
};
