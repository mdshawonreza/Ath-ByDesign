import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/home/Home';
import NilAgency from '../pages/nilAgency/NilAgency';
import Nutrition from '../pages/nutrition/Nutrition';
import CombineEvents from '../pages/combineEvents/CombineEvents';
import Media from '../pages/media/Media';
import AiTech from '../pages/aiTech/AiTech';
import VcGroup from '../pages/vcGroup/VcGroup';
import Apparel from '../pages/apparel/Apparel';

import YouthSports from '../pages/youthSports/YouthSports';
import ContactUs from '../pages/home/ContactUs';






const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/nil-Agency",
        element: <NilAgency />,
      },
      {
        path: "/nutrition",
        element: <Nutrition />,
      },
      {
        path: "/combine-events",
        element: <CombineEvents />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/ai-tech",
        element: <AiTech />,
      },
      {
        path: "/vc-group",
        element: <VcGroup />,
      },
      {
        path: "/apparel",
        element: <Apparel />,
      },
      
      {
        path: "/youth-Sports",
        element: <YouthSports />
      },
      {
        path: "/contactUs",
        element: <ContactUs />
      }
    ],
  },
]);

export default Router;
