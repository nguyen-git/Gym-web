import React from 'react';
import {GiWeightLiftingUp} from 'react-icons/gi'
import {BiRun} from 'react-icons/bi'
import {FaBurn} from 'react-icons/fa'
import {RiHeartPulseFill} from 'react-icons/ri'

export const programsData = [
  {
    image: (
      <GiWeightLiftingUp></GiWeightLiftingUp>
    ),
    heading: "Strength Training",
    details:
      "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    image: <BiRun></BiRun>,
    heading: "Cardio Training",
    details:
      "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    image: <FaBurn></FaBurn>,
    heading: "Fat Burning",
    details:
      "This program is suitable for you who wants to get rid of your fat and lose their weight.",
  },
  {
    image: <RiHeartPulseFill></RiHeartPulseFill>,
    heading: "Health Fitness",
    details:
      "This programs is designed for those who exercises only for their body fitness not body building.",
  },
];



