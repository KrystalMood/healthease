import { useSearchParams } from "@remix-run/react";
import { BiChevronDown, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { tabs, postsList, sortOptions } from "~/data/content-index";
import { Post, SortOption, TabType } from "~/types/content";
import { useEffect, useRef, useState } from "react";
import { BsDot } from "react-icons/bs";

export default function IndexContentSection(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const selectedTab = (searchParams.get("tab") as TabType) || "Semua";
  const selectedOption = (searchParams.get("sort") as SortOption) || "Terbaru";

  const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false);
  const remainingTabs = [];
  for (let i = 0; i < tabs.length; i++) {
    
  }

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const postsPerPage = 9;

  const toggleDropdown = (): void => setIsOpen(!isOpen);

  const handleOptionClick = (option: SortOption): void => {
    setSearchParams((prev) => {
      prev.set("sort", option);
      prev.set("page", "1");
      return prev;
    });
    setIsOpen(false);
  };

  const handleTabClick = (tab: TabType): void => {
    setSearchParams((prev) => {
      prev.set("tab", tab);
      prev.set("page", "1");
      return prev;
    });
  };

  const handleTabClickMore = (): void => {
    setIsMoreOpen(!isMoreOpen);
  };

  const handlePageChange = (pageNumber: number) => {
    setSearchParams((prev) => {
      prev.set("page", pageNumber.toString());
      return prev;
    });
  };

  let filteredPosts =
    selectedTab === "Semua"
      ? postsList
      : postsList.filter((post) => post.category === selectedTab);

  switch (selectedOption) {
    case "Terbaru":
      filteredPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
      break;
    case "Terlama":
      filteredPosts.sort((a, b) => a.date.getTime() - b.date.getTime());
      break;
    case "Paling Banyak Dilihat":
      filteredPosts.sort((a, b) => b.views - a.views);
      break;
    case "Paling Disukai":
      filteredPosts.sort((a, b) => b.likes - a.likes);
      break;
  }

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  return (
    <div className="min-h-screen py-10">
      <div className="w-[90vw] mx-auto">
        <h1 className="mb-2 font-semibold text-3xl">Blog</h1>
        <h3 className="text-lg text-gray-400">
          Browse Our Curated Categories and Uncover Stories, Tips, and Ideas
          that Resonate with You
        </h3>
      </div>
      <div className="w-[90vw] mx-auto mt-4 flex justify-between">
        <div className="flex gap-4">
          {tabs.length > 5 ? (
            <div className="flex gap-4">
              {tabs.slice(0, 4).map((tab) => (
                <button
                  key={tab}
                  className={`outline outline-1 px-4 py-2 rounded-lg ${
                    selectedTab === tab
                      ? "bg-gray-600 text-white"
                      : "text-gray-600 outline-gray-500"
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              ))}
              <button
                key="more"
                className="outline outline-1 px-4 py-2 rounded-lg text-gray-600 outline-gray-500"
                onClick={() => handleTabClickMore()}
              >
                {isMoreOpen === false ? (
                  <BiChevronRight size={16} />
                ) : (
                  <BiChevronDown size={16} />
                )}
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`outline outline-1 px-4 py-2 rounded-lg ${
                    selectedTab === tab
                      ? "bg-gray-600 text-white"
                      : "text-gray-600 outline-gray-500"
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center">
          <h3 className="mr-2 text-gray-600">Sort by:</h3>
          <div className="relative" ref={dropDownRef}>
            <button
              onClick={toggleDropdown}
              className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded inline-flex items-center"
            >
              <span className="mr-1">{selectedOption}</span>
              <FiChevronDown className="h-4 w-4" />
            </button>
            {isOpen && (
              <ul className="absolute text-gray-700 pt-1 w-full bg-white border border-gray-300 mt-1 rounded shadow-lg z-10">
                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      className="hover:bg-gray-100 py-2 px-4 block w-full text-left"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-start items-start max-w- mx-auto">
        {tabs.slice(5, tabs.length).map((tab) => (
          <button>
            <button
              key={tab}
              className={`outline outline-1 px-4 py-2 rounded-lg ${
                selectedTab === tab
                  ? "bg-gray-600 text-white"
                  : "text-gray-600 outline-gray-500"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          </button>
        ))}
      </div>

      <div className="w-[90vw] mx-auto mt-8 grid grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded shadow">
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="relative object-cover h-[40vh] w-full rounded-lg shadow-md"
              />
              <h2 className="absolute z-20 top-3 left-3 rounded-full px-3 py-2 shadow-md backdrop-blur-3xl font-semibold text-gray-100">
                {post.category}
              </h2>
            </div>

            <div className="mt-2 space-x-1 flex text-gray-600 font-[200] items-center text-[0.92rem]">
              <p>
                {new Intl.DateTimeFormat("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }).format(post.date)}
              </p>
              <BsDot />
              <p>
                {`${post.minsToRead} ${post.minsToRead > 1 ? "mins" : "min"}`}{" "}
                to read
              </p>
            </div>
            <h2 className="mt-2 text-xl font-[500] mb-1">{post.title}</h2>
            <p className="text-gray-600 mb-2">
              {post.subtitle.length > 100
                ? `${post.subtitle.substring(0, 100)}...`
                : post.subtitle}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <figure className="flex items-center space-x-2">
                <img
                  src="/template.jpg"
                  alt={post.creatorProfile}
                  className="w-10 h-10 rounded-full shadow-md"
                />
                <h2 className="font-semibold">{post.creatorProfile}</h2>
              </figure>
              <h4 className="mr-3 underline text-sm font-[200] cursor-pointer">
                Read more
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex mx-auto justify-center items-center">
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="text-gray-600 hover:text-gray-900 disabled:opacity-50"
        >
          <BiChevronLeft size={20} className="rounded-md px-4 py-4 shadow-md" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`px-4 py-2 rounded-md ${
              currentPage === pageNum
                ? "bg-gray-600 text-white"
                : "bg-white text-gray-600 shadow-md"
            }`}
          >
            {pageNum}
          </button>
        ))}
        <button
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages}
          className="text-gray-600 hover:text-gray-900 disabled:opacity-50"
        >
          <BiChevronRight
            size={20}
            className="rounded-md px-4 py-4 shadow-md"
          />
        </button>
      </div>
    </div>
  );
}
