
import { PencilIcon } from '@heroicons/react/24/outline'

const features = [
  
  { name: 'First Time Coding', description: 'I’ve loved making things for as long as I can remember, and wrote my first program when I was in Grade 12, just two weeks after my sister brought home a old Dell Latitude E5540 that I taught myself to type on..' },
  { name: 'Second Best thing', description: 'The only thing I loved more than computers was music. When I was 8, I saw an Music Video "Moves Like Jagger" from Maroon 5 and I got excited. So in Grade 11 I Bought myself a guitar to learn how to play music.' },
  { name: 'Competitive', description: 'In Grade 12, I spent my whole time in Competitive Programming. It was only 5 months to learn algorithms and programming languages but I still manage to get Third Prize.' },
  { name: 'Future', description: 'Today, I’m learning how to be a FullStack Engineer and then becoming a software developer.' },
]

export default function Info() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">I’m JustA. I live in Da Nang City, where I immerse myself in  coding.</p>
          <img className="mt-2 h-45 w-45 ring-4 ring-white sm:mt-6 lg:mt-8" src="Img/JustA.jpg" alt="" />
          <p className="mt-4 text-lg text-gray-500">
            A normal programmer, who is trying to learn more about programming and life.
          </p>
        </div>
        <div className="mt-20 lg:col-span-2 lg:mt-20" >
          <dl className="space-y-10 sm:grid sm:grid-flow-col  sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}