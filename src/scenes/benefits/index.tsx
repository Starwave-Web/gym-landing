
import { BenefitType, SelectedPage } from '@/shared/types'
import {HomeModernIcon, UserGroupIcon, AcademicCapIcon} from "@heroicons/react/24/solid"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from './Benefit.tsx'
import ActionButton from '@/shared/ActionButton.tsx'
import BenefitsPageGarphic from "@/assets/BenefitsPageGraphic.png"

const benefits : Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6'/>,
    title: "State of the Art Facilities",
    description: "Art is a timeless expression of creativity that transcends boundaries and speaks to the depths of the human soul."
  },
  {
    icon: <UserGroupIcon className='h-6 w-6'/>,
    title: "100's of Diverse Classes",
    description: "Embracing diversity enriches our collective experience and fosters understanding among all people."
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6'/>,
    title: "Expert and Pro Trainers",
    description: "With their knowledge and dedication, they empower clients to transform sweat into success."
  }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const container = {
  hidden: {},
  visible: {
      transition: { staggerChildren: 0.2}
  }
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div 
          className="div"
          onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
        >
          {/* HEADER */}
          <motion.div 
            className='md:my-5 md:w-3/5'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
          
          >
            <HText>MORE THAN JUST A GYM.</HText>
            <p className='my-5 text-sm'>
              We provide world class fitness equipment, trainers and classes to 
              get you to your ultimate fitness goals with ease. We privide true
              care into each and every member.
            </p>
          </motion.div>
          <motion.div 
            className='md:flex mt-5 items-center justify-between gap-8'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}  
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}              
                icon={benefit.icon}             
                title={benefit.title}              
                description={benefit.description}
                setSelectedPage={setSelectedPage}              
              />
            )
            )}
          </motion.div>
           <div className='mt-16 items-center justify-between md:flex gap-20 md:mt-28'>
            <img className="mx-auto" src={BenefitsPageGarphic} alt="benefits-page-graphic" />
            <div>
              <div className='relative'>
                <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: 50},
                        visible: {opacity: 1, x: 0},
                    }}
                  >
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING{" "}
                      <span className='text-primary-500'>FIT</span>
                    </HText>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{ delay: 0.2 ,duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: 50},
                    visible: {opacity: 1, x: 0},
                }}
              >
                <p className='my-5'>
                Get fit, stay healthy! Join our gym today for expert coaching, state-of-the-art equipment, and a supportive community. Your fitness journey starts here!
                </p>
                <p className='mb-5'>
                Transform your body and mind with personalized training programs tailored to your goals. Whether you're a beginner or a fitness pro, we’ve got you covered. Don’t wait—unlock your potential and achieve results you’ve always dreamed of. Join us and start today!
                </p>
              </motion.div>
              <div className='relative mt-16'>
                <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>
              </div>
            </div>
           </div>
        </motion.div>
    </section>
  )
}

export default Benefits