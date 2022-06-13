import React from 'react'
import css from './Tutorial.module.scss'


export default function Tutorial() {
  return (
    <div className={css.name}>
        <p>실험을 해봅시다</p>
        <div className={css.tutorial}>
            <ul>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">6</a></li>
            </ul>
        </div>
    </div>
  )
}
