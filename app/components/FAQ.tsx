'use client';

import React, { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function FAQComponent() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: 'How long is shipping?',
      answer: 'Shipping is between 5-10 business days',
    },
    {
      id: 2,
      question: 'What if I want a refund?',
      answer: 'We do not refund if you are not satisfied',
    },
    {
      id: 3,
      question: 'Can I just purchase the stand?',
      answer:
        'Unfortunatley, we are only selling the bundle which includes the stand',
    },
    // {
    //   id: 4,
    //   question: 'How can I track my order?',
    //   answer: 'You can go to your dashboard and view all of your orders',
    // },
    {
      id: 4,
      question: 'How many years does this lamp last?',
      answer:
        'We would hope a lifetime, but you never know what could happen. ',
    },
  ];

  return (
    <div id='faq' className='w-full py-4'>
      <div className='bg-stone-50 px-4 py-6 rounded-lg shadow-md w-[89%] max-w-[1400px] m-auto'>
        <h2 className='text-xl mb-6 font-extralight text-dark'>
          Frequently Asked Questions
        </h2>

        {questions.map((q) => (
          <div key={q.id} className='mb-5 last:mb-0'>
            <button
              className='faq-question w-full text-left text-base focus:outline-none p-4 bg-white rounded-lg shadow-sm flex justify-between items-center text-dark'
              onClick={() =>
                setActiveQuestion((a) => (a === q.id ? null : q.id))
              }>
              {q.question}
              {activeQuestion === q.id ? (
                <FaMinusCircle className='text-base text-primary' />
              ) : (
                <FaPlusCircle className='text-base text-primary' />
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ ease: 'circIn' }}
                  className='mt-2 text-primary ml-4 text-sm'>
                  <p>{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQComponent;
