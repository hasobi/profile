import React from 'react'
//comment
import { FaCode } from 'react-icons/fa';
import { DiAws } from "react-icons/di";
import { SiDocker } from "react-icons/si";
import { SiKubernetes,SiPython } from "react-icons/si";

function Skills() {
  return (
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
    <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
      <FaCode className="text-4xl mx-auto inline-block" />
      <p className="text-xl font-semibold mt-4">
        DevOps
      </p>
    </div>
      <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
        <DiAws className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          AWS
        </p>
      </div>
      <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
        <SiDocker className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Docker
        </p>
      </div>
      <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
        <SiKubernetes className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Kubernetes
        </p>
      </div>
      <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
        <SiPython className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Python
        </p>
      </div>
    </div>
  )
}

export default Skills
