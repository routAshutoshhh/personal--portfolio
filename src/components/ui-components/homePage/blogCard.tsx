import { Card, CardContent } from "@/components/ui/card";
//import Image from "next/image";
import Link from "next/link";
import { FaMedium } from "react-icons/fa";

export const BlogCard = ({ post }: { post: any }) => {
  //for handling image source and adding a fallback image
  //   const imageSrc =
  //     post.thumbnail && post.thumbnail !== ""
  //       ? post.thumbnail
  //       : "/fallback-image.jpg";

  return (
    <Card className="hover:shadow-lg transition-shadow dark:shadow-accent duration-300 w-full ">
      <Link href={post.link} target="_blank">
        {/* <Image
          src={imageSrc}
          alt={post.title}
          width={500}
          height={250}
          className="rounded-t-xl w-full h-[180px] object-cover"
        /> */}
        <CardContent className="space-y-0.5 ">
          <div className="flex flex-row  gap-2 ">
            <FaMedium className="text-2xl text-primary-accent" />
            <h2 className="text-sm ml-1">{post.title}</h2>
          </div>
          <span className="text-xs text-muted-foreground ml-8">
            {new Date(post.pubDate).toDateString()}
          </span>
        </CardContent>
      </Link>
    </Card>
  );
};
