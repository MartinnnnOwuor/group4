import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEye,
  faStar,
  faCheck,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="container mx-auto px-4 pt-20 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p className="text-lg mt-2 text-gray-600">
            We are a dynamic team committed to providing you with unique
            accessories and a diverse range of high-quality products. Our
            mission is to make shopping a delightful experience with a focus on
            innovation and customer satisfaction.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 px-4">
            <div className="bg-green-100 hover:bg-green-200 p-6 shadow-xl border border-gray-200 rounded-lg text-center transition duration-300">
              <FontAwesomeIcon
                icon={faBullseye}
                size="3x"
                className="mb-4 text-green-500"
              />
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-2">
                We aim to deliver exceptional products and services that exceed
                our customers' expectations, fostering a community of
                satisfaction and trust.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 px-4">
            <div className="bg-blue-100 hover:bg-blue-200 p-6 shadow-lg border-0 rounded-lg text-center transition duration-300">
              <FontAwesomeIcon
                icon={faEye}
                size="3x"
                className="mb-4 text-blue-500"
              />
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-2">
                We aspire to be a leading e-commerce platform known for our
                commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Do</h2>
          <p className="text-gray-600">
            At Ekart, we specialize in offering a curated selection of trendy
            fashion items, cutting-edge electronics, and essential home
            appliances. We strive to provide products that combine style,
            functionality, and value, ensuring you find exactly what you need.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Why Us?</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 px-4">
              <div className="bg-gray-100 p-6 shadow-lg border-0 rounded-lg text-center hover:bg-blue-600 hover:text-white">
                <FontAwesomeIcon
                  icon={faStar}
                  size="3x"
                  className="mb-4 text-yellow-500"
                />
                <h3 className="text-xl font-semibold">Quality</h3>
                <p className="mt-2">
                  We bring you the best quality products to ensure satisfaction
                  with every purchase.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 px-4">
              <div className="bg-gray-100 p-6 shadow-lg border-0 rounded-lg text-center hover:bg-violet-400 hover:text-white">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="3x"
                  className="mb-4 text-green-500"
                />
                <h3 className="text-xl font-semibold">Reliability</h3>
                <p className="mt-2">
                  Count on us for dependable service and consistent product
                  excellence.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 px-4">
              <div className="bg-gray-100 p-6 shadow-lg border-0 rounded-lg text-center hover:bg-purple-500 hover:text-white">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  size="3x"
                  className="mb-4 text-red-500"
                />
                <h3 className="text-xl font-semibold">Cost</h3>
                <p className="mt-2">
                  We offer competitive pricing to ensure you get the best value
                  for your money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
