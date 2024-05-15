import React from 'react'
import '../styles/Stack.css'

const Stacks = () => {
  return (
    <div className="home__skills">
        <p className="skill__title">
          I Build Modern Experience With These Stacks
        </p>
        <div className="home__skills__con">
          <div className="stack__con">
            <div className="stack__inner__con">
              <div className="stacks">
                <img src="/images/skills/html.svg" alt="" />
                <p className="logo__name">HTML5</p>
              </div>
              <div className="stacks">
                <img src="/images/skills/css.svg" alt="" />
                <p className="logo__name">CSS3</p>
              </div>
            </div>
            <div className="mid__stack">
              <div className="stacks" id="mid__stack">
                <img src="/images/skills/javascript.svg" alt="" />
                <p className="logo__name">Javascript</p>
              </div>
            </div>

            <div className="stack__inner__con">
              <div className="stacks">
                <img src="/images/skills/sass.svg" alt="" />
                <p className="logo__name">Sass</p>
              </div>
              <div className="stacks">
                <img src="/images/skills/react.svg" alt="" />
                <p className="logo__name">React</p>
              </div>
            </div>
            <div className="stack__inner__con">
              <div className="stacks">
                <img src="/images/skills/gatsby.svg" alt="" />
                <p className="logo__name">Gatsby</p>
              </div>
              <div className="stacks">
                <img src="/images/skills/tailwind.svg" alt="" />
                <p className="logo__name">Tailwind</p>
              </div>
            </div>
            <div className="stack__inner__con">
              <div className="stacks">
                <img src="/images/skills/html.svg" alt="" />
                <p className="logo__name">HTML5</p>
              </div>
              <div className="stacks">
                <img src="/images/skills/redux.svg" alt="" />
                <p className="logo__name">Redux</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Stacks;