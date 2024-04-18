import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../css/Header.css'
const Home = () => {
  return (
    <div>
      <div className='content'>
        YellowMatics
      </div>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography variant="h2">Welcome to YellowMatics</Typography>
        <br />
        <br />
        <Typography align='justify'>
          Empowering Minds, Transforming Futures

          At YellowMatics, we believe in the power of technical education to shape the world. As a premier training academy, we are dedicated to equipping students with the knowledge, skills, and confidence they need to excel in today's rapidly evolving technological landscape.
        </Typography>
        <br />
        <Typography variant="h4">Our Mission</Typography>
        <Typography align='justify'>
          <br />
          Our mission at YellowMatics is simple yet profound: to empower individuals with the technical expertise they need to thrive in their careers and make meaningful contributions to society. We strive to bridge the gap between classroom theory and real-world application, providing hands-on training and practical experience that prepares our students for success in their chosen fields.
        </Typography>
        <br />
        <Typography variant="h4">Why Choose YellowMatics</Typography>
        <Typography align='justify'>
          Expert Instructors: Our team of experienced instructors are industry professionals with a passion for teaching and a wealth of practical knowledge to share. Cutting-Edge Curriculum: We offer a comprehensive range of courses covering the latest technologies and tools, ensuring that our students stay ahead of the curve. Hands-On Learning: From interactive workshops to real-world projects, our hands-on approach to learning allows students to apply their skills in a practical setting. Career Support: We are committed to the success of our students, providing career guidance, job placement assistance, and ongoing support long after graduation.
        </Typography>
        <Typography variant="h4"><br />Our Programs</Typography>
        <Typography align='justify'>
          <br />
          Whether you're looking to launch a career in software development, data science, cybersecurity, or another technical field, YellowMatics has a program for you. Our flexible course offerings cater to students of all backgrounds and experience levels, from beginners to seasoned professionals seeking to upskill or reskill.

          Get Started Today

          Ready to take the next step in your technical education journey? Explore our course offerings, meet our instructors, and discover why YellowMatics is the right choice for you. Contact us to learn more or schedule a consultation.

          At YellowMatics, the future is bright. Join us and unlock your full potential today!
        </Typography>
      </Box>
      <h5 className='image'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFYuFCZYo-9OCedCIRchdPDjHs3zShGOKHw&s" alt="skills" />
        <p id='cont' style={{ fontSize: '30px', textAlign: 'justify' }}>success of our students</p>
      </h5>
      <h6 className='image1'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmTnSIjnDLXOoMCm8EfMkGViLecvEObu0yrw&s" alt="skills" />
        <p style={{ fontSize: '30px', textAlign: 'justify' }}>providing career guidance</p>
      </h6>
      <h6 className='image2'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_sxF5qUFJdgCaRsY2rDyGPWPMNf14WXb8g&s" alt="skills" />
        <p style={{ fontSize: '30px', textAlign: 'justify' }}>job placement assistance</p>
      </h6>
    </div>
  );
}

export default Home;
