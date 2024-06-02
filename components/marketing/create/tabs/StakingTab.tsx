import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";

import Image from "next/image";
import React from "react";

export default function StakingTab() {
  return (
    <TabsContent value="staking">
      <Card className="p-4 mt-10 border-none cursor-pointer">
        <CardContent className="space-y-2 p-4 border-none flex items-center flex-col">
          <div className="grid grid-cols-1 gap-4 w-1/4">
            <div className="bg-gray-900/30 group hover:bg-gray-900/70 transition-all duration-300 ease-in-out flex flex-col items-center justify-center p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  width="40"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  className="group-hover:animate-pulse"
                >
                  <defs>
                    <clipPath id="__lottie_element_209">
                      <rect width="500" height="500" x="0" y="0"></rect>
                    </clipPath>
                    <g id="__lottie_element_217">
                      <g
                        clip-path="url(#__lottie_element_218)"
                        transform="matrix(0.800000011920929,0,0,0.800000011920929,2.1999969482421875,1.8000030517578125)"
                        opacity="1"
                      >
                        <g transform="matrix(1,0,0,1,310,310)" opacity="1">
                          <path
                            fill="rgb(255,0,0)"
                            fill-opacity="1"
                            d=" M211,61 C211,61 90,61 90,61 C73.43099975585938,61 60,47.569000244140625 60,31 C60,14.430999755859375 73.43099975585938,1 90,1 C90,1 211,1 211,1 C227.56900024414062,1 241,14.430999755859375 241,31 C241,47.569000244140625 227.56900024414062,61 211,61z"
                          ></path>
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill-opacity="0"
                              stroke="rgb(0,0,0)"
                              stroke-opacity="1"
                              stroke-width="20"
                              d=" M211,61 C211,61 90,61 90,61 C73.43099975585938,61 60,47.569000244140625 60,31 C60,14.430999755859375 73.43099975585938,1 90,1 C90,1 211,1 211,1 C227.56900024414062,1 241,14.430999755859375 241,31 C241,47.569000244140625 227.56900024414062,61 211,61z"
                            ></path>
                          </g>
                        </g>
                        <g transform="matrix(1,0,0,1,310,310)" opacity="1">
                          <path
                            fill="rgb(255,0,0)"
                            fill-opacity="1"
                            d=" M211,121 C211,121 90,121 90,121 C73.43099975585938,121 60,107.56900024414062 60,91 C60,74.43099975585938 73.43099975585938,61 90,61 C90,61 211,61 211,61 C227.56900024414062,61 241,74.43099975585938 241,91 C241,107.56900024414062 227.56900024414062,121 211,121z"
                          ></path>
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill-opacity="0"
                              stroke="rgb(0,0,0)"
                              stroke-opacity="1"
                              stroke-width="20"
                              d=" M211,121 C211,121 90,121 90,121 C73.43099975585938,121 60,107.56900024414062 60,91 C60,74.43099975585938 73.43099975585938,61 90,61 C90,61 211,61 211,61 C227.56900024414062,61 241,74.43099975585938 241,91 C241,107.56900024414062 227.56900024414062,121 211,121z"
                            ></path>
                          </g>
                        </g>
                        <g transform="matrix(1,0,0,1,310,310)" opacity="1">
                          <path
                            fill="rgb(255,0,0)"
                            fill-opacity="1"
                            d=" M211,181 C211,181 90,181 90,181 C73.43099975585938,181 60,167.56900024414062 60,151 C60,134.43099975585938 73.43099975585938,121 90,121 C90,121 211,121 211,121 C227.56900024414062,121 241,134.43099975585938 241,151 C241,167.56900024414062 227.56900024414062,181 211,181z"
                          ></path>
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill-opacity="0"
                              stroke="rgb(0,0,0)"
                              stroke-opacity="1"
                              stroke-width="20"
                              d=" M211,181 C211,181 90,181 90,181 C73.43099975585938,181 60,167.56900024414062 60,151 C60,134.43099975585938 73.43099975585938,121 90,121 C90,121 211,121 211,121 C227.56900024414062,121 241,134.43099975585938 241,151 C241,167.56900024414062 227.56900024414062,181 211,181z"
                            ></path>
                          </g>
                        </g>
                        <g transform="matrix(1,0,0,1,310,310)" opacity="1">
                          <path
                            fill="rgb(255,0,0)"
                            fill-opacity="1"
                            d=" M211,241 C211,241 90,241 90,241 C73.43099975585938,241 60,227.56900024414062 60,211 C60,194.43099975585938 73.43099975585938,181 90,181 C90,181 211,181 211,181 C227.56900024414062,181 241,194.43099975585938 241,211 C241,227.56900024414062 227.56900024414062,241 211,241z"
                          ></path>
                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              fill-opacity="0"
                              stroke="rgb(0,0,0)"
                              stroke-opacity="1"
                              stroke-width="20"
                              d=" M211,241 C211,241 90,241 90,241 C73.43099975585938,241 60,227.56900024414062 60,211 C60,194.43099975585938 73.43099975585938,181 90,181 C90,181 211,181 211,181 C227.56900024414062,181 241,194.43099975585938 241,211 C241,227.56900024414062 227.56900024414062,241 211,241z"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                    <clipPath id="__lottie_element_218">
                      <path d="M0,0 L620,0 L620,620 L0,620z"></path>
                    </clipPath>
                    <g id="__lottie_element_235">
                      <g
                        transform="matrix(0.800000011920929,0,0,0.800000011920929,250.1999969482422,249.8000030517578)"
                        opacity="1"
                      >
                        <path
                          fill="rgb(255,0,0)"
                          fill-opacity="1"
                          d=" M211,181 C211,181 90,181 90,181 C73.43099975585938,181 60,167.56900024414062 60,151 C60,134.43099975585938 73.43099975585938,121 90,121 C90,121 211,121 211,121 C227.56900024414062,121 241,134.43099975585938 241,151 C241,167.56900024414062 227.56900024414062,181 211,181z"
                        ></path>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M211,181 C211,181 90,181 90,181 C73.43099975585938,181 60,167.56900024414062 60,151 C60,134.43099975585938 73.43099975585938,121 90,121 C90,121 211,121 211,121 C227.56900024414062,121 241,134.43099975585938 241,151 C241,167.56900024414062 227.56900024414062,181 211,181z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <filter
                      id="__lottie_element_241"
                      filterUnits="objectBoundingBox"
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                    >
                      <feComponentTransfer in="SourceGraphic">
                        <feFuncA type="table" tableValues="1.0 0.0"></feFuncA>
                      </feComponentTransfer>
                    </filter>
                    <mask id="__lottie_element_235_2" mask-type="alpha">
                      <g filter="url(#__lottie_element_241)">
                        <rect
                          width="500"
                          height="500"
                          x="0"
                          y="0"
                          fill="#ffffff"
                          opacity="0"
                        ></rect>
                      </g>
                    </mask>
                    <g id="__lottie_element_242">
                      <g
                        transform="matrix(0.800000011920929,0,0,0.800000011920929,250.1999969482422,249.8000030517578)"
                        opacity="1"
                      >
                        <path
                          fill="rgb(255,0,0)"
                          fill-opacity="1"
                          d=" M211,121 C211,121 90,121 90,121 C73.43099975585938,121 60,107.56900024414062 60,91 C60,74.43099975585938 73.43099975585938,61 90,61 C90,61 211,61 211,61 C227.56900024414062,61 241,74.43099975585938 241,91 C241,107.56900024414062 227.56900024414062,121 211,121z"
                        ></path>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(0,0,0)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M211,121 C211,121 90,121 90,121 C73.43099975585938,121 60,107.56900024414062 60,91 C60,74.43099975585938 73.43099975585938,61 90,61 C90,61 211,61 211,61 C227.56900024414062,61 241,74.43099975585938 241,91 C241,107.56900024414062 227.56900024414062,121 211,121z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <filter
                      id="__lottie_element_248"
                      filterUnits="objectBoundingBox"
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                    >
                      <feComponentTransfer in="SourceGraphic">
                        <feFuncA type="table" tableValues="1.0 0.0"></feFuncA>
                      </feComponentTransfer>
                    </filter>
                    <mask id="__lottie_element_242_2" mask-type="alpha">
                      <g filter="url(#__lottie_element_248)">
                        <rect
                          width="500"
                          height="500"
                          x="0"
                          y="0"
                          fill="#ffffff"
                          opacity="0"
                        ></rect>
                      </g>
                    </mask>
                    <g id="__lottie_element_249">
                      <g
                        transform="matrix(0.800000011920929,0,0,0.800000011920929,250.1999969482422,249.8000030517578)"
                        opacity="1"
                      >
                        <path
                          fill="rgb(255,0,0)"
                          fill-opacity="1"
                          d=" M211,61 C211,61 90,61 90,61 C73.43099975585938,61 60,47.569000244140625 60,31 C60,14.430999755859375 73.43099975585938,1 90,1 C90,1 211,1 211,1 C227.56900024414062,1 241,14.430999755859375 241,31 C241,47.569000244140625 227.56900024414062,61 211,61z"
                        ></path>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M211,61 C211,61 90,61 90,61 C73.43099975585938,61 60,47.569000244140625 60,31 C60,14.430999755859375 73.43099975585938,1 90,1 C90,1 211,1 211,1 C227.56900024414062,1 241,14.430999755859375 241,31 C241,47.569000244140625 227.56900024414062,61 211,61z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <filter
                      id="__lottie_element_255"
                      filterUnits="objectBoundingBox"
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                    >
                      <feComponentTransfer in="SourceGraphic">
                        <feFuncA type="table" tableValues="1.0 0.0"></feFuncA>
                      </feComponentTransfer>
                    </filter>
                    <mask id="__lottie_element_249_2" mask-type="alpha">
                      <g filter="url(#__lottie_element_255)">
                        <rect
                          width="500"
                          height="500"
                          x="0"
                          y="0"
                          fill="#ffffff"
                          opacity="0"
                        ></rect>
                      </g>
                    </mask>
                    <filter
                      id="__lottie_element_259"
                      filterUnits="objectBoundingBox"
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                    >
                      <feComponentTransfer in="SourceGraphic">
                        <feFuncA type="table" tableValues="1.0 0.0"></feFuncA>
                      </feComponentTransfer>
                    </filter>
                    <mask id="__lottie_element_217_2" mask-type="alpha">
                      <g filter="url(#__lottie_element_259)">
                        <rect
                          width="500"
                          height="500"
                          x="0"
                          y="0"
                          fill="#ffffff"
                          opacity="0"
                        ></rect>
                      </g>
                    </mask>
                  </defs>
                  <g clip-path="url(#__lottie_element_209)">
                    <g
                      transform="matrix(0.800000011920929,0,0,0.800000011920929,250.1999969482422,249.8000030517578)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill-opacity="0"
                          stroke="rgb(255,255,255)"
                          stroke-opacity="1"
                          stroke-width="20"
                          d=" M211,61 C211,61 90,61 90,61 C73.43099975585938,61 60,47.569000244140625 60,31 C60,14.430999755859375 73.43099975585938,1 90,1 C90,1 211,1 211,1 C227.56900024414062,1 241,14.430999755859375 241,31 C241,47.569000244140625 227.56900024414062,61 211,61z"
                        ></path>
                      </g>
                    </g>
                    <g mask="url(#__lottie_element_249_2)">
                      <g
                        transform="matrix(0.800000011920929,0,0,0.800000011920929,250.1999969482422,249.8000030517578)"
                        opacity="1"
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M211,121 C211,121 90,121 90,121 C73.43099975585938,121 60,107.56900024414062 60,91 C60,74.43099975585938 73.43099975585938,61 90,61 C90,61 211,61 211,61 C227.56900024414062,61 241,74.43099975585938 241,91 C241,107.56900024414062 227.56900024414062,121 211,121z"
                          ></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,151.25,90.25)">
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="4"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="0"
                            stroke-width="20"
                            d=" M113.25,-47.75 C113.25,-47.75 113.25,47.75 113.25,47.75 C113.25,47.75 -113.25,47.75 -113.25,47.75 C-113.25,47.75 -113.25,-47.75 -113.25,-47.75 C-113.25,-47.75 113.25,-47.75 113.25,-47.75z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g mask="url(#__lottie_element_242_2)">
                      <g
                        transform="matrix(0.800000011920929,0,0,0.800000011920929,250.1999969482422,249.8000030517578)"
                        opacity="1"
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M211,181 C211,181 90,181 90,181 C73.43099975585938,181 60,167.56900024414062 60,151 C60,134.43099975585938 73.43099975585938,121 90,121 C90,121 211,121 211,121 C227.56900024414062,121 241,134.43099975585938 241,151 C241,167.56900024414062 227.56900024414062,181 211,181z"
                          ></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,149.5,152.5)">
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="4"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="0"
                            stroke-width="20"
                            d=" M116.5,-53 C116.5,-53 116.5,53 116.5,53 C116.5,53 -116.5,53 -116.5,53 C-116.5,53 -116.5,-53 -116.5,-53 C-116.5,-53 116.5,-53 116.5,-53z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g mask="url(#__lottie_element_235_2)">
                      <g
                        transform="matrix(0.800000011920929,0,0,0.800000011920929,250.1999969482422,249.8000030517578)"
                        opacity="1"
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M211,241 C211,241 90,241 90,241 C73.43099975585938,241 60,227.56900024414062 60,211 C60,194.43099975585938 73.43099975585938,181 90,181 C90,181 211,181 211,181 C227.56900024414062,181 241,194.43099975585938 241,211 C241,227.56900024414062 227.56900024414062,241 211,241z"
                          ></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,151.25,214)">
                          <path
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            fill-opacity="0"
                            stroke-miterlimit="4"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="0"
                            stroke-width="20"
                            d=" M113.75,-56 C113.75,-56 113.75,56 113.75,56 C113.75,56 -113.75,56 -113.75,56 C-113.75,56 -113.75,-56 -113.75,-56 C-113.75,-56 113.75,-56 113.75,-56z"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g mask="url(#__lottie_element_217_2)">
                      <g
                        transform="matrix(0.800000011920929,0,0,0.800000011920929,250.1999969482422,249.8000030517578)"
                        opacity="1"
                      >
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M0,-59 C0,-59 -120,-59 -120,-59 C-136.56900024414062,-59 -150,-72.43099975585938 -150,-89 C-150,-105.56900024414062 -136.56900024414062,-119 -120,-119 C-120,-119 0,-119 0,-119 C16.569000244140625,-119 30,-105.56900024414062 30,-89 C30,-72.43099975585938 16.569000244140625,-59 0,-59z"
                          ></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M0.003000000026077032,-59.00699996948242 C31.51300048828125,-46.494998931884766 58.994998931884766,-24.615999221801758 79.68000030517578,2.822000026702881"
                          ></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M-120.00299835205078,-59.00699996948242 C-189.91299438476562,-31.246999740600586 -241,42.62799835205078 -241,121 C-241,220.41099548339844 -159.41099548339844,241 -60,241 C-13.053999900817871,241 30.43400001525879,237.86900329589844 61.7400016784668,221.09300231933594 C111.5,194.4290008544922 139.99400329589844,117.5479965209961 79.68000030517578,2.822000026702881"
                          ></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M-30,-211 C-30,-211 30,-211 30,-211 C30,-211 0,-119 0,-119"
                          ></path>
                        </g>
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(255,255,255)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M-120,-119 C-120,-119 -150,-211 -150,-211 C-150,-211 -90,-211 -90,-211 C-90,-227.56900024414062 -76.56900024414062,-241 -60,-241 C-43.430999755859375,-241 -30,-227.56900024414062 -30,-211 C-30,-211 -30,-181 -30,-181"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g
                      transform="matrix(0.800000011920929,0,0,0.800000011920929,250.1999969482422,249.8000030517578)"
                      opacity="1"
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill-opacity="0"
                            stroke="rgb(75,247,169)"
                            stroke-opacity="1"
                            stroke-width="20"
                            d=" M-30.160999298095703,65.39299774169922 C-30.160999298095703,48.82400131225586 -43.59199905395508,35.393001556396484 -60.1609992980957,35.393001556396484 C-76.7300033569336,35.393001556396484 -90.16100311279297,48.82400131225586 -90.16100311279297,65.39299774169922 C-90.16100311279297,81.96199798583984 -76.7300033569336,95.39299774169922 -60.1609992980957,95.39299774169922 C-43.59199905395508,95.39299774169922 -30.160999298095703,108.8239974975586 -30.160999298095703,125.39299774169922 C-30.160999298095703,141.96200561523438 -43.59199905395508,155.39300537109375 -60.1609992980957,155.39300537109375 C-76.7300033569336,155.39300537109375 -90.16100311279297,141.96200561523438 -90.16100311279297,125.39299774169922"
                          ></path>
                        </g>
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill-opacity="0"
                          stroke="rgb(75,247,169)"
                          stroke-opacity="1"
                          stroke-width="20"
                          d=" M-60,1 C-60,1 -60,35.39400100708008 -60,35.39400100708008"
                        ></path>
                      </g>
                      <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          fill-opacity="0"
                          stroke="rgb(75,247,169)"
                          stroke-opacity="1"
                          stroke-width="20"
                          d=" M-60,155.39300537109375 C-60,155.39300537109375 -60,181 -60,181"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="font-bold text-xl">Simple Token</span>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Create a Simple Token, no fee option.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full items-center justify-center">
            <Image
              src={"/images/create/staking-bg-dark.png"}
              width={1200}
              height={700}
              alt="staking"
            />
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
