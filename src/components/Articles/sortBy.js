import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchAllArticles } from "../../api";

export default function SortBy({ setArticles }) {
  const [selectedOption, setSelectedOption] = useState("created_at");
  const [radioOption, setRadioOption] = useState("asc");
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    const path = `?sort_by=${selectedOption}`;
    fetchAllArticles(path).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [selectedOption]);

  useEffect(() => {
    const path = `?order=${radioOption}`;
    fetchAllArticles(path).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [radioOption]);

  if (isLoading) return <p>...loading</p>;
  return (
    <form className="SortByForm">
      <label className="dropDown">
        {" "}
        Sort by:
        <select
          className="dropDownMenu"
          value={selectedOption}
          onChange={(event) => {
            setSelectedOption(event.target.value);
            setSearchParams({ sort_by: `${event.target.value}` });
          }}
        >
          <option value="created_at">Date </option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label className="radio">
        <div className="Descending">
          <input
            className="radio-btn"
            type="radio"
            value="desc"
            name="ascending/descending"
            onClick={(event) => {
              setRadioOption(event.target.value);
              setSearchParams({ order: `${event.target.value}` });
            }}
          ></input>
          Descending
        </div>
        <div className="Ascending">
          <input
            className="radio-btn"
            type="radio"
            value="asc"
            name="ascending/descending"
            onClick={(event) => {
              setRadioOption(event.target.value);
              setSearchParams({ order: `${event.target.value}` });
            }}
          ></input>
          Ascending
        </div>
      </label>
    </form>
  );
}
