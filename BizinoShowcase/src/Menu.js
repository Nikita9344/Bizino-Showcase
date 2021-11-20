import React from 'react';

const Menu = ({items}) => {
  
  const showDesc= (data)=>{
    return(
      <h4>
        {data}
      </h4>
    )
  }
  return (
    <div className="section-center">
      {items.map((menuItem)=>{
        const{id, title, img, desc, moredesc}=menuItem;
        return (
          <article className='menu-item'>
            <div className='photo-container'>
              <img
                src={img}
                alt={title}
                className='photo'
                onMouseOver={() => showDesc(moredesc)}
              />
            </div>

            <br></br>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
    )
};

export default Menu;
