import Layout from '../components/layout';
import '../public/globals.css';

// eslint-disable-next-line react/prop-types
export default function MyApp({Component, pageProps}) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
