import { QuoteIcon } from "lucide-react";
import React from "react";
import { BsQuote } from "react-icons/bs";

const Quote = () => {
	return (
		<section className="mt-30 flex items-center justify-center">
			<div className="flex justify-center items-center flex-col max-w-[75%]">
				<div className="border border-gray min-w-162 max-w-full  p-8 relative">
					<BsQuote className="z-10 text-gray absolute -top-6 left-4 bg-secondary w-10  h-10" />
					<p className="font-medium text-white text-2xl">
						If it can be written in JavaScript, it will eventually
						be written in JavaScript.
					</p>
				    <BsQuote className="z-10 text-gray absolute -bottom-6 right-4 bg-secondary w-10  h-10" />
				</div>
				<div className="border border-gray p-8 relative self-end">
					<p className="font-medium text-white text-2xl">
                        - Atwood
					</p>
				</div>
			</div>
		</section>
	);
};

export default Quote;
