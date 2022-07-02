import React from 'react';
import Categories from '../components/Categories';
import VideoList from '../components/VideoList';

const VieosPage = ({ match }) => {
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <VideoList category={category} />
    </>
  );
};

export default VieosPage;
