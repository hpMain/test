"use client"
import React, { useState, useEffect } from 'react';
import Divider from './divider';

export function HostingYouGet() {
    const [features, setFeatures] = useState<string[][]>([]);
    useEffect(() => {
        fetch('/jsonData/features.json')
            .then(response => response.json())
            .then(data => setFeatures(data.features))
            .catch(error => console.error('Error loading the features:', error));
    }, []);

    return (<>
        <Divider marginTop='0px' marginBottom='-20px' />
        <div className='flex flex-col justify-center items-center bg-[#b3e0ff] p-8'>
            <div className='flex flex-col justify-center items-center max-w-[800px] ml-5 mr-5'>
                <h1 className="text-3xl font-bold text-center mb-4">
                    WITH ALL HOSTING PLANS, <span className="text-red-500">YOU GET</span>
                </h1>
                <p className="text-center mb-8">
                    With all hosting plans we offer NVMe SSD with unlimited storage. Well Optimized Server with Cloudlinux + LiteSpeed + imunify360 for Faster Website Performance & Server Security.
                </p>
            </div>
            <div className='flex flex-wrap flex-row justify-center items-start max-w-[1100px] ml-5 mr-5 w-full gap-10'>
                {features.map((column, index) => (
                    <ul key={index} className="list-none min-w-[230px]">
                        {column.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-center mb-2">
                                <span className="mr-2">✔</span> {feature}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
        <Divider marginTop='-20px' marginBottom='20px' />

    </>
    );
}