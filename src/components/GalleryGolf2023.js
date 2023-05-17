import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import '../styles/gallery.css'

import photo1 from '../img/galleryGolf2023/DSC_0259.jpg'
import photo2 from '../img/galleryGolf2023/DSC_0263.jpg'
import photo3 from '../img/galleryGolf2023/DSC_0264.jpg'
import photo4 from '../img/galleryGolf2023/DSC_0268.jpg'
import photo5 from '../img/galleryGolf2023/DSC_0271.jpg'
import photo6 from '../img/galleryGolf2023/DSC_0273.jpg'
import photo7 from '../img/galleryGolf2023/DSC_0275.jpg'
import photo8 from '../img/galleryGolf2023/DSC_0276.jpg'
import photo9 from '../img/galleryGolf2023/DSC_0277.jpg'
import photo10 from '../img/galleryGolf2023/DSC_0281.jpg'
import photo11 from '../img/galleryGolf2023/DSC_0282.jpg'
import photo13 from '../img/galleryGolf2023/DSC_0284.jpg'
import photo14 from '../img/galleryGolf2023/DSC_0285.jpg'
import photo15 from '../img/galleryGolf2023/DSC_0286.jpg'
import photo16 from '../img/galleryGolf2023/DSC_0288.jpg'
import photo17 from '../img/galleryGolf2023/DSC_0290.jpg'
import photo18 from '../img/galleryGolf2023/DSC_0292.jpg'
import photo20 from '../img/galleryGolf2023/DSC_0295.jpg'
import photo21 from '../img/galleryGolf2023/DSC_0299.jpg'
import photo22 from '../img/galleryGolf2023/DSC_0302.jpg'
import photo23 from '../img/galleryGolf2023/DSC_0303.jpg'
import photo24 from '../img/galleryGolf2023/DSC_0304.jpg'
import photo25 from '../img/galleryGolf2023/DSC_0305.jpg'
import photo26 from '../img/galleryGolf2023/DSC_0306.jpg'
import photo27 from '../img/galleryGolf2023/DSC_0307.jpg'
import photo28 from '../img/galleryGolf2023/DSC_0308.jpg'
import photo29 from '../img/galleryGolf2023/DSC_0309.jpg'
import photo30 from '../img/galleryGolf2023/DSC_0312.jpg'
import photo31 from '../img/galleryGolf2023/DSC_0313.jpg'
import photo32 from '../img/galleryGolf2023/DSC_0314.jpg'
import photo33 from '../img/galleryGolf2023/DSC_0315.jpg'
import photo34 from '../img/galleryGolf2023/DSC_0316.jpg'
import photo35 from '../img/galleryGolf2023/DSC_0317.jpg'
import photo36 from '../img/galleryGolf2023/DSC_0320.jpg'
import photo37 from '../img/galleryGolf2023/DSC_0321.jpg'
import photo38 from '../img/galleryGolf2023/DSC_0322.jpg'
import photo39 from '../img/galleryGolf2023/DSC_0323.jpg'
import photo40 from '../img/galleryGolf2023/DSC_0324.jpg'
import photo41 from '../img/galleryGolf2023/DSC_0325.jpg'
import photo42 from '../img/galleryGolf2023/DSC_0327.jpg'
import photo43 from '../img/galleryGolf2023/DSC_0328.jpg'
import photo44 from '../img/galleryGolf2023/DSC_0331.jpg'
import photo45 from '../img/galleryGolf2023/DSC_0333.jpg'
import photo46 from '../img/galleryGolf2023/DSC_0335.jpg'
import photo47 from '../img/galleryGolf2023/DSC_0336.jpg'
import photo48 from '../img/galleryGolf2023/DSC_0337.jpg'
import photo49 from '../img/galleryGolf2023/DSC_0340.jpg'
import photo50 from '../img/galleryGolf2023/DSC_0341.jpg'
import photo51 from '../img/galleryGolf2023/DSC_0342.jpg'
import photo52 from '../img/galleryGolf2023/DSC_0343.jpg'
import photo53 from '../img/galleryGolf2023/DSC_0344.jpg'
import photo54 from '../img/galleryGolf2023/DSC_0346.jpg'
import photo55 from '../img/galleryGolf2023/DSC_0348.jpg'
import photo56 from '../img/galleryGolf2023/DSC_0350.jpg'
import photo57 from '../img/galleryGolf2023/DSC_0351.jpg'
import photo58 from '../img/galleryGolf2023/DSC_0352.jpg'
import photo59 from '../img/galleryGolf2023/DSC_0353.jpg'
import photo60 from '../img/galleryGolf2023/DSC_0355.jpg'
import photo61 from '../img/galleryGolf2023/DSC_0358.jpg'
import photo62 from '../img/galleryGolf2023/DSC_0359.jpg'
import photo63 from '../img/galleryGolf2023/DSC_0360.jpg'
import photo64 from '../img/galleryGolf2023/DSC_0361.jpg'
import photo65 from '../img/galleryGolf2023/DSC_0362.jpg'
import photo66 from '../img/galleryGolf2023/DSC_0363.jpg'
import photo67 from '../img/galleryGolf2023/DSC_0366.jpg'
import photo68 from '../img/galleryGolf2023/DSC_0369.jpg'
import photo69 from '../img/galleryGolf2023/DSC_0370.jpg'
import photo70 from '../img/galleryGolf2023/DSC_0372.jpg'
import photo71 from '../img/galleryGolf2023/DSC_0373.jpg'
import photo72 from '../img/galleryGolf2023/DSC_0377.jpg'
import photo73 from '../img/galleryGolf2023/DSC_0379.jpg'
import photo74 from '../img/galleryGolf2023/DSC_0381.jpg'
import photo75 from '../img/galleryGolf2023/DSC_0383.jpg'
import photo76 from '../img/galleryGolf2023/DSC_0384.jpg'
import photo77 from '../img/galleryGolf2023/DSC_0386.jpg'
import photo78 from '../img/galleryGolf2023/DSC_0393.jpg'
import photo79 from '../img/galleryGolf2023/DSC_0397.jpg'
import photo80 from '../img/galleryGolf2023/DSC_0398.jpg'
import photo81 from '../img/galleryGolf2023/DSC_0399.jpg'
import photo82 from '../img/galleryGolf2023/DSC_0401.jpg'
import photo83 from '../img/galleryGolf2023/DSC_0402.jpg'
import photo84 from '../img/galleryGolf2023/DSC_0404.jpg'
import photo85 from '../img/galleryGolf2023/DSC_0408.jpg'
import photo86 from '../img/galleryGolf2023/DSC_0409.jpg'
import photo87 from '../img/galleryGolf2023/DSC_0410.jpg'
import photo88 from '../img/galleryGolf2023/DSC_0412.jpg'
import photo89 from '../img/galleryGolf2023/DSC_0413.jpg'
import photo90 from '../img/galleryGolf2023/DSC_0414.jpg'
import photo91 from '../img/galleryGolf2023/DSC_0417.jpg'
import photo92 from '../img/galleryGolf2023/DSC_0420.jpg'
import photo93 from '../img/galleryGolf2023/DSC_0423.jpg'
import photo94 from '../img/galleryGolf2023/DSC_0425.jpg'
import photo95 from '../img/galleryGolf2023/DSC_0426.jpg'
import photo96 from '../img/galleryGolf2023/DSC_0427.jpg'
import photo97 from '../img/galleryGolf2023/DSC_0428.jpg'
import photo98 from '../img/galleryGolf2023/DSC_0429.jpg'
import photo99 from '../img/galleryGolf2023/DSC_0430.jpg'
import photo100 from '../img/galleryGolf2023/DSC_0431.jpg'
import photo101 from '../img/galleryGolf2023/DSC_0433.jpg'
import photo102 from '../img/galleryGolf2023/DSC_0434.jpg'
import photo103 from '../img/galleryGolf2023/DSC_0436.jpg'
import photo104 from '../img/galleryGolf2023/DSC_0438.jpg'
import photo105 from '../img/galleryGolf2023/DSC_0445.jpg'
import photo106 from '../img/galleryGolf2023/DSC_0447.jpg'
import photo107 from '../img/galleryGolf2023/DSC_0448.jpg'
import photo108 from '../img/galleryGolf2023/DSC_0449.jpg'
import photo109 from '../img/galleryGolf2023/DSC_0452.jpg'
import photo110 from '../img/galleryGolf2023/DSC_0453.jpg'
import photo111 from '../img/galleryGolf2023/DSC_0455.jpg'
import photo112 from '../img/galleryGolf2023/DSC_0457.jpg'
import photo113 from '../img/galleryGolf2023/DSC_0458.jpg'
import photo114 from '../img/galleryGolf2023/DSC_0459.jpg'
import photo115 from '../img/galleryGolf2023/DSC_0460.jpg'
import photo116 from '../img/galleryGolf2023/DSC_0462.jpg'
import photo117 from '../img/galleryGolf2023/DSC_0464.jpg'
import photo118 from '../img/galleryGolf2023/DSC_0465.jpg'
import photo119 from '../img/galleryGolf2023/DSC_0466.jpg'
import photo120 from '../img/galleryGolf2023/DSC_0467.jpg'
import photo121 from '../img/galleryGolf2023/DSC_0470.jpg'
import photo122 from '../img/galleryGolf2023/DSC_0471.jpg'
import photo123 from '../img/galleryGolf2023/DSC_0473.jpg'
import photo124 from '../img/galleryGolf2023/DSC_0475.jpg'
import photo125 from '../img/galleryGolf2023/DSC_0476.jpg'
import photo126 from '../img/galleryGolf2023/DSC_0481.jpg'
import photo127 from '../img/galleryGolf2023/DSC_0478.jpg'
import photo128 from '../img/galleryGolf2023/DSC_0479.jpg'
import photo129 from '../img/galleryGolf2023/DSC_0480.jpg'
import photo130 from '../img/galleryGolf2023/DSC_0488.jpg'
import photo131 from '../img/galleryGolf2023/DSC_0490.jpg'
import photo132 from '../img/galleryGolf2023/DSC_0495.jpg'
import photo133 from '../img/galleryGolf2023/DSC_0497.jpg'
import photo134 from '../img/galleryGolf2023/DSC_0498.jpg'
import photo135 from '../img/galleryGolf2023/DSC_0499.jpg'
import photo136 from '../img/galleryGolf2023/DSC_0500.jpg'
import photo137 from '../img/galleryGolf2023/DSC_0502.jpg'
import photo138 from '../img/galleryGolf2023/DSC_0504.jpg'
import photo139 from '../img/galleryGolf2023/DSC_0505.jpg'
import photo140 from '../img/galleryGolf2023/DSC_0506.jpg'
import photo141 from '../img/galleryGolf2023/DSC_0507.jpg'
import photo142 from '../img/galleryGolf2023/DSC_0508.jpg'
import photo143 from '../img/galleryGolf2023/DSC_0509.jpg'
import photo144 from '../img/galleryGolf2023/DSC_0510.jpg'
import photo145 from '../img/galleryGolf2023/DSC_0511.jpg'
import photo146 from '../img/galleryGolf2023/DSC_0512.jpg'
import photo147 from '../img/galleryGolf2023/DSC_0513.jpg'
import photo148 from '../img/galleryGolf2023/DSC_0514.jpg'
import photo149 from '../img/galleryGolf2023/DSC_0517.jpg'
import photo150 from '../img/galleryGolf2023/DSC_0518.jpg'
import photo151 from '../img/galleryGolf2023/DSC_0520.jpg'
import photo152 from '../img/galleryGolf2023/DSC_0521.jpg'
import photo153 from '../img/galleryGolf2023/DSC_0540.jpg'
import photo154 from '../img/galleryGolf2023/DSC_0542.jpg'
import photo155 from '../img/galleryGolf2023/DSC_0543.jpg'
import photo156 from '../img/galleryGolf2023/DSC_0545.jpg'
import photo157 from '../img/galleryGolf2023/DSC_0548.jpg'
import photo158 from '../img/galleryGolf2023/DSC_0549.jpg'
import photo159 from '../img/galleryGolf2023/DSC_0551.jpg'
import photo160 from '../img/galleryGolf2023/DSC_0553.jpg'
import photo161 from '../img/galleryGolf2023/DSC_0558.jpg'
import photo162 from '../img/galleryGolf2023/DSC_0560.jpg'
import photo163 from '../img/galleryGolf2023/DSC_0562.jpg'
import photo164 from '../img/galleryGolf2023/DSC_0563.jpg'
import photo165 from '../img/galleryGolf2023/DSC_0567.jpg'
import photo166 from '../img/galleryGolf2023/DSC_0570.jpg'
import photo167 from '../img/galleryGolf2023/DSC_0574.jpg'
import photo168 from '../img/galleryGolf2023/DSC_0576.jpg'
import photo169 from '../img/galleryGolf2023/DSC_0578.jpg'
import photo170 from '../img/galleryGolf2023/DSC_0580.jpg'
import photo171 from '../img/galleryGolf2023/DSC_0583.jpg'
import photo172 from '../img/galleryGolf2023/DSC_0584.jpg'
import photo173 from '../img/galleryGolf2023/DSC_0588.jpg'
import photo174 from '../img/galleryGolf2023/DSC_0591.jpg'
import photo175 from '../img/galleryGolf2023/DSC_0593.jpg'
import photo176 from '../img/galleryGolf2023/DSC_0595.jpg'
import photo177 from '../img/galleryGolf2023/DSC_0597.jpg'
import photo178 from '../img/galleryGolf2023/DSC_0599.jpg'
import photo179 from '../img/galleryGolf2023/DSC_0602.jpg'
import photo180 from '../img/galleryGolf2023/DSC_0604.jpg'
import photo181 from '../img/galleryGolf2023/DSC_0607.jpg'
import photo182 from '../img/galleryGolf2023/DSC_0608.jpg'
import photo183 from '../img/galleryGolf2023/DSC_0609.jpg'
import photo184 from '../img/galleryGolf2023/DSC_0610.jpg'
import photo185 from '../img/galleryGolf2023/DSC_0611.jpg'
import photo186 from '../img/galleryGolf2023/DSC_0614.jpg'
import photo187 from '../img/galleryGolf2023/DSC_0615.jpg'
import photo188 from '../img/galleryGolf2023/DSC_0621.jpg'
import photo189 from '../img/galleryGolf2023/DSC_0652.jpg'
import photo190 from '../img/galleryGolf2023/DSC_0658.jpg'
import photo191 from '../img/galleryGolf2023/DSC_0661.jpg'
import photo192 from '../img/galleryGolf2023/DSC_0671.jpg'
import photo193 from '../img/galleryGolf2023/DSC_0677.jpg'
import photo194 from '../img/galleryGolf2023/DSC_0681.jpg'
import photo195 from '../img/galleryGolf2023/DSC_0687.jpg'
import photo196 from '../img/galleryGolf2023/DSC_0692.jpg'
import photo197 from '../img/galleryGolf2023/DSC_0700.jpg'
import photo198 from '../img/galleryGolf2023/DSC_0706.jpg'
import photo199 from '../img/galleryGolf2023/DSC_0724.jpg'
import photo200 from '../img/galleryGolf2023/DSC_0728.jpg'
import photo201 from '../img/galleryGolf2023/DSC_0738.jpg'
import photo202 from '../img/galleryGolf2023/DSC_0755.jpg'
import photo203 from '../img/galleryGolf2023/DSC_0764.jpg'
import photo204 from '../img/galleryGolf2023/DSC_0778.jpg'
import photo205 from '../img/galleryGolf2023/DSC_0784.jpg'
import photo206 from '../img/galleryGolf2023/DSC_0788.jpg'
import photo207 from '../img/galleryGolf2023/DSC_0796.jpg'
import photo208 from '../img/galleryGolf2023/DSC_0797.jpg'
import photo209 from '../img/galleryGolf2023/DSC_0805.jpg'
import photo210 from '../img/galleryGolf2023/DSC_0810.jpg'
import photo211 from '../img/galleryGolf2023/DSC_0816.jpg'
import photo212 from '../img/galleryGolf2023/DSC_0822.jpg'
import photo213 from '../img/galleryGolf2023/DSC_0827.jpg'
import photo214 from '../img/galleryGolf2023/DSC_0829.jpg'
import photo215 from '../img/galleryGolf2023/DSC_0835.jpg'
import photo216 from '../img/galleryGolf2023/DSC_0846.jpg'
import photo217 from '../img/galleryGolf2023/DSC_0859.jpg'
import photo218 from '../img/galleryGolf2023/DSC_0871.jpg'
import photo219 from '../img/galleryGolf2023/DSC_0885.jpg'
import photo220 from '../img/galleryGolf2023/DSC_0287.jpg'
import photo221 from '../img/galleryGolf2023/DSC_0897.jpg'
import photo222 from '../img/galleryGolf2023/DSC_0898.jpg'
import photo223 from '../img/galleryGolf2023/DSC_0902.jpg'
import photo224 from '../img/galleryGolf2023/DSC_0908.jpg'
import photo225 from '../img/galleryGolf2023/DSC_0909.jpg'
import photo226 from '../img/galleryGolf2023/DSC_0915.jpg'
import photo227 from '../img/galleryGolf2023/DSC_0918.jpg'
import photo228 from '../img/galleryGolf2023/DSC_0931.jpg'
import photo229 from '../img/galleryGolf2023/DSC_0950.jpg'
import photo230 from '../img/galleryGolf2023/DSC_0954.jpg'
import photo231 from '../img/galleryGolf2023/DSC_0968.jpg'
import photo232 from '../img/galleryGolf2023/DSC_0975.jpg'
import photo234 from '../img/galleryGolf2023/DSC_0987.jpg'
import photo235 from '../img/galleryGolf2023/DSC_1024.jpg'
import photo236 from '../img/galleryGolf2023/DSC_1036.jpg'
import photo237 from '../img/galleryGolf2023/DSC_1047.jpg'
import photo238 from '../img/galleryGolf2023/DSC_1063.jpg'
import photo239 from '../img/galleryGolf2023/DSC_1064.jpg'
import photo240 from '../img/galleryGolf2023/DSC_1075.jpg'
import photo241 from '../img/galleryGolf2023/DSC_1085.jpg'
import photo242 from '../img/galleryGolf2023/DSC_1087.jpg'
import photo243 from '../img/galleryGolf2023/DSC_1094.jpg'
import photo244 from '../img/galleryGolf2023/DSC_1105.jpg'

const arrayImgs = [
	{ path: photo1, id: 1 },
	{ path: photo2, id: 2 },
	{ path: photo3, id: 3 },
	{ path: photo4, id: 4 },
	{ path: photo5, id: 5 },
	{ path: photo6, id: 6 },
	{ path: photo7, id: 7 },
	{ path: photo8, id: 8 },
	{ path: photo9, id: 9 },
	{ path: photo10, id: 10 },
	{ path: photo11, id: 11 },
	{ path: photo13, id: 13 },
	{ path: photo14, id: 14 },
	{ path: photo15, id: 15 },
	{ path: photo16, id: 16 },
	{ path: photo17, id: 17 },
	{ path: photo18, id: 18 },
	{ path: photo20, id: 20 },
	{ path: photo21, id: 21 },
	{ path: photo22, id: 22 },
	{ path: photo23, id: 23 },
	{ path: photo24, id: 24 },
	{ path: photo25, id: 25 },
	{ path: photo26, id: 26 },
	{ path: photo27, id: 27 },
	{ path: photo28, id: 28 },
	{ path: photo29, id: 29 },
	{ path: photo30, id: 30 },
	{ path: photo31, id: 31 },
	{ path: photo32, id: 32 },
	{ path: photo33, id: 33 },
	{ path: photo34, id: 34 },
	{ path: photo35, id: 35 },
	{ path: photo36, id: 36 },
	{ path: photo37, id: 37 },
	{ path: photo38, id: 38 },
	{ path: photo39, id: 39 },
	{ path: photo40, id: 40 },
	{ path: photo41, id: 41 },
	{ path: photo42, id: 42 },
	{ path: photo43, id: 43 },
	{ path: photo44, id: 44 },
	{ path: photo45, id: 45 },
	{ path: photo46, id: 46 },
	{ path: photo47, id: 47 },
	{ path: photo48, id: 48 },
	{ path: photo49, id: 49 },
	{ path: photo50, id: 50 },
	{ path: photo51, id: 51 },
	{ path: photo52, id: 52 },
	{ path: photo53, id: 53 },
	{ path: photo54, id: 54 },
	{ path: photo55, id: 55 },
	{ path: photo56, id: 56 },
	{ path: photo57, id: 57 },
	{ path: photo58, id: 58 },
	{ path: photo59, id: 59 },
	{ path: photo60, id: 60 },
	{ path: photo61, id: 61 },
	{ path: photo62, id: 62 },
	{ path: photo63, id: 63 },
	{ path: photo64, id: 64 },
	{ path: photo65, id: 65 },
	{ path: photo66, id: 66 },
	{ path: photo67, id: 67 },
	{ path: photo68, id: 68 },
	{ path: photo69, id: 69 },
	{ path: photo70, id: 70 },
	{ path: photo71, id: 71 },
	{ path: photo72, id: 72 },
	{ path: photo73, id: 73 },
	{ path: photo74, id: 74 },
	{ path: photo75, id: 75 },
	{ path: photo76, id: 76 },
	{ path: photo77, id: 77 },
	{ path: photo78, id: 78 },
	{ path: photo79, id: 79 },
	{ path: photo80, id: 80 },
	{ path: photo81, id: 81 },
	{ path: photo82, id: 82 },
	{ path: photo83, id: 83 },
	{ path: photo84, id: 84 },
	{ path: photo85, id: 85 },
	{ path: photo86, id: 86 },
	{ path: photo87, id: 87 },
	{ path: photo88, id: 88 },
	{ path: photo89, id: 89 },
	{ path: photo90, id: 90 },
	{ path: photo91, id: 91 },
	{ path: photo92, id: 92 },
	{ path: photo93, id: 93 },
	{ path: photo94, id: 94 },
	{ path: photo95, id: 95 },
	{ path: photo96, id: 96 },
	{ path: photo97, id: 97 },
	{ path: photo98, id: 98 },
	{ path: photo99, id: 99 },
	{ path: photo100, id: 100 },
	{ path: photo101, id: 101 },
	{ path: photo102, id: 102 },
	{ path: photo103, id: 103 },
	{ path: photo104, id: 104 },
	{ path: photo105, id: 105 },
	{ path: photo106, id: 106 },
	{ path: photo107, id: 107 },
	{ path: photo108, id: 108 },
	{ path: photo109, id: 109 },
	{ path: photo110, id: 110 },
	{ path: photo111, id: 111 },
	{ path: photo112, id: 112 },
	{ path: photo113, id: 113 },
	{ path: photo114, id: 114 },
	{ path: photo115, id: 115 },
	{ path: photo116, id: 116 },
	{ path: photo117, id: 117 },
	{ path: photo118, id: 118 },
	{ path: photo119, id: 119 },
	{ path: photo120, id: 120 },
	{ path: photo121, id: 121 },
	{ path: photo122, id: 122 },
	{ path: photo123, id: 123 },
	{ path: photo124, id: 124 },
	{ path: photo125, id: 125 },
	{ path: photo126, id: 126 },
	{ path: photo127, id: 127 },
	{ path: photo128, id: 128 },
	{ path: photo129, id: 129 },
	{ path: photo130, id: 130 },
	{ path: photo131, id: 131 },
	{ path: photo132, id: 132 },
	{ path: photo133, id: 133 },
	{ path: photo134, id: 134 },
	{ path: photo135, id: 135 },
	{ path: photo136, id: 136 },
	{ path: photo137, id: 137 },
	{ path: photo138, id: 138 },
	{ path: photo139, id: 139 },
	{ path: photo140, id: 140 },
	{ path: photo141, id: 141 },
	{ path: photo142, id: 142 },
	{ path: photo143, id: 143 },
	{ path: photo144, id: 144 },
	{ path: photo145, id: 145 },
	{ path: photo146, id: 146 },
	{ path: photo147, id: 147 },
	{ path: photo148, id: 148 },
	{ path: photo149, id: 149 },
	{ path: photo150, id: 150 },
	{ path: photo151, id: 151 },
	{ path: photo152, id: 152 },
	{ path: photo153, id: 153 },
	{ path: photo154, id: 154 },
	{ path: photo155, id: 155 },
	{ path: photo156, id: 156 },
	{ path: photo157, id: 157 },
	{ path: photo158, id: 158 },
	{ path: photo159, id: 159 },
	{ path: photo160, id: 160 },
	{ path: photo161, id: 161 },
	{ path: photo162, id: 162 },
	{ path: photo163, id: 163 },
	{ path: photo164, id: 164 },
	{ path: photo165, id: 165 },
	{ path: photo166, id: 166 },
	{ path: photo167, id: 167 },
	{ path: photo168, id: 168 },
	{ path: photo169, id: 169 },
	{ path: photo170, id: 170 },
	{ path: photo171, id: 171 },
	{ path: photo172, id: 172 },
	{ path: photo173, id: 173 },
	{ path: photo174, id: 174 },
	{ path: photo175, id: 175 },
	{ path: photo176, id: 176 },
	{ path: photo177, id: 177 },
	{ path: photo178, id: 178 },
	{ path: photo179, id: 179 },
	{ path: photo180, id: 180 },
	{ path: photo181, id: 181 },
	{ path: photo182, id: 182 },
	{ path: photo183, id: 183 },
	{ path: photo184, id: 184 },
	{ path: photo185, id: 185 },
	{ path: photo186, id: 186 },
	{ path: photo187, id: 187 },
	{ path: photo188, id: 188 },
	{ path: photo189, id: 189 },
	{ path: photo190, id: 190 },
	{ path: photo191, id: 191 },
	{ path: photo192, id: 192 },
	{ path: photo193, id: 193 },
	{ path: photo194, id: 194 },
	{ path: photo195, id: 195 },
	{ path: photo196, id: 196 },
	{ path: photo197, id: 197 },
	{ path: photo198, id: 198 },
	{ path: photo199, id: 199 },
	{ path: photo200, id: 200 },
	{ path: photo201, id: 201 },
	{ path: photo202, id: 202 },
	{ path: photo203, id: 203 },
	{ path: photo204, id: 204 },
	{ path: photo205, id: 205 },
	{ path: photo206, id: 206 },
	{ path: photo207, id: 207 },
	{ path: photo208, id: 208 },
	{ path: photo209, id: 209 },
	{ path: photo210, id: 210 },
	{ path: photo211, id: 211 },
	{ path: photo212, id: 212 },
	{ path: photo213, id: 213 },
	{ path: photo214, id: 214 },
	{ path: photo215, id: 215 },
	{ path: photo216, id: 216 },
	{ path: photo217, id: 217 },
	{ path: photo218, id: 218 },
	{ path: photo219, id: 219 },
	{ path: photo220, id: 220 },
	{ path: photo221, id: 221 },
	{ path: photo222, id: 222 },
	{ path: photo223, id: 223 },
	{ path: photo224, id: 224 },
	{ path: photo225, id: 225 },
	{ path: photo226, id: 226 },
	{ path: photo227, id: 227 },
	{ path: photo228, id: 228 },
	{ path: photo229, id: 229 },
	{ path: photo230, id: 230 },
	{ path: photo231, id: 231 },
	{ path: photo232, id: 232 },
	{ path: photo234, id: 234 },
	{ path: photo235, id: 235 },
	{ path: photo236, id: 236 },
	{ path: photo237, id: 237 },
	{ path: photo238, id: 238 },
	{ path: photo239, id: 239 },
	{ path: photo240, id: 240 },
	{ path: photo241, id: 241 },
	{ path: photo242, id: 242 },
	{ path: photo243, id: 243 },
	{ path: photo244, id: 244 }
]

const GalleryGolf2023 = () => {
	const [show, setShow] = useState(false)
	const [image, setImage] = useState('')

	const handleClose = () => setShow(false)

	const handleShow = (item) => {
		setShow(true)
		setImage(item)
	}
	return (
		<div>
			<>
				<Modal id="gallery-modal" show={show} onHide={handleClose}>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body className="modal-body">
						<img src={image} alt="Golf 2023" />
					</Modal.Body>
				</Modal>

				<div className="d-flex flex-wrap" style={{ gap: '1em' }}>
					{arrayImgs &&
						arrayImgs.map((item) => {
							return (
								<div key={item.id} onClick={() => handleShow(item.path)}>
									<img
										src={item.path}
										alt="Golturnier 2023"
										style={{ height: '6em', width: '6em', objectFit: 'cover' }}
									/>
								</div>
							)
						})}
				</div>
			</>
		</div>
	)
}

export default GalleryGolf2023
