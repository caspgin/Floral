import { useEffect, useRef } from 'react';
import '../css/footer.css';

export function Footer() {
	const ref = useRef(null);

	useEffect(() => {
		const parent = ref.current;
		// Remove previously appended clones
		Array.from(parent.children).forEach((child) => {
			if (child.getAttribute('aria-hidden') === 'true') {
				parent.removeChild(child);
			}
		});

		const scroller = Array.from(parent.children).filter(
			(child) => child.getAttribute('aria-hidden') !== 'true',
		);
		const height = scroller[0].clientHeight;
		const parentHeight = parent.clientHeight;
		const number = Math.ceil(parentHeight / height) - 1;

		for (let i = 0; i < number; i++) {
			const duplicatedItem = scroller[0].cloneNode(true);
			duplicatedItem.setAttribute('aria-hidden', true);
			if (i % 2 == 0) {
				duplicatedItem.setAttribute('data-direction', 'right');
			}
			parent.appendChild(duplicatedItem);
		}

		console.log(scroller, height, parentHeight, number);
	}, []);

	return (
		<footer>
			<div className="left">
				<div className="top">
					<div className="socialMedia">
						<div>
							<div>Follow Us</div>
						</div>
						<div className="icon-container">
							<div className="icon">
								<div>
									<a
										href=" https://www.facebook.com/passionfloralboutique"
										aria-label="link to facebook page"
										target="_blank"
									>
										<svg
											version="1.1"
											id="Layer_1"
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											viewBox="-46.08 -46.08 604.16 604.16"
											xml:space="preserve"
											fill="transparent"
											stroke="#ffffff"
											strokeWidth="10"
											transform="rotate(0)"
										>
											<g id="SVGRepo_iconCarrier">
												<path d="M134.941,272.691h56.123v231.051c0,4.562,3.696,8.258,8.258,8.258h95.159 c4.562,0,8.258-3.696,8.258-8.258V273.78h64.519c4.195,0,7.725-3.148,8.204-7.315l9.799-85.061c0.269-2.34-0.472-4.684-2.038-6.44 c-1.567-1.757-3.81-2.763-6.164-2.763h-74.316V118.88c0-16.073,8.654-24.224,25.726-24.224c2.433,0,48.59,0,48.59,0 c4.562,0,8.258-3.698,8.258-8.258V8.319c0-4.562-3.696-8.258-8.258-8.258h-66.965C309.622,0.038,308.573,0,307.027,0 c-11.619,0-52.006,2.281-83.909,31.63c-35.348,32.524-30.434,71.465-29.26,78.217v62.352h-58.918c-4.562,0-8.258,3.696-8.258,8.258 v83.975C126.683,268.993,130.379,272.691,134.941,272.691z"></path>
											</g>
										</svg>
									</a>
								</div>
								<div>
									<a
										href="https://ca.pinterest.com/cl2512/"
										aria-label="link to pinterest page"
										target="_blank"
									>
										<svg
											version="1.1"
											id="Layer_1"
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											viewBox="-46.08 -46.08 604.16 604.16"
											xml:space="preserve"
											stroke="#ffffff"
											strokeWidth="10"
											fill="transparent"
										>
											<g id="SVGRepo_iconCarrier">
												<path d="M405.017,52.467C369.774,18.634,321.001,0,267.684,0C186.24,0,136.148,33.385,108.468,61.39 c-34.114,34.513-53.675,80.34-53.675,125.732c0,56.993,23.839,100.737,63.76,117.011c2.68,1.098,5.377,1.651,8.021,1.651 c8.422,0,15.095-5.511,17.407-14.35c1.348-5.071,4.47-17.582,5.828-23.013c2.906-10.725,0.558-15.884-5.78-23.353 c-11.546-13.662-16.923-29.817-16.923-50.842c0-62.451,46.502-128.823,132.689-128.823c68.386,0,110.866,38.868,110.866,101.434 c0,39.482-8.504,76.046-23.951,102.961c-10.734,18.702-29.609,40.995-58.585,40.995c-12.53,0-23.786-5.147-30.888-14.121 c-6.709-8.483-8.921-19.441-6.222-30.862c3.048-12.904,7.205-26.364,11.228-39.376c7.337-23.766,14.273-46.213,14.273-64.122 c0-30.632-18.832-51.215-46.857-51.215c-35.616,0-63.519,36.174-63.519,82.354c0,22.648,6.019,39.588,8.744,46.092 c-4.487,19.01-31.153,132.03-36.211,153.342c-2.925,12.441-20.543,110.705,8.618,118.54c32.764,8.803,62.051-86.899,65.032-97.713 c2.416-8.795,10.869-42.052,16.049-62.495c15.817,15.235,41.284,25.535,66.064,25.535c46.715,0,88.727-21.022,118.298-59.189 c28.679-37.02,44.474-88.618,44.474-145.282C457.206,127.983,438.182,84.311,405.017,52.467z"></path>{' '}
											</g>
										</svg>
									</a>
								</div>
								<div>
									<a
										href="https://www.instagram.com/passionfloral"
										aria-label="link to instagram page"
										target="_blank"
									>
										<svg
											viewBox="-3.12 -3.12 30.24 30.24"
											id="meteor-icon-kit__regular-instagram"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											stroke="white"
											stroke-width="0.552"
										>
											<g
												id="SVGRepo_tracerCarrier"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke="#white"
												stroke-width="0.336"
											></g>
											<g id="SVGRepo_iconCarrier">
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM11.9962 2.16929C15.1993 2.16929 15.5788 2.18153 16.8437 2.23924C18.0133 2.29257 18.6485 2.488 19.0712 2.65229C19.6312 2.86991 20.0308 3.12986 20.4506 3.54967C20.8704 3.96943 21.1303 4.36905 21.348 4.929C21.5122 5.35172 21.7077 5.98691 21.761 7.15653C21.8187 8.42148 21.831 8.80091 21.831 12.0041C21.831 15.2071 21.8187 15.5866 21.761 16.8515C21.7077 18.0211 21.5122 18.6563 21.348 19.0791C21.1303 19.639 20.8704 20.0386 20.4506 20.4584C20.0308 20.8782 19.6312 21.1381 19.0712 21.3558C18.6485 21.5201 18.0133 21.7155 16.8437 21.7688C15.579 21.8265 15.1996 21.8388 11.9962 21.8388C8.79286 21.8388 8.41352 21.8265 7.14871 21.7688C5.97909 21.7155 5.3439 21.5201 4.92119 21.3558C4.36124 21.1381 3.96162 20.8782 3.54186 20.4584C3.1221 20.0386 2.8621 19.639 2.64448 19.0791C2.48019 18.6563 2.28476 18.0211 2.23143 16.8515C2.17371 15.5866 2.16148 15.2071 2.16148 12.0041C2.16148 8.80091 2.17371 8.42148 2.23143 7.15653C2.28476 5.98691 2.48019 5.35172 2.64448 4.929C2.8621 4.36905 3.12205 3.96943 3.54186 3.54967C3.96162 3.12986 4.36124 2.86991 4.92119 2.65229C5.3439 2.488 5.97909 2.29257 7.14871 2.23924C8.41367 2.18153 8.7931 2.16929 11.9962 2.16929ZM11.9962 16.0028C9.78776 16.0028 7.99748 14.2125 7.99748 12.0041C7.99748 9.79558 9.78776 8.00529 11.9962 8.00529C14.2047 8.00529 15.995 9.79558 15.995 12.0041C15.995 14.2125 14.2047 16.0028 11.9962 16.0028ZM11.9962 5.84381C8.594 5.84381 5.836 8.60181 5.836 12.0041C5.836 15.4062 8.594 18.1642 11.9962 18.1642C15.3984 18.1642 18.1564 15.4062 18.1564 12.0041C18.1564 8.60181 15.3984 5.84381 11.9962 5.84381ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z"
												></path>
											</g>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="time">
						<div>
							<div>Business Hours</div>
						</div>
						<div className="schedule-container">
							<div className="schedule">
								<div>
									<p>Mon</p>
									<p>9:30 - 5:30</p>
								</div>
								<div>
									<p>Tue</p>
									<p>9:30 - 5:30</p>
								</div>
								<div>
									<p>Wed</p>
									<p>9:30 - 5:30</p>
								</div>
								<div>
									<p>Thu</p>
									<p>10:00 - 5:30</p>
								</div>
								<div>
									<p>Fri</p>
									<p>9:30 - 5:30</p>
								</div>
								<div>
									<p>Sat</p>
									<p>10:00 - 5:30</p>
								</div>
								<div>
									<p>Sun</p>
									<p>Closed</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom">
					<div>
						<div>
							<div>
								<div>Address</div>
							</div>
							<div>
								<address>
									<a
										href="https://maps.app.goo.gl/EvA3oY1Xnk6cDVuy7"
										aria-label="link to google maps page of the store"
										target="_blank"
									>
										223- 7155 Kingsway HighGate Village
										Burnaby
									</a>
								</address>
							</div>
						</div>
						<div>
							<div>
								<div>Phone</div>
							</div>
							<div>+1 (604) 540 8328</div>
						</div>
						<div>
							<div>
								<div>Email</div>
							</div>
							<div>info@passionfloral.ca</div>
						</div>
					</div>
				</div>
			</div>
			<div className="right">
				<div ref={ref} className="reel-container">
					<div className="scroller">
						<div className="inner-scroller">
							<span>Passion Floral</span>
							<span class="material-symbols-outlined">
								local_florist
							</span>
							<span>Passion Floral</span>
							<span class="material-symbols-outlined">
								local_florist
							</span>
							<span>Passion Floral</span>
							<span class="material-symbols-outlined">
								local_florist
							</span>
							<span>Passion Floral</span>
							<span class="material-symbols-outlined">
								local_florist
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
