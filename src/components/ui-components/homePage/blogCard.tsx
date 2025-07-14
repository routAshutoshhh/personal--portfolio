import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({ post }: { post: any }) => {
  const imageSrc =
    post.thumbnail && post.thumbnail !== ""
      ? post.thumbnail
      : "/fallback-image.jpg";

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300x ">
      <Link href={post.link} target="_blank">
        {/* <Image
          src={imageSrc}
          alt={post.title}
          width={500}
          height={250}
          className="rounded-t-xl w-full h-[180px] object-cover"
        /> */}
        <CardContent className="p-1">
          <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
          <p className="text-sm text-muted-foreground">
            {new Date(post.pubDate).toDateString()}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
};
