import React, { useEffect } from 'react'
import './Container.less'

const Container = (props: any) =>{
  return (
    <div>
      <nav className='header-nav'>
        <div className="margin">
          <img className='logo' src="https://blog.zhangruipeng.me/hexo-theme-icarus/img/logo.svg" alt=""/>
          <ul className='navbar-menu'>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
      <section className='section'>
        <div className="margin">
          <div className="l"></div>
          <div className="m"></div>
          <div className="r"></div>
        </div>
      </section>
    </div>
  )
}
export default Container
