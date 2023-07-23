import Lottie from 'lottie-react';
import React from 'react';
import animationData from '../../Assets/animations/24151-ecommerce-animation.json';

const Loader = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<Lottie animationData={animationData} style={{ width: 300, height: 300 }} />
		</div>
	);
};

export default Loader;
