"use client";

import React, { useState } from 'react';

const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async (content: any) => {
        try {
            await navigator.clipboard.writeText(content);
            setIsCopied(true);
            console.log('Copied to clipboard:', content);
        } catch (error) {
            setIsCopied(false);
            console.error('Unable to copy to clipboard:', error);
        }
    };

    return { isCopied, copyToClipboard };
};
type Props = {
    content: string;
}
const CopyToClipboardButton = ({ content }: Props) => {
    const { isCopied, copyToClipboard } = useCopyToClipboard();

    return (

        <div className="w-full max-w-sm">
            <div className="flex items-center">
                <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-white dark:text-[#006400] dark:border-gray-600">URL</span>
                <div className="relative w-full">
                    <input id="website-url" type="text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-e-0 border-gray-300 text-gray-[#006400] dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-[#01796F] dark:placeholder-[#006400]" value={content} readOnly disabled />
                </div>
                <button onClick={() => copyToClipboard(content)} data-tooltip-target="tooltip-website-url" data-copy-to-clipboard-target="website-url" className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-[#006400] rounded-e-lg focus:ring-4 focus:outline-none" type="button">

                    {
                        isCopied ? <span id="success-icon" className="inline-flex items-center">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </span> : <span id="default-icon">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                            </svg>
                        </span>

                    }

                </button>
                <div id="tooltip-website-url" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    <span id="default-tooltip-message">Copy link</span>
                    <span id="success-tooltip-message" className="hidden">Copied!</span>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>

        // <div>
        //     <button onClick={() => copyToClipboard(content)}>
        //         {isCopied ? 'Copied!' : 'Copy to Clipboard'}
        //     </button>
        // </div>
    );
};

export default CopyToClipboardButton;