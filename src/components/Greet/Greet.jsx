import React from 'react'
import style from './style.module.css'

import { useSelector } from 'react-redux'

function Greet() {
  const tasks = useSelector(store => store.tasks)
  return (
    <>
      {tasks && tasks.length > 0 &&
        <>
          <div className={style.greetContainer}>
            <div>
              <h1>Lorem Ipsum</h1>
              <h4 className={style.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed rutrum nisi, non convallis neque. Nullam euismod, nibh quis vestibulum tempor, ipsum dolor gravida lorem, quis tristique dui neque vel odio. Sed malesuada non lorem id egestas. Quisque dui magna, sodales a elementum in, aliquet et lectus. Aliquam lectus magna, egestas sit amet arcu vitae, aliquam tincidunt ante. Donec sit amet nulla sollicitudin, aliquet augue ac, molestie nibh. Phasellus efficitur augue convallis dolor porttitor efficitur. Fusce id dictum diam, a porttitor erat. Proin at velit tempus, vehicula metus eget, luctus lacus. Etiam efficitur lacus eget risus mollis accumsan. Praesent mauris mauris, sodales non posuere sed, laoreet sed massa. Aliquam egestas tellus tortor, sit amet dapibus libero condimentum non. In vitae pretium enim, bibendum tempus ante.                </h4>
              <p className={style.description}>Nulla semper tincidunt arcu ac tempus.</p>
            </div>
          </div>
          <div className={style.separator}></div>
        </>
      }
    </>
  )
}

export default Greet
