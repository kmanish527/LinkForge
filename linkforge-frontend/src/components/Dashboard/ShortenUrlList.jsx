import React, { useState, useEffect } from "react";
import ShortenItem from "./ShortenItem";

const ShortenUrlList = ({ data }) => {
  const [urls, setUrls] = useState(data || []);

  useEffect(() => {
    setUrls(data || []);
  }, [data]);

  const handleUrlDeleted = (deletedShortUrl) => {
    setUrls((currentUrls) =>
      currentUrls.filter((url) => url.shortUrl !== deletedShortUrl)
    );
  };

  return (
    <div className="my-6 space-y-4">
      {urls.map((item) => (
        <ShortenItem key={item.id} {...item} onUrlDeleted={handleUrlDeleted} />
      ))}
    </div>
  );
};

export default ShortenUrlList;
