import React, { useState } from "react";
import {
  RotateCw,
  MessageSquareWarning,
  CheckSquare,
  SlidersHorizontal,
  Loader2,
} from "lucide-react";
import { useRescueTeam } from "@/hooks/useRescueTeam"; // Import Hook API

export default function ListRescuePage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // GỌI HOOK API Ở ĐÂY
  const { data: requests, isLoading, error } = useRescueTeam();

  // Lọc dữ liệu dựa trên danh sách lấy từ Backend
  const filteredData = requests.filter((item) => {
    if (!activeFilter) return true;
    if (activeFilter === "Tạm hoãn") return item.status === "Tạm hoãn cứu hộ";
    if (activeFilter === "Hoàn thành") return item.status === "Đã hoàn thành";
    return item.status === activeFilter;
  });

  const renderStatusBadge = (status: string) => {
    const baseClass =
      "px-4 py-1.5 text-[13px] font-semibold rounded-full inline-block min-w-[140px]";
    switch (status) {
      case "Đang xử lý":
        return (
          <span className={`${baseClass} bg-[#fff4cc] text-[#d97706]`}>
            {status}
          </span>
        );
      case "Tạm hoãn cứu hộ":
        return (
          <span className={`${baseClass} bg-[#f3e8ff] text-[#9333ea]`}>
            {status}
          </span>
        );
      case "Đã hoàn thành":
        return (
          <span className={`${baseClass} bg-[#dcfce7] text-[#16a34a]`}>
            {status}
          </span>
        );
      default:
        return (
          <span className={`${baseClass} bg-gray-100 text-gray-700`}>
            {status}
          </span>
        );
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] p-8 bg-[#fdfdfd] font-sans">
      <div className="relative flex flex-col items-center justify-center w-full mb-10">
        <div className="flex gap-6">
          <button
            onClick={() =>
              setActiveFilter(
                activeFilter === "Đang xử lý" ? null : "Đang xử lý",
              )
            }
            className={`flex flex-col items-center justify-center w-[120px] h-[100px] gap-2 transition-all bg-white border ${activeFilter === "Đang xử lý" ? "border-orange-400 ring-1 ring-orange-400 shadow-sm" : "border-gray-200 hover:border-gray-300"}`}
          >
            <RotateCw
              size={26}
              strokeWidth={1.5}
              className={
                activeFilter === "Đang xử lý" ? "text-orange-500" : "text-black"
              }
            />
            <span
              className={`text-sm ${activeFilter === "Đang xử lý" ? "text-orange-600 font-bold" : "text-gray-800"}`}
            >
              Đang xử lý
            </span>
          </button>
          <button
            onClick={() =>
              setActiveFilter(activeFilter === "Tạm hoãn" ? null : "Tạm hoãn")
            }
            className={`flex flex-col items-center justify-center w-[120px] h-[100px] gap-2 transition-all bg-white border ${activeFilter === "Tạm hoãn" ? "border-purple-400 ring-1 ring-purple-400 shadow-sm" : "border-gray-200 hover:border-gray-300"}`}
          >
            <MessageSquareWarning
              size={26}
              strokeWidth={1.5}
              className={
                activeFilter === "Tạm hoãn" ? "text-purple-500" : "text-black"
              }
            />
            <span
              className={`text-sm ${activeFilter === "Tạm hoãn" ? "text-purple-600 font-bold" : "text-gray-800"}`}
            >
              Tạm hoãn
            </span>
          </button>
          <button
            onClick={() =>
              setActiveFilter(
                activeFilter === "Hoàn thành" ? null : "Hoàn thành",
              )
            }
            className={`flex flex-col items-center justify-center w-[120px] h-[100px] gap-2 transition-all bg-white border ${activeFilter === "Hoàn thành" ? "border-green-400 ring-1 ring-green-400 shadow-sm" : "border-gray-200 hover:border-gray-300"}`}
          >
            <CheckSquare
              size={26}
              strokeWidth={1.5}
              className={
                activeFilter === "Hoàn thành" ? "text-green-500" : "text-black"
              }
            />
            <span
              className={`text-sm ${activeFilter === "Hoàn thành" ? "text-green-600 font-bold" : "text-gray-800"}`}
            >
              Hoàn thành
            </span>
          </button>
        </div>
        <div className="absolute right-0 bottom-0 flex items-center h-full">
          <button className="flex items-center justify-center p-2 text-gray-700 transition-colors border-2 border-transparent rounded-full hover:bg-gray-100 hover:text-black">
            <SlidersHorizontal size={28} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="w-full">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-[#e2e8f0]">
              <th className="py-3 font-bold text-gray-800 w-24">ID</th>
              <th className="py-3 font-bold text-gray-800">Số điện thoại</th>
              <th className="py-3 font-bold text-gray-800 w-64">Trạng thái</th>
              <th className="py-3 font-bold text-gray-800">Thời gian tạo</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4} className="py-20 text-center">
                  <div className="flex flex-col items-center justify-center text-blue-500 gap-3">
                    <Loader2 className="animate-spin" size={32} />
                    <p className="text-gray-500 font-medium">
                      Đang tải danh sách yêu cầu...
                    </p>
                  </div>
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={4} className="py-12 text-red-500 font-medium">
                  {error}
                </td>
              </tr>
            ) : filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr
                  key={index}
                  className="transition-colors border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 font-bold text-gray-800">{row.id}</td>
                  <td className="py-4 text-gray-600">{row.phone}</td>
                  <td className="py-4">{renderStatusBadge(row.status)}</td>
                  <td className="py-4 text-gray-600">{row.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-12 text-gray-400">
                  Không có yêu cầu nào khớp với bộ lọc.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
