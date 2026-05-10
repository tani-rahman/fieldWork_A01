import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../components/Home';
import About from '../components/About';
import FeaturesSection from '../components/Feature';
import Services from '../components/Services';
import ContactSection from '../components/Contact';
import PricingSection from '../components/Pricing';
import Portfolio from '../components/Portfolio';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
      children: [
        {
          index: true,
          path: "/",
          Component:Home
        },
        {
          path: "/about",
          Component: About
        },
        {path: "/features", 
        Component: FeaturesSection
        },
        {
          path: "/services",
          Component: Services
        },
        {path: "/contact",
        Component: ContactSection
        },
        {
          path: "/pricing",
          Component: PricingSection
        },
        {path: "/portfolio", 
        Component: Portfolio

        }
      ] 
  },
]);
