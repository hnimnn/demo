import React from "react";
import "./Post.scss";
import { ReactComponent as Heart } from "../../assets/icons/heart-regular.svg";
import { ReactComponent as Comment } from "../../assets/icons/comment-dots-regular.svg";
import { ReactComponent as Eye } from "../../assets/icons/eye-regular.svg";
import { ReactComponent as Dots } from "../../assets/icons/ellipsis-solid.svg";
import { ReactComponent as Bulb } from "../../assets/icons/lightbulb-solid.svg";
import { ReactComponent as Speaker } from "../../assets/icons/bullhorn-solid.svg";
import { PostType } from "../../utils/data";
import parse from "html-react-parser";
import { formatTimePost } from "../../utils/function";
export type PostProps = {
  post: PostType;
};

const Post = ({ post }: PostProps) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [showMore, setShowMore] = React.useState(false);
  const [overflowHeight, setOverFlowHeight] = React.useState(false);

  const handleResize = () => {
    if (contentRef.current) {
      const currentHeight = contentRef.current.clientHeight;
      const scrollHeight = contentRef.current.scrollHeight;

      if (currentHeight + 1 < scrollHeight) {
        setOverFlowHeight(true);
      } else setOverFlowHeight(false);
    }
  };
  React.useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`post ${post.type}`}>
      <div className="post-top">
        <div className={`info ${post.user.gender}`}>
          <div className="user-info">
            <div className="cover-avatar">
              <img
                draggable={false}
                className="avatar"
                src={post.user.avatar}
                alt=""
              />
            </div>
            <span className="name">{post.user.name}</span>
          </div>
          <span className="time">{formatTimePost(new Date(post.time))}</span>
        </div>
        {post.type === "idea" ? <Bulb /> : <Speaker />}
      </div>
      <div className="cover-content">
        <div
          ref={contentRef}
          style={{
            maxHeight: `calc(6.25em + 1px)`,
          }}
          className="post-content"
        >
          {parse(post.postContent)}
        </div>
        {overflowHeight ? (
          showMore ? (
            <p
              onClick={() => {
                setShowMore(false);
                if (contentRef.current)
                  contentRef.current.style.maxHeight = "calc(6.25em + 1px)";
              }}
              className="show-more"
            >
              Show less
            </p>
          ) : (
            <p
              onClick={() => {
                setShowMore(true);
                if (contentRef.current)
                  contentRef.current.style.maxHeight = "unset";
              }}
              className="show-more"
            >
              Show more
            </p>
          )
        ) : (
          ""
        )}
      </div>
      <div className="action-post">
        <div className="button-block">
          <button>
            <Heart />
          </button>
          <span>{post.likeNumber}</span>
        </div>
        <div className="button-block">
          <button>
            <Comment />
          </button>
          <span>{post.commentNumber}</span>
        </div>
        <div className="button-block">
          <button>
            <Eye />
          </button>
          <span>{post.viewNumber}</span>
        </div>
        <div className="button-block">
          <button>
            <Dots />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
