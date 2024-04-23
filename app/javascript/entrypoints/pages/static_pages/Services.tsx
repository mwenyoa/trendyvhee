// import React from 'react';
// import { Nav } from '../../components';

// type Props = {}

// const Services = (props: Props) => {
//   return (
//     <>
//         <Nav />
// <section className="dark:bg-gray-800 dark:text-gray-100 py-6 sm:py-8 lg:pb-12 lg:pt-24 w-full h-full">
//  <div className="container mx-auto p-4 my-6 space-y-2 text-center">
//      <h2 className="text-2xl lg:text-5xl font-bold text-blue-900 p-3">Services We Offer</h2>
//  </div>
//  <div className="container mx-auto grid justify-center gap-8 sm:grid-cols-1 lg:grid-cols-2 w-3/4  ">
//      <div className="flex flex-col items-center px-4 shadow shadow-lg rounded-lg
//                hover:shadow-lg  leading-6 sm:leading-7 md:leading-8 lg:leading-9 py-8">
//          <svg fill='currentColor' xmlns="http:www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-8 h-8 dark:text-violet-400">
//              <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/>
//          </svg>
//      <h3 className="my-3 text-3xl font-semibold text-center">Marketing</h3>
//      <div className="space-y-1 leading-tight font-medium text-center">
//          <p>Our marketing services encompass a range of activities to promote and sell our clients' products or services. This includes conducting market research, developing advertising campaigns, managing public relations, building brand awareness, and executing sales strategies. Our goal is to help our clients achieve their marketing objectives by providing tailored solutions that are effective and efficient.</p>
//      </div>
//   </div>
//      <div className="flex flex-col items-center px-4 shadow shadow-lg rounded-lg
//                hover:shadow-lg  leading-6 sm:leading-7 md:leading-8 lg:leading-9 py-8">
//          <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 448 512" fill="purple" className="w-8 h-8 dark:text-violet-400">
//              <path d="M353.4 32H94.7C42.6 32 0 74.6 0 126.6v258.7C0 437.4 42.6 480 94.7 480h258.7c52.1 0 94.7-42.6 94.7-94.6V126.6c0-52-42.6-94.6-94.7-94.6zm-50 316.4c-27.9 48.2-89.9 64.9-138.2 37.2-22.9 39.8-54.9 8.6-42.3-13.2l15.7-27.2c5.9-10.3 19.2-13.9 29.5-7.9 18.6 10.8-.1-.1 18.5 10.7 27.6 15.9 63.4 6.3 79.4-21.3 15.9-27.6 6.3-63.4-21.3-79.4-17.8-10.2-.6-.4-18.6-10.6-24.6-14.2-3.4-51.9 21.6-37.5 18.6 10.8-.1-.1 18.5 10.7 48.4 28 65.1 90.3 37.2 138.5zm21.8-208.8c-17 29.5-16.3 28.8-19 31.5-6.5 6.5-16.3 8.7-26.5 3.6-18.6-10.8.1.1-18.5-10.7-27.6-15.9-63.4-6.3-79.4 21.3s-6.3 63.4 21.3 79.4c0 0 18.5 10.6 18.6 10.6 24.6 14.2 3.4 51.9-21.6 37.5-18.6-10.8.1.1-18.5-10.7-48.2-27.8-64.9-90.1-37.1-138.4 27.9-48.2 89.9-64.9 138.2-37.2l4.8-8.4c14.3-24.9 52-3.3 37.7 21.5z"/>
//          </svg>
//      <h3 className="my-3 text-3xl font-semibold text-center">Software Development</h3>
//      <div className="space-y-1 leading-tight font-medium text-center">
//          <p>Our team specializes in the design, development, and maintenance of software applications tailored to our clients' needs. This involves the complete software development life cycle, including writing high-quality code, conducting thorough testing, identifying and resolving any issues, and deploying the final software product.</p>
//      </div>
//      </div>
//      <div className="flex flex-col items-center px-4 shadow shadow-lg rounded-lg
//                hover:shadow-lg  leading-6 sm:leading-7 md:leading-8 lg:leading-9 py-8">
//          <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
//              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
//          </svg>
//      <h3 className="my-3 text-3xl font-semibold text-center">Web Hosting</h3>
//      <div className="space-y-1 leading-tight font-medium text-center">
//          <p>We provide a range of web hosting solutions, catering to diverse requirements of our clients. Our offerings comprise shared hosting, dedicated hosting, and cloud hosting, each designed to deliver optimal performance and reliability for your website.</p>
//      </div>
//      </div>
//      <div className="flex flex-col items-center px-4 shadow shadow-lg rounded-lg
//                hover:shadow-lg  leading-6 sm:leading-7 md:leading-8 lg:leading-9 py-8">
//      <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
//          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
//      </svg>
//      <h3 className="my-3 text-3xl font-semibold text-center">Social Media Management</h3>
//      <div className="space-y-1 leading-tight font-medium text-center">
//          <p>Our team specializes in crafting, publishing, and evaluating social media content across various platforms, such as Facebook, Twitter, and Instagram. Additionally, we actively interact with followers and oversee online dialogues surrounding a brand or business on behalf of our clientele.</p>
//      </div>
//      </div>
//  </div> 
//  </section> 
//     </>
//   )
// }

// export default Services;










