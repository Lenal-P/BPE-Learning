// Sidebar.js

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faComments,
  faBook,
  faListUl,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

function Sidebar() {
  const [newsMenu, setNewsMenu] = useState(false);
  const [newsLists, setNewsLists] = useState(false);

  const handleNewsClick = () => {
    setNewsMenu(!newsMenu);
  };

  const handleNewsListsClick = () => {
    setNewsLists(!newsLists);
  };

  const articles = [
    { id: 1, title: "Article 1", content: "Content of Article 1" },
    { id: 2, title: "Article 2", content: "Content of Article 2" },
    { id: 3, title: "Article 3", content: "Content of Article 3" },
    { id: 4, title: "Article 4", content: "Content of Article 4" },
    { id: 5, title: "Article 5", content: "Content of Article 5" },
    { id: 6, title: "Article 6", content: "Content of Article 6" },

  ];

  return (
    <div className="sidebar">
      <a href="#news" onClick={handleNewsClick}>
        <FontAwesomeIcon icon={faNewspaper} /> Tin tức
      </a>
      {newsMenu && (
        <div className="news-menu">
          <h2>Feeds</h2>
          <a href="#articles" onClick={handleNewsListsClick}>
            <FontAwesomeIcon icon={faListUl} /> Danh sách bài viết
            {newsLists && (
              <ul className="lists-news">
                {articles.map((article) => (
                  <li key={article.id}>
                    <strong>{article.title}</strong>
                    <p>{article.content}</p>
                  </li>
                ))}
              </ul>
            )}
          </a>
          <a href="#saved">
            <FontAwesomeIcon icon={faBookmark} /> Bài viết đã lưu
          </a>
        </div>
      )}
      <a href="#messages">
        <FontAwesomeIcon icon={faComments} /> Tin nhắn
      </a>
      <a href="#notes">
        <FontAwesomeIcon icon={faBook} /> Ghi chú
      </a>
    </div>
  );
}

export default Sidebar;
