import React from 'react';
import './story.component.scss';
import ScrollAnimation from 'react-animate-on-scroll';
const StoryComponent = props => {
  const { orientation, title, description, label, picture } = props;
  let { color } = props;
  if (!color) color = '#cacaca';

  let className = orientation === "right" ? "story__card-right" : "story__card-left";
  return (
    <div className='story'>
      <ScrollAnimation
        animateOnce={true}
        duration={1}
        animateIn={orientation === 'right' ? 'fadeInRight' : 'fadeInLeft'}
      >
      
        <div className={`${className} ${orientation === 'right' ? 'story__right' : 'story__left'}`}>
            <div className={className + "__header"}>
              <div
                className={
                  orientation === 'right' ? className + "__header__duration_right" : className + "__header__duration"
                }
              >
                <span>{label}</span>
              </div>
              <div className={className + "__header__title"}>
                <h2
                  style={{
                    color: color === '#cacaca' ? 'black' : 'white',
                    fontSize: title.length >= 19 ? '18px' : '22px'
                  }}
                >
                  {title}
                </h2>
              </div>
              <div className={className + "__header__img"}>
                <img alt="story_img" style={{borderBottomLeftRadius: description ? "0" : "4px",borderBottomRightRadius: description ? "0" : "4px",}} src={picture} />
              </div>
            </div>

           {description && <div className={className + "__content"}>{description}</div>} 
          </div>
          <div
            style={{
              borderColor:
                orientation === 'right'
                  ? `transparent ${color} transparent transparent`
                  : `transparent transparent transparent ${color}`
            }}
            className={orientation === 'right' ? className + "__arrow-right" : className + "__arrow-left"}
          />
    
      </ScrollAnimation>
    </div>
  );
};

export default StoryComponent;
