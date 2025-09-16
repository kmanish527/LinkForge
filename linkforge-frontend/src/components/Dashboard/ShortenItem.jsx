import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import CopyToClipboard from "react-copy-to-clipboard";
import { useStoreContext } from "../../contextApi/ContextApi";
import api from "../../api/api";
import Graph from "./Graph";
import { FaExternalLinkAlt, FaRegCalendarAlt, FaTrash } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { LiaCheckSolid } from "react-icons/lia";
import { MdAnalytics, MdOutlineAdsClick } from "react-icons/md";
import toast from "react-hot-toast";

const ShortenItem = ({
  originalUrl,
  shortUrl,
  clickCount,
  createdDate,
  onUrlDeleted,
}) => {
  const { token } = useStoreContext();
  const navigate = useNavigate();

  const [isCopied, setIsCopied] = useState(false);
  const [analyticToggle, setAnalyticToggle] = useState(false);
  const [isGraphLoading, setIsGraphLoading] = useState(false);
  const [analyticsData, setAnalyticsData] = useState([]);

  const displayUrl = `${
    import.meta.env.VITE_REACT_FRONT_END_URL
  }/s/${shortUrl}`;

  const analyticsHandler = () => {
    if (!analyticToggle && analyticsData.length === 0) {
      fetchAnalyticsData();
    }
    setAnalyticToggle(!analyticToggle);
  };

  const fetchAnalyticsData = async () => {
    setIsGraphLoading(true);
    try {
      const { data } = await api.get(`/api/urls/analytics/${shortUrl}`, {
        headers: { Authorization: "Bearer " + token },
        params: {
          startDate: "2024-01-01T00:00:00",
          endDate: "2025-12-31T23:59:59",
        },
      });
      setAnalyticsData(data);
    } catch (error) {
      toast.error("Could not fetch analytics.");
      console.log(error);
    } finally {
      setIsGraphLoading(false);
    }
  };

  const deleteUrlHandler = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this link? This action cannot be undone."
      )
    ) {
      try {
        await api.delete(`/api/urls/${shortUrl}`, {
          headers: { Authorization: "Bearer " + token },
        });
        toast.success("Link deleted successfully!");
        onUrlDeleted(shortUrl);
      } catch (error) {
        toast.error("Failed to delete link.");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div className="flex-1 space-y-4 min-w-0">
          <a
            href={displayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-semibold text-blue-600 hover:underline truncate"
          >
            <span>{displayUrl.replace(/^https?:\/\//, "")}</span>
            <FaExternalLinkAlt size={14} />
          </a>
          <p className="text-gray-500 truncate">{originalUrl}</p>
          <div className="flex items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2" title="Total Clicks">
              <MdOutlineAdsClick size={18} />
              <span>
                {clickCount} {clickCount === 1 ? "Click" : "Clicks"}
              </span>
            </div>
            <div className="flex items-center gap-2" title="Date Created">
              <FaRegCalendarAlt size={14} />
              <span>{dayjs(createdDate).format("MMM DD, YYYY")}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <CopyToClipboard text={displayUrl} onCopy={() => setIsCopied(true)}>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
              {isCopied ? <LiaCheckSolid size={16} /> : <IoCopy size={16} />}
              {isCopied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
          <button
            onClick={analyticsHandler}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
          >
            <MdAnalytics size={16} />
            <span>Analytics</span>
          </button>
          <button
            onClick={deleteUrlHandler}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-600 hover:bg-gray-700 rounded-md transition-colors"
          >
            <FaTrash size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {analyticToggle && (
        <div className="w-full h-80 bg-slate-50 p-4 border-t border-slate-200">
          <Graph graphData={analyticsData} isLoading={isGraphLoading} />
        </div>
      )}
    </div>
  );
};

export default ShortenItem;
