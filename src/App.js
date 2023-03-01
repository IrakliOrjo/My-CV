import {AiFillMail,AiFillLinkedin,AiFillGithub,AiOutlineIdcard,AiOutlineLink} from 'react-icons/ai'
import {ImLocation} from 'react-icons/im'
import {FaMobileAlt} from 'react-icons/fa'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {useRef} from 'react'
import './print.css';





function App() {

  const pdfExportRef = useRef(null);

  const handlePDFExport = () => {
    const input = pdfExportRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('download.pdf');
    });
  };


  return (
    <div className="px-[1em] bg-gray-200 ">
     <div id='glavni' className='bg-[white] shadow-md border-[black] p-4'>
      <div className="flex flex-col px-6">
      <div className="flex">  
      <div>
        <h1 className="text-[2rem] font-bold">Irakli Orjonikidze</h1>
        <h2 className="text-[1.2rem] mb-1 text-blue-500">Frontend Developer</h2>
      </div>
      
      </div>
      <div className="mb-2">
        <ul className="flex gap-2  pt-2 ">
        <li><p className=" text-gray-700  text-[0.95rem]"><a href='' target='_blank'>
          <AiFillMail className='inline-block h-5 pb-1'  /> irakliorjo92@gmail.com</a></p></li>
        <li><p className=" text-gray-700  text-[0.95rem]"><a href='https://www.linkedin.com/in/irakli-orjo/' target='_blank'>
          <AiFillLinkedin className='inline-block h-5 pb-1 mr-1' />Linkedin</a></p></li>
        <li><p className=" text-gray-700  text-[0.95rem]"><a href='https://github.com/IrakliOrjo' target='_blank'>
          <AiFillGithub className='inline-block pb-1 h-5 mr-1' />Github</a></p></li>
        <li><p className=" text-gray-700  text-[0.95rem]"><a href='https://irakli-portfolio.netlify.app/' target='_blank'>
          <AiOutlineIdcard className='inline-block pb-1 h-5 mr-1' />Portfolio</a></p></li>
        <li><p className=" text-gray-700  text-[0.95rem]">
          <ImLocation className='inline-block pb-1 h-5' />Georgia, Tbilisi (Relocation/Remote Possible)</p></li>
        <li><p className=" text-gray-700  text-[0.95rem]"><a>
          <FaMobileAlt className='inline-block pb-1 h-5 mr-1' />+995 599 226 093</a></p></li>
        </ul>
        </div>
      
      </div>
      <div>
        <div className='flex px-6 py-2'>
          <div className=' basis-[40%] max-w-[30em]'>
            <div>
              <p className='text-[1.2rem] mr-auto border-b-2 max-w-[90%] text-[#060632] font-bold'>Technical Skills</p>
            <p className='text-[1rem] text-blue-500 font-bold mb-2'>Frontend:</p>
            <p className='text-[0.9rem] mb-2 max-w-[90%] text-[#464343]'>HTML5, CSS, JavaScript(ES6+), React.JS, TypeScript,
            Redux, JSON, React Hooks, React Router, Styled Components, Tailwind CSS, Bootstrap, BEM.
             </p>
             <p className='text-[1rem] text-blue-500 font-bold'>UI/UX & Other:</p>
            <p className='mb-4 text-[#464343]'>Git, Github, NPM, Yarn, Windows OS, Photoshop, Figma, VS, VSC.</p>
            <p className='text-[1rem] text-blue-500 font-bold'>Principles & Methodologies:</p>
            <p className='mb-2 text-[#464343]'>DRY Principle, Mobile First & Responsive Design,SEO, UI/UX Fundamentals.</p>
            </div>
            
            <div className='mb-6'>
                <p className='text-[1.2rem] mr-auto border-b-2 max-w-[90%]  text-[#060632] font-bold'>Licenses & Certifications</p>
                <p className='text-[0.9rem] text-[#05053b] font-bold'>
                <a href='https://www.freecodecamp.org/certification/irakliorjo/javascript-algorithms-and-data-structures' target='_blank'>  
              JavaScript Algorithms and Data Structures<AiOutlineLink className='inline-block ml-1' /></a></p>
              <p className='text-[0.8rem] text-gray-500 font-semibold'>freeCodeCamp issued Feb 2023</p>
                <p className='text-[0.9rem] font-bold text-[#05053b]'>
                  <a href='https://www.freecodecamp.org/certification/irakliorjo/responsive-web-design' target='_blank'>
                Responsive Web Design<AiOutlineLink className='inline-block ml-1' /></a></p>
              <p className='text-[0.8rem] text-gray-500 font-semibold'>freeCodeCamp issued Feb 2023</p>
                <p className='text-[0.9rem] text-[#05053b] font-bold'>
                  <a href='https://scrimba.com/certificate/ugrGk6tW/gfrontend' target='_blank'> 
                  The Frontend Developer Career Path<AiOutlineLink className='inline-block ml-1' /></a></p>
              <p className='text-[0.8rem] text-gray-500 font-semibold'>Scrimba issued Feb 2023</p>
            </div>
            <div className='mb-6'>
                <p className='text-[1.2rem] mr-auto border-b-2 max-w-[90%]  text-[#060632] font-bold'>Languages:</p>
                <p className='font-bold'>Georgian - Native</p>
                <p className='font-bold'>English - C1</p>
                <p className='font-bold'>Russian - C1</p>
            </div>
          </div>
          <div className=' basis-[70%] px-2'>
            <div className='flex flex-col'>
            <p className='text-[1.2rem]  border-b-2 max-w-[100%] mb-2 text-[#060632] font-bold'>Summary</p>
            <p className='text-[0.9rem] mb-2 max-w-[90%] text-[#464343] '>I'm on the way of reaching 10 000 hours in the training. 
            Self-taught, self-disciplined, I have passed Scrimba "Frontend Developer Career Path", freeCodeCamp courses.
             Happy to recognize that I gained strong fundamental knowledge of HTML/CSS JavaScript.
              Each day Im mastering my skills and learning something new. Currently I am looking for full time Frontend Developer role.
             </p>
             
            </div>
            <div className=''>
            <p className='text-[1.2rem]  border-b-2 max-w-[100%] mb-2 text-[#060632] font-bold'>Personal Projects</p>
            <p className='text-[1rem] underline font-bold mb-2'><a href='https://elysium-realty.netlify.app/' target='_blank'>
            Real Estate Responsive Web Page:<AiOutlineLink className='inline-block ml-1' /></a></p>
            <p className='text-[0.9rem] mb-2 max-w-[90%] text-[#464343]'>Web page made with React.js,
             React Router, Tailwind CSS
             </p>
             <p className='text-[1rem] underline font-bold mb-2'><a href='https://doggroom.netlify.app/' target='_blank'>
              Dog Groom Service Responsive Webpage:<AiOutlineLink className='inline-block ml-1' /></a></p>
            <p className='text-[0.9rem] mb-2 max-w-[90%] text-[#464343]'>Web page made with React.js,
             & Tailwind CSS
             </p>
             <p className='text-[1rem] underline font-bold mb-2'><a href='http://webuild.ge' target='_blank'>
              Webuild.Ge  Responsive Web Page<AiOutlineLink className='inline-block ml-1' /></a></p>
            <p className='text-[0.9rem] mb-2 max-w-[90%] text-[#464343]'>Web page made for construction & development "Webuild Company", using Wordpress, Wordpress plugins & HTML/CSS</p>

             <p className='text-[1rem] underline font-bold mb-2'><a href='https://redberry-bootcamp-irakli.netlify.app/' target='_blank'>
              Online CV Maker Web Application<AiOutlineLink className='inline-block ml-1' /></a></p>
            <p className='text-[0.9rem] mb-2 max-w-[90%] text-[#464343]'>Web application made for 1920x1080 screen size,
            application has multi input forms where you enter your 
            information and your info appears on the right side of the screen real time, creating CV for you.</p>
          </div>
          <div className='mb-2 '>
            <p className='text-[1.2rem]  border-b-2 max-w-[100%] mb-2 text-[#060632] font-bold'>Work Experience</p>
            <p className='text-[1.2rem] text-blue-500 font-bold'>Frontend Developer</p>
            <p className='text-[1rem] font-semibold'>Webuild Company</p>
            <p className='text-[0.8rem] text-gray-500 font-semibold'>2022 - Present(Part-Time)</p>
            <p className='text-[0.9rem] text-[#464343] font-semibold'>Developed website <a href='https://webuild.ge' target='_blank'>
              <span className='font-bold text-[#05053b]'>Webuild.ge</span></a> for 
            "Webuild Company" with Wordpress, also used HTML/CSS skills for Frontend</p>
            </div>
            <div className='mb-2 '>
              
            <p className='text-[1.2rem] text-blue-500 font-bold'>Real Estate Agent</p>
            <p className='text-[1rem] font-semibold'>Elysium Properties Real Estate</p>
            <p className='text-[0.8rem] text-gray-500 font-semibold'>2019 - 2021</p>
            <p className='text-[0.9rem] text-black font-semibold'>Responsibilities as a Real Estate agent included:
             </p>
             <ul className='list-disc text-[0.8rem]'>
          <li className='pl-2'>Searched for properties that match the client's requirements and needs.</li>
          <li className='pl-2'>Scheduled and conducted property viewings for potential buyers and tenants, highlighting key features and answering questions.</li>
          <li className='pl-2'> Prepared and reviewed contracts, ensuring that all legal requirements were met and that clients understood the terms and conditions</li>
          <li className='pl-2'>Provided advice and guidance to clients throughout the buying and selling process, resulting in high levels of customer satisfaction and repeat business</li>
             </ul>
            </div>
            <div className=' mb-2'>
              
            <p className='text-[1.2rem] text-blue-500  font-bold'>Reception Administrator</p>
            <p className='text-[1rem] font-semibold'>Hotel Rooms Kazbegi</p>
            <p className='text-[0.8rem] text-gray-500 font-semibold'>2018 - 2019</p>
            <p className='text-[0.9rem] text-black font-semibold'>Receptionis with Shift Leader responsibilities:</p>
            <ul className='list-disc text-[0.8rem]'>
              <li className='pl-2'>Check In &amp; Check Out</li>
              <li className='pl-2'>Issuing the invoices</li>
              <li className='pl-2'>Making individuale reservations in the PMS System (OPERA)</li>
              <li className='pl-2'>Working with Top VIP's, business guests and large travel groups</li>
              <li className='pl-2'>Assisting in the staff training for newcomers</li>
            </ul>
            </div>
            
          </div>
          
          
        </div>
      </div>
      <div>
        
      </div>
      <div>
        
      </div>
     </div>
     
    </div>
  );
}

export default App;
