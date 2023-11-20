import "./PostPage.scss";
import { ReactComponent as Attach } from "../../assets/icons/paperclip-solid.svg";
import { ReactComponent as Microphone } from "../../assets/icons/microphone-solid.svg";
import { ReactComponent as DropdownIcon } from "../../assets/icons/caret-down-solid.svg";
import { ReactComponent as Filter } from "../../assets/icons/filter-solid.svg";
import avatar from "../../assets/images/avatar.jpg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Post from "../../components/Post/Post";
import { postList } from "../../utils/data";
import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import PostSkeleton from "../../components/Post/PostSkeleton";
const PostPage = () => {
  const options = ["None", "Newest post", "Latest post", "View"];
  const numberFirstRenderList = 7;
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const [displayedPost, setDisplayedPost] = React.useState(
    postList.slice(0, numberFirstRenderList)
  );
  const [sortedPost, setSortedPost] = React.useState(displayedPost);
  const [isLoadMore, setIsLoadMore] = React.useState(false);
  const [loadedPost, setLoadedPost] = React.useState(numberFirstRenderList);
  const skeletonRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const fakePostList = [...displayedPost];
    switch (selectedOption) {
      case "Newest post":
        setSortedPost(
          fakePostList.sort(
            (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
          )
        );
        break;
      case "Latest post":
        setSortedPost(
          fakePostList.sort(
            (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
          )
        );
        break;
      case "View":
        setSortedPost(fakePostList.sort((a, b) => b.viewNumber - a.viewNumber));
        break;
      default:
        setSortedPost(fakePostList);
        break;
    }
  }, [selectedOption, displayedPost]);

  React.useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (skeletonRef.current) observer.observe(skeletonRef.current);

    return () => observer.disconnect();
  }, [isLoadMore]);

  const handleIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLoadMore) {
        setIsLoadMore(true);
        setLoadedPost((prevLoadedPost) => prevLoadedPost + 5);
      }
    });
  };
  React.useEffect(() => {
    const id = setTimeout(() => {
      setDisplayedPost(postList.slice(0, loadedPost));
      setIsLoadMore(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [loadedPost]);
  return (
    <div className="post-page">
      <div className="post-input-block">
        <img draggable={false} className="avatar" src={avatar} alt="" />
        <div className="post-input">
          <input placeholder="Leave your thought here" />
          <div className="icon-flex">
            <button>
              <Attach />
            </button>
            <button>
              <Microphone />
            </button>
          </div>
        </div>
        <PrimaryButton>
          <span>Post</span>
        </PrimaryButton>
      </div>
      <div className="action-block">
        <div className="sort">
          <span>Sort by:</span>
          <Dropdown
            styles={{
              border: "0",
              backgroundColor: "transparent",
              color: "#415364",
              fontSize: "14px",
              fontWeight: 600,
              padding: 0,
            }}
            options={options}
            onOptionSelect={setSelectedOption}
          />
        </div>
        <button className="fitler-btn">
          <Filter />
        </button>
      </div>
      <div className="post-list">
        {sortedPost.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        {displayedPost.length < postList.length ? (
          <>
            <PostSkeleton ref={skeletonRef} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default PostPage;
