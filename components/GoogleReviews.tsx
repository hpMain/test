import Image from 'next/image';
import React from 'react';

export function GoogleReviews() {
    const reviews = [
        {
            text: "Trustable service provider with instant WhatsApp support. Services are best I love the way they treat their customers. I highly recommend hosting provider to others",
            stars: 5
        },
        {
            text: "best prices available the free plan has limitation and they charge 49rs as setup fees otherwise prices and features are best",
            stars: 5
        },
        {
            text: "I will give 5 star because of there full fledged cPanel server. I bought reseller package from Hosting Provider.",
            stars: 5
        }
    ];

    return (
        <div className='flex flex-row justify-center items-center p-5'>
            <div className='flex flex-col justify-center items-center max-w-[1000px] ml-5 mr-5 w-full'>
                <div className="flex flex-wrap gap-8 justify-center w-full">
                    {reviews.map((review, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow-md w-[310px]">
                            <div className="flex items-center mb-2">
                                <Image
                                    src="/Images/Logo/BrandLogo/GoogleLogo.png"
                                    alt="Google"
                                    width={500}
                                    height={50}
                                    style={{
                                        width: "auto",
                                        height: "50px"
                                    }}
                                />
                            </div>
                            <p className="text-gray-700 mb-2 h-[140px]">{review.text}</p>
                            <div className="flex">
                                {Array.from({ length: review.stars }).map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-[#fcbc05]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.84-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}