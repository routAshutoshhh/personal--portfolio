"use client";
import React, { useEffect, useState } from "react";
import { BlogCard } from "@/components/ui-components/homePage/blogCard";
import axios from "axios";

export default function BlogSection() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const rssUrl = encodeURIComponent("https://medium.com/feed/@a_rout");
        const url = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;
        const { data } = await axios.get(url);
        if (data.status === "ok") setPosts(data.items);
      } catch (error) {
        console.error("Failed to fetch Medium blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <div className="">
      <h1 className="text-lg sm:text-xl font-medium tracking-tight">
        Medium Blogs
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-4">
          {posts.map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
