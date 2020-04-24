import React, { useEffect } from "react";
import { gsap } from "gsap";
import { white } from "../../style/colors";

const RocketSpinner = () => {
  useEffect(() => {
    gsap.to(".spinner", {
      duration: 3.5,
      rotation: 720,
      repeat: -1,
      transformOrigin: "50% 50%",
      ease: "sine.out",
    });
  }, []);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
      xmlSpace="preserve"
    >
      <path
        className="spinner"
        height="100px"
        width="100px"
        stroke={white}
        fill={white}
        d="M42.99,8.435c0.804,0,1.457,0.652,1.457,1.457s-0.652,1.457-1.457,1.457c-0.805,0-1.457-0.652-1.457-1.457  S42.186,8.435,42.99,8.435z M53.448,7.271c1.095,0,1.982,0.888,1.982,1.982s-0.888,1.982-1.982,1.982s-1.982-0.888-1.982-1.982  S52.354,7.271,53.448,7.271z M63.726,8.869c1.337,0,2.42,1.083,2.42,2.42s-1.083,2.42-2.42,2.42s-2.421-1.083-2.421-2.42  S62.389,8.869,63.726,8.869z M73.134,18.678c-1.536,0-2.782-1.246-2.782-2.783c0-1.537,1.246-2.783,2.782-2.783  c1.537,0,2.783,1.246,2.783,2.783S74.671,18.678,73.134,18.678z M81.059,25.838c-1.707,0-3.09-1.384-3.09-3.09s1.383-3.09,3.09-3.09  s3.091,1.383,3.091,3.09S82.766,25.838,81.059,25.838z M86.982,28.041c1.85,0,3.349,1.5,3.349,3.349c0,1.85-1.499,3.35-3.349,3.35  s-3.35-1.5-3.35-3.35C83.633,29.54,85.133,28.041,86.982,28.041z M90.496,44.796c-1.953,0-3.537-1.583-3.537-3.538  c0-1.953,1.584-3.537,3.537-3.537s3.537,1.583,3.537,3.537C94.033,43.213,92.449,44.796,90.496,44.796z M91.367,55.332  c-2.006,0-3.632-1.626-3.632-3.632c0-2.007,1.626-3.633,3.632-3.633c2.007,0,3.633,1.626,3.633,3.633  C95,53.706,93.374,55.332,91.367,55.332z M89.563,65.705c-2.036,0-3.687-1.651-3.687-3.687c0-2.036,1.65-3.687,3.687-3.687  s3.687,1.65,3.687,3.687C93.25,64.054,91.6,65.705,89.563,65.705z M85.172,75.286c-2.074,0-3.756-1.682-3.756-3.756  c0-2.075,1.682-3.757,3.756-3.757s3.757,1.682,3.757,3.757C88.929,73.604,87.246,75.286,85.172,75.286z M78.497,83.451  c-2.123,0-3.845-1.721-3.845-3.845s1.722-3.846,3.845-3.846c2.125,0,3.847,1.722,3.847,3.846S80.622,83.451,78.497,83.451z   M69.991,81.774c2.181,0,3.948,1.768,3.948,3.947c0,2.181-1.768,3.948-3.948,3.948c-2.18,0-3.947-1.768-3.947-3.948  C66.044,83.542,67.812,81.774,69.991,81.774z M60.204,93.51c-2.237,0-4.051-1.814-4.051-4.051c0-2.237,1.813-4.051,4.051-4.051  s4.052,1.813,4.052,4.051S62.441,93.51,60.204,93.51z M49.786,94.729c-2.3,0-4.165-1.864-4.165-4.165s1.865-4.165,4.165-4.165  c2.3,0,4.166,1.864,4.166,4.165S52.086,94.729,49.786,94.729z M39.428,93.271c-2.363,0-4.279-1.915-4.279-4.278  c0-2.362,1.916-4.278,4.279-4.278s4.279,1.916,4.279,4.278C43.707,91.355,41.791,93.271,39.428,93.271z M29.82,80.405  c2.436,0,4.411,1.975,4.411,4.411s-1.975,4.411-4.411,4.411c-2.437,0-4.412-1.975-4.412-4.411S27.383,80.405,29.82,80.405z   M21.597,82.877c-2.513,0-4.55-2.038-4.55-4.551s2.037-4.551,4.55-4.551s4.55,2.038,4.55,4.551S24.11,82.877,21.597,82.877z   M15.292,65.271c2.589,0,4.689,2.099,4.689,4.688s-2.1,4.689-4.689,4.689c-2.59,0-4.689-2.1-4.689-4.689  S12.702,65.271,15.292,65.271z M11.334,65.092c-2.669,0-4.833-2.163-4.833-4.833c0-2.669,2.164-4.833,4.833-4.833  s4.833,2.164,4.833,4.833C16.167,62.929,14.004,65.092,11.334,65.092z M9.996,54.864C7.237,54.864,5,52.627,5,49.868  s2.237-4.996,4.996-4.996c2.759,0,4.996,2.237,4.996,4.996C14.992,52.627,12.755,54.864,9.996,54.864z M27.253,32.491  c1.854-1.811,3.22-3.751,4.065-5.773c1.792-4.27,1.151-8.97,0.341-13.418c-0.048-0.267-0.158-0.511-0.31-0.727l0.066-0.095  c-0.014-0.011-0.028-0.022-0.043-0.033c-0.082-0.057-0.17-0.102-0.258-0.145c-0.058-0.055-0.113-0.111-0.178-0.159l-0.049,0.07  c-0.29-0.095-0.598-0.126-0.906-0.069c-4.634,0.844-9.072,1.864-12.438,5.043c-1.594,1.506-2.928,3.469-3.971,5.839  c-3.205,0.873-5.836,3.075-7.252,6.08c-0.269,0.583-0.224,1.251,0.121,1.795c0.345,0.533,0.947,0.857,1.586,0.852  c0.962-0.015,2.101,0.194,3.314,0.606c-0.057,0.787-0.082,1.488-0.076,2.133c0.006,0.599,0.303,1.162,0.795,1.509l0.002,0.001  l2.024,1.398l0.002-0.003l1.552,1.073c0.407,0.283,0.901,0.39,1.388,0.301c0.095-0.017,0.192-0.044,0.31-0.086  c0.629-0.232,1.29-0.506,1.969-0.82c0.814,0.994,1.411,1.986,1.737,2.895c0.132,0.36,0.371,0.668,0.687,0.888  c0.203,0.141,0.427,0.239,0.676,0.293c0.237,0.048,0.485,0.051,0.714,0.009c0.387-0.07,0.734-0.255,1.002-0.533  C26.438,39.033,27.57,35.794,27.253,32.491z M21.823,25.711c-1.375-1.155-1.67-3.195-0.625-4.697  c1.056-1.518,3.099-1.944,4.667-1.022c1.378,1.155,1.673,3.196,0.628,4.7C25.437,26.211,23.391,26.636,21.823,25.711z"
      />
    </svg>
  );
};

export default RocketSpinner;
