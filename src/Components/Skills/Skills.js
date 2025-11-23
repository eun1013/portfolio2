
import { useState } from 'react';
import SkillsData from '../../data/Skills.json';

const Skills = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // 현재 선택된 카테고리 데이터
  const currentCategory = SkillsData[activeCategoryIndex];

  return (
    <div className="skills">
            <img
        className="aboutme-img"
        src={`${process.env.PUBLIC_URL}/images/title/title04.png`}
        alt="skills 로고 이미지"
      />
      <div className="skills-section">
        <div className='line-bar'></div>
        <div className="main-category-tabs">
          {SkillsData.map((category, idx) => (
            <button
              key={idx}
              className={idx === activeCategoryIndex ? 'active' : ''}
              onClick={() => setActiveCategoryIndex(idx)}>
              {category.mainCategory}
            </button>
          ))}
        </div>
        {currentCategory && ( 
          <div className="category-details">
            <h2 className='category-title'>{currentCategory.subCategory}</h2>
              {currentCategory.items.map((item, itemIdx) => (
                <div key={itemIdx} className="item-card">
                  <img
                    src={`${process.env.PUBLIC_URL}${item.imageUrl}`}
                    alt={item.alt} 
                    className="item-image"/>
                  <p className="item-description">{item.description}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
} 
export default Skills;
