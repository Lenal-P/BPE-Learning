import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faComments,
  faBook,
  faListUl,
  faBookmark,
  faShare,
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
    {
      id: 1,
      title: "Article 1",
      images: "https://placekitten.com/500/400",
      content:
        "Content of Article Content of Content of Article Content of Article1",
    },
    {
      id: 2,
      title: "Article 2",
      images: "https://placekitten.com/500/400",
      content:
        "Content of Article Content of Article Content of Article Content of Article Content of Article Content of Article Content of Article2",
    },
    {
      id: 3,
      title: "Article 3",
      images: "https://placekitten.com/500/400",
      content:
        "Content of Article Content of Article Content of Article Content of Article e Content of Article Content of Article3",
    },
    {
      id: 4,
      title: "Article 4",
      images: "https://placekitten.com/500/400",
      content:
        "Content of Article Content of Article Content of Article Conterticle Content of Article4",
    },
    {
      id: 5,
      title: "Article 5",
      images: "https://placekitten.com/500/400",
      content:
        "Content of Article Content of Article Content of Article Content of Article Content of Article Content of Article Content of Article5",
    },
    {
      id: 6,
      title: "Article 6",
      images: "https://placekitten.com/500/400",
      content:
        "Content of Article Content of Article Content of Article Content of Articlontent of Article Content of Article6",
    },
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
              <ul className="lists-feeds">
                {articles.map((article) => (
                  <li key={article.id}>
                    <strong>{article.title}</strong>
                    <img src={article.images} alt={article.title} />
                    <p>{article.content}</p>
                    <div className="saved-share-feeds">
                      <a href="#saved">
                        <FontAwesomeIcon
                          icon={faBookmark}
                          className="saved-share-feeds saved"
                        />
                      </a>
                      <a href="#share">
                        <FontAwesomeIcon
                          icon={faShare}
                          className="saved-share-feeds share"
                        />
                      </a>
                    </div>
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
