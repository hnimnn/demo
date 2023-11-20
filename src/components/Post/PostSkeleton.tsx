import React, { forwardRef } from "react";
import "./PostSkeleton.scss";

const PostSkeleton = forwardRef(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={`post post-skeleton`}>
        <div className="post-top">
          <div className={`info`}>
            <div className="user-info">
              <div className="cover-avatar">
                <div className="avatar-skeleton"></div>
              </div>
              <div className="name skeleton-loader"></div>
            </div>
          </div>
        </div>
        <div className="cover-content">
          <div className="post-content">
            <div className="skeleton-loader"></div>
            <br></br>
            <div className="skeleton-loader"></div>
          </div>
        </div>
        <div className="action-post">
          <div className="button-block">
            <div className="skeleton-loader"></div>
          </div>
          <div className="button-block">
            <div className="skeleton-loader"></div>
          </div>
          <div className="button-block">
            <div className="skeleton-loader"></div>
          </div>
          <div className="button-block">
            <div className="skeleton-loader"></div>
          </div>
        </div>
      </div>
    );
  }
);

export default PostSkeleton;
