import React,{useState}  from "react";

import { Link } from "react-router-dom";
import { motion, useCycle} from "framer-motion";

const loaderVariants={
    animationOne:{
        x:[-20,20],
        y:[0,-30],

        transition:{
            x : {
                ease:"easeOut",
                yoyo:Infinity,
                duration:0.5
            },
            y : {
                ease:"easeOut",
                yoyo:Infinity,
                duration:0.25
            },
        }
    },
    animationTwo:{
        y:[0,40],
        x:0,

        transition:{

            y : {
                ease:"easeOut",
                yoyo:Infinity,
                duration:0.25
            },
        }
    }
}


const Loader = ({}) => {

    const [animation,cycleAnimation] = useCycle("animationOne","animationTwo")
    return(
        <>
            <motion.div 
            variants={loaderVariants}
            animate={animation}
            className="loader">

            </motion.div>

            <div onClick={()=> cycleAnimation()}>
                Cycle Loader
            </div>
        </>
    )
}

export default Loader