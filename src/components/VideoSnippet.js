import React from 'react';
import styled from 'styled-components';

const VideoSnippetBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: VideosnippetBlock;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .content {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      whith-space: normalize;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
const VideoSnippet = ({ snippet, id, thumbnail }) => {
  const { title, description } = snippet;
  const { videoId } = id;
  const { url } = thumbnail;
  return (
    <VideoSnippetBlock>
      {url && (
        <div className="thumbnail">
          <a
            href={'https://www.youtube.com/watch?v=' + videoId}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={url} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a
            href={'https://www.youtube.com/watch?v=' + videoId}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </VideoSnippetBlock>
  );
};

export default VideoSnippet;
