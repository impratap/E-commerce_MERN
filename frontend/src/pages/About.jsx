import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
 
function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iste nesciunt consectetur explicabo earum modi repellendus harum ratione, alias, nisi, est cum commodi totam atque! Maiores, odio temporibus, ipsa harum nesciunt deserunt repellendus ipsum labore, dolorum omnis eum distinctio eius quas asperiores quasi optio autem nihil consectetur consequuntur ab provident?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis neque exercitationem, eius accusamus eos quisquam sequi sed esse repellat totam voluptatibus inventore, incidunt deserunt nihil consectetur sunt. Molestiae, obcaecati natus eveniet perspiciatis deleniti quia necessitatibus odio veniam consequuntur mollitia esse fugiat repudiandae libero excepturi nam omnis animi totam maxime?</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, harum. Repellendus debitis ut cumque eius nemo ad exercitationem laboriosam consectetur, dolor minima fugit? Aliquam natus cum, laboriosam vero totam est.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border border-gray-300  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='tex-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam debitis eum vitae provident temporibus modi sunt labore! Minima fuga rerum blanditiis quo iste ratione voluptates quam dolore placeat earum.</p>
          </div>

          <div className='border border-gray-300  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='tex-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident et qui quae sint sed recusandae impedit dignissimos expedita, porro accusamus rerum temporibus laudantium. Incidunt ex expedita corporis tempore eveniet!</p>
          </div>

          <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer service:</b>
              <p className='tex-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias beatae maiores autem expedita saepe eos officia impedit praesentium! Ipsum illo inventore nesciunt corporis alias, ipsa accusantium voluptatem deleniti quae quidem.</p>
          </div>
      </div>

      <NewsLetterBox />
      

    </div>

    
  )
}

export default About