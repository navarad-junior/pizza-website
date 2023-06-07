import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio suscipit culpa hic ad, id commodi dignissimos dicta autem ipsum, quia at impedit ea rerum animi iusto repudiandae aliquam eum itaque nisi qui doloremque enim tempore? Facere ipsam soluta distinctio quia officia enim cupiditate perferendis accusamus porro, velit adipisci corporis facilis? Omnis magni repellendus fugiat. Expedita facilis odio totam voluptate optio asperiores excepturi voluptas est sunt harum! Deleniti perspiciatis eum tenetur, velit earum, amet blanditiis distinctio ex iure adipisci facere itaque excepturi ipsam eligendi vel eveniet soluta provident id veniam debitis. Placeat quidem dolorum debitis laboriosam. Modi qui labore nisi soluta aliquam vero neque provident accusantium fuga nam facilis blanditiis aperiam, necessitatibus accusamus, dolor nobis, rem vitae. Provident nam amet eius labore alias error temporibus assumenda totam cupiditate </p>
      </div>
    </div>
  )
}

export default About
