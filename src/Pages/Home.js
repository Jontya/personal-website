import React from 'react'
import Sidebar from '../Components/Sidebar.js'
import { CodeBlock, dracula} from "react-code-blocks";
import "../Styles/Home.css"

function Home() {
  return (
    <div className="home">
        <div className='home-sidebar'>
          <Sidebar />
        </div>
        <div className='home-about'>
          <h1 className='home-about-title'>About Me</h1>
          <p>
            Hey, my name is Jonty. I am currently in my second year studying Computer Science with a focus in software development at the University of Newcastle.
            I'm extremely interested in both front-end and back-end development having extensive personal experience in Java, C++ and React. I have a huge passion
            for all things tech and programming and genuinely love all forms of problem solving. Whether this takes form in solving Mathematical problems, fixing
            broken smart phones or finding solutions to problems I come across in my day to day life.
          </p>

          <h2 className='home-about-subtitle'>Software Engineering</h2>
          <p>
            I began programming in 2018 during high-school and continued through 2019 out of general interest, during this time I was using C++ and making very basic
            console applications. However it wasn't until 2020 where I began to take genuine interest and start pondering upon the idea of studying computer science and 
            pursuing a career in the software development industry. During my first semester at University in 2021 I started using Java as one of my classes was taught in it.
            Since then I have continued to further my skills in Java and would consider it my most used language and the language I am most proficient in. I also recently
            picked up React as I wanted to create this personal portfolio. Previously I have had no interest in any kind of front-end development but after enjoying my time
            working with React I can confidently say im interested in front-end development.
          </p>
          <p>
            The piece of code below is a mildly edited snippet from my discrete event simulator project. Calling the getProcessingTime method we can calculate a "production time"
            based on the information inputted when the class is first instantiated. The whole project is much more complex and involves multiple data structures modeled around this 
            concept in order to work. If you would like to see more you can visit the <a href='https://github.com/Jontya/production-line-discrete-event-simulator' className='home-shortcut'>GitHub repository</a>.
          </p>

          <CodeBlock
            text={` import java.util.Random

              public class Stage{
                private int M; // Average production time
                private int N; // Range from the average
                private Random rand; // Random number between 0 -> 1

                // Constructor
                public Stage(_M, _N){
                  M = _M; 
                  N = _N; 
                }
                
                // Calculates a random production time based on the M and N variable
                public void getProcessingTime(){
                  return M + N * (rand.nxtDouble() - 0.5);
                }
            }`}
            language={"java"}
            wrapLines={true}
            showLineNumbers={false}
            theme={dracula}
            customStyle={{
              fontSize: "0.9rem",
              borderRadius: '5px',
              boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
              backgroundColor: '#282b2e',
            }}
          />
        </div>
    </div>
  )
}

export default Home