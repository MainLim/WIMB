import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoSnippet from './VideoSnippet';
import axios from 'axios';

const VideoListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const VideoList = ({ category }) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `${category}`;
        console.log(query);
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=kr&maxResults=10&q=${query}&type=video&key=AIzaSyB5oYWdKBm7k6OMV2NI87VQrqJO4db10Rg`,
        );
        setItems(response.data.items);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기 중일 때
  if (loading) {
    return <VideoListBlock>대기 중...</VideoListBlock>;
  }
  // 아직 items 값이 설정되지 않았을 때
  if (!items) {
    return null;
  }

  // items 값이 유효할 때
  return (
    <VideoListBlock>
      {items.map((item) => (
        <VideoSnippet
          key={item.etag}
          snippet={item.snippet}
          id={item.id}
          thumbnail={item.snippet.thumbnails.default}
        />
      ))}
    </VideoListBlock>
  );
};

export default VideoList;
