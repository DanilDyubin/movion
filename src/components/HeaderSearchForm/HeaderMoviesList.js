import './headerMoviesList.scss';

const HeaderMoviesList = (props) => {
  const { movies } = props;

  const renderItems = (arr) => {
    const items = arr.map((item, i) => {
      if (i > 5) return;
      return (
        <li className="header-movies-list__item" key={i}>
          <div className="header-movies-list__img">
            <img src={item.posterUrlPreview} alt="" className="" />
          </div>
          <div className="header-movies-list__descr">
            <div className="header-movies-list__title">{item.title}</div>
            <span className="header-movies-list__genre">
              {item.genre}, {item.year}
            </span>
          </div>
        </li>
      );
    });
    return items;
  };

  const items = renderItems(movies);

  return <ul className="header-movies-list">{items}</ul>;
};

export default HeaderMoviesList;
