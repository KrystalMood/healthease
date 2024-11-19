import { useState } from "react";
import { Link } from "@remix-run/react";
import { Clock, Eye, Heart } from "lucide-react";
import { PostsList, Tabs } from "~/data/informasi-publik";

export default function Artikel(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("Semua");
  const [visiblePosts, setVisiblePosts] = useState<number>(6);

  const filteredPosts =
    activeTab === "Semua"
      ? PostsList
      : PostsList.filter((post) => post.category === activeTab);

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <section className="mx-auto mb-12 mt-6 w-[90%]">
      <nav className="mb-8 flex flex-wrap gap-3" aria-label="Kategori Artikel">
        {Tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setVisiblePosts(6);
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activeTab === tab
                ? "bg-emerald-600 text-white"
                : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.slice(0, visiblePosts).map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Link to={`/informasi-publik/${post.id}`}>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={"/template.jpg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute bottom-0 left-0 bg-emerald-600 px-4 py-1 text-sm font-medium text-white">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800 group-hover:text-emerald-600">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600">{post.subtitle}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.minsToRead} min read
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={16} />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={16} />
                    {post.likes}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={"/template.jpg"}
                    alt={post.creatorProfile}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">
                      {post.creatorProfile}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {visiblePosts < filteredPosts.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-emerald-700"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </section>
  );
}
