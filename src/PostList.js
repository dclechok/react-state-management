import React from "react";

/**
 * Diplays a list of either text or image posts.
 *
 */

function RenderPostText({ post }) {
  return <React.Fragment>
    {post.content}
    <br />
  </React.Fragment>;
}

function RenderPostImg({ post }) {
  return <React.Fragment>
    <img src={post.content} width="30"/>
    <br />
  </React.Fragment>;
}

function PostList({ posts, setPosts }) {
  const deleteContent = (id) => {
    setPosts((currentPosts) => {
      return currentPosts.filter((post) => post.id !== id);
    });
  };

  return (
    <div className="post-list">
      {posts.map((post, index) => {
        return (
          <div className="post" key={index}>
            {post.type === "Text" ? (
              <RenderPostText post={post} />
            ) : (
              <RenderPostImg post={post} />
            )}
            <button name="delete" onClick={() => deleteContent(post.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;

// TODO: Diplay the list of posts.
// TODO: Create at least one additional component that is used by this component.
// TODO: Each post must have className="post" for the tests to work.
// TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
